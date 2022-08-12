import { useParams } from 'react-router-dom'
import styled from "styled-components"
import ArtworkTile from '../components/ArtworkTile'
import Loader from '../components/Loader'
import { getMetadata, getOnChainData } from "../controllers/blockchainController"
import { Heading4, Heading3 } from '../components/TextComponents'
import SubmitButton from '../components/SubmitButton'
import HorizontalArtworkContainer from '../components/HorizontalArtworkContainer'
import axios from 'axios'
import {useState, useEffect} from 'react'
import OwnershipStructure from '../components/OwnershipStructure.js'


const HalfGrid = styled.div`
    width : 100%;
    display : grid;
    grid-template-columns : 1fr 1fr;
    justify-content : start;
`


const ArtworkPageContainer = styled.div`
    display : flex;
    width : 1200px;
    flex-direction : column;
    align-items : center;
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

/**
 * 
 * @param str contractAddress 
 * @returns array of all ancestors for a contract
 */
const getAncestors = async (contractAddress) =>{
    let out = [contractAddress]
    const parents = (await getOnChainData(contractAddress)).parents
    for (const parent of parents){
        out = out.concat(await getAncestors(parent))
    }
    return out
}

export default function ArtworkPage(props){
    const [playing, setPlaying] = useState(false)
    const [data, setData] = useState()
    const { contractAddress }= useParams()
    const [loading, setLoading] = useState("")

    const handleDownloadProjectFiles = async () =>{
        axios({
            url: data.projectFilesLink, 
            method: 'GET',
            responseType: 'blob'
        }).then((response) => {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'file.zip'); //or any other extension
            document.body.appendChild(link);
            link.click();
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
                const ancestors = await getAncestors(contractAddress)
                const data = {
                    imageLink : metadata.image,
                    audioLink : metadata.asset_specific_data.artwork,
                    creator : onChainData.creator,
                    rev : onChainData.rev,
                    timestamp : metadata.asset_specific_data.timestamp,
                    projectFilesLink : metadata.asset_specific_data.project_files,
                    name : metadata.name,
                    parents : parentData,
                    ancestors : ancestors
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
        <div>

            {loading? <Loader message={loading}/> :
                 <div>
                    {data? 
                        <ArtworkPageContainer>
                            <ArtworkTile playing={playing} setPlaying={setPlaying} data={data}/> 
                            <Addresses>
                                <div>
                                    <Heading4>Contract Address: </Heading4>
                                    <p>{contractAddress}</p>
                                </div>
                                <div>
                                    <Heading4>Creator Address: </Heading4>
                                    <p>{data.creator}</p>
                                </div>
                                {data.projectFilesLink? <SubmitButton text={"Download Project Files"} onClick={handleDownloadProjectFiles}/> : null}
                                
                            </Addresses>
                            <HalfGrid>
                                <Heading3 style={{textAlign : "left"}} >Sampled:</Heading3>
                                <Heading3 style={{textAlign : "left"}} >Ownership Structure:</Heading3>
                            </HalfGrid>
                            
                            <HalfGrid>
                                <HorizontalArtworkContainer artwork={data.parents}/>
                                <OwnershipStructure ancestors={data.ancestors} />
                            </HalfGrid>
                        </ArtworkPageContainer>
                        
                        :
                        null
                    }
                </div>
            }
        </div>
        
    )
}