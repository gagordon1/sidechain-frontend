import { useParams } from 'react-router-dom'
import styled from "styled-components"
import ArtworkTile from '../components/ArtworkTile'
import Loader from '../components/Loader'
import { getMetadata, getOnChainData } from "../controllers/blockchainController"
import { Heading3 } from '../components/TextComponents'
import SubmitButton from '../components/SubmitButton'
import HorizontalArtworkContainer from '../components/HorizontalArtworkContainer'
import axios from 'axios'
import {useState, useEffect} from 'react'
import OwnershipStructure from '../components/OwnershipStructure.js'


const ThirdGrid = styled.div`
    width : 100%;
    display : grid;
    grid-template-columns : 1fr 1fr 1fr;
    align-items : top;
    overflow-y : scroll;
`


const ArtworkPageContainer = styled.div`
    display : flex;
    width : 1200px;
    flex-direction : column;
    align-items : left;
    margin-top : 40px;
    margin-left : auto;
    margin-right : auto;
    gap : 40px;
`
const Addresses = styled.div`
    display : flex;
    flex-direction : row;
    width : 100%;
    text-align : left;
    gap : 40px;
    align-items : center;
`


export default function ArtworkPage(props){
    const [playing, setPlaying] = useState(false)
    const [data, setData] = useState()
    const { contractAddress }= useParams()
    const [loading, setLoading] = useState("")

    const handleDownloadProjectFiles = async () =>{

        axios.get(data.projectFilesLink, 
            {   responseType: 'arraybuffer',
                headers: {
                'Content-Type': 'application/json'
                }
            })
        .then((response) => {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'project_files.zip'); //or any other extension
            document.body.appendChild(link);
            link.click();
        }).catch(error =>{
            console.log(error)
            alert("Could not download project files")
        });
        
    }
    

    useEffect(()=>{
        const loadMetadata = async () =>{
            setLoading("Getting Contract Data...")
            try {
                const metadata = await getMetadata(contractAddress)
                const onChainData = await getOnChainData(contractAddress)
                const parentData = []
                for (const parentAddress of onChainData.parents){
                    const image = (await getMetadata(parentAddress)).image
                    parentData.push({image : image, address : parentAddress})
                }
                const data = {
                    imageLink : metadata.image,
                    audioLink : metadata.asset_specific_data.artwork,
                    creator : onChainData.creator,
                    rev : onChainData.rev,
                    timestamp : metadata.asset_specific_data.timestamp,
                    projectFilesLink : metadata.asset_specific_data.project_files,
                    name : metadata.name,
                    description : metadata.description,
                    parents : parentData
                }
                setData(data)
                
            } catch (error) {
                console.log(error)
                alert("Error getting contract data")
            }
            setLoading("")
        }
        loadMetadata()
        
    }, [contractAddress])

    return(
        <div key={`artworkPage${contractAddress}`}>

            {loading? <Loader message={loading}/> :
                 <div>
                    {data? 
                        <ArtworkPageContainer>
                            <ArtworkTile id={0} playing={playing} setPlaying={setPlaying} data={data}/> 
                            <Addresses>
                                <div>
                                    <Heading3>Contract Address: </Heading3>
                                    <p>{contractAddress}</p>
                                </div>
                                <div>
                                    <Heading3>Creator Address: </Heading3>
                                    <p>{data.creator}</p>
                                </div>
                                {data.projectFilesLink? <SubmitButton text={"Download Project Files"} onClick={handleDownloadProjectFiles}/> : null}
                                
                            </Addresses>
                            <ThirdGrid>
                                <Heading3 style={{textAlign:"left"}}>Description</Heading3>
                                <Heading3 style={{textAlign:"left"}}>Sampled</Heading3>
                                <Heading3 style={{textAlign:"left"}}>REV Tree</Heading3>
                            </ThirdGrid>
                            
                            <ThirdGrid>
                                <p style={{padding : "2px", textAlign:"left"}}>{data.description}</p>
                                <HorizontalArtworkContainer artwork={data.parents}/>
                                <OwnershipStructure
                                    width={"100%"} 
                                    contractAddress={contractAddress} />
                            </ThirdGrid>
                        </ArtworkPageContainer>
                        
                        :
                        null
                    }
                </div>
            }
        </div>
        
    )
}