import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import styled from "styled-components"
import ArtworkTile from '../components/ArtworkTile'
import Loader from '../components/Loader'
import { getMetadata, getOnChainData } from "../controllers/blockchainController"




const ArtworkPageContainer = styled.div`
    display : flex;
    flex-direction : column;
    align-items : center;
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
                    rev : onChainData.rev
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
                    {data? <ArtworkTile playing={playing} setPlaying={setPlaying}
                        data={data}/> : null}
                    {/* <ParentWorks/> */}
            </ArtworkPageContainer>
            }
        </div>
        
    )
}