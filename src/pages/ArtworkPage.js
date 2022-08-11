import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import styled from "styled-components"
import ArtworkTile from '../components/ArtworkTile'
import Loader from '../components/Loader'
import { getMetadata, getOnChainData } from "../controllers/blockchainController"
import { Heading3 } from '../components/TextComponents'




const ArtworkPageContainer = styled.div`
    display : flex;
    flex-direction : column;
    align-items : center;
    gap : 50px;
`

export default function ArtworkPage(props){
    const [playing, setPlaying] = useState(false)
    const [data, setData] = useState()
    const { contractAddress }= useParams()
    const [loading, setLoading] = useState("")
    

    useEffect(()=>{
        const loadMetadata = async () =>{
            setLoading("Getting Contract Data...")
            try {
                const metadata = await getMetadata(contractAddress)
                const onChainData = await getOnChainData(contractAddress)
                const data = {
                    imageLink : metadata.image,
                    audioLink : metadata.asset_specific_data.artwork,
                    creator : onChainData.creator,
                    rev : onChainData.rev,
                    timestamp : metadata.asset_specific_data.timestamp,
                    name : metadata.name
                }
                setData(data)
                
            } catch (error) {
                console.log(error)
                alert("Error getting contract data")
            }
            setLoading("")
        }
        loadMetadata()
        
    }, [])

    return(
        <div>

            {loading? <Loader message={loading}/> :
                
                <ArtworkPageContainer>
                    <Heading3>Ownership Contract: {contractAddress}</Heading3>
                    {data? <ArtworkTile playing={playing} setPlaying={setPlaying}
                        data={data}/> : null}
                    {/* <ParentWorks/> */}
            </ArtworkPageContainer>
            }
        </div>
        
    )
}