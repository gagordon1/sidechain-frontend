import { CoverImage } from "../components/Images"
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import styled from "styled-components"
import { getMetadata } from "../controllers/blockchainController"
import Waveform from "../components/Waveform"


const TrackContentContainer = styled.div`
    display : flex;
    flex-direction : row;
    align-items : center;

`
const ArtworkPageContainer = styled.div`
    display : flex;
    flex-direction : column;
    align-items : center;
`
export default function ArtworkPage(props){

    const [imageLink, setImageLink] = useState("")
    const [audioLink, setAudioLink] = useState("")
    const { contractAddress }= useParams()
    

    useEffect(()=>{
        const loadMetadata = async () =>{
            const metadata =  await getMetadata(contractAddress)
            setImageLink(metadata.image)
            setAudioLink(metadata.asset_specific_data.artwork)
        }
        loadMetadata()
        
    })

    return(
        <ArtworkPageContainer>
            <TrackContentContainer>
                <CoverImage width={"150px"} height={"150px"} src={imageLink? imageLink : null}/>
                {audioLink? <Waveform src={audioLink}/> : null}
                {/* <TrackInfo/> */}
            </TrackContentContainer>
            {/* <ParentWorks/> */}
        </ArtworkPageContainer>
    )
}