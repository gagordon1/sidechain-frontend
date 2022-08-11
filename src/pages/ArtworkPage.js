import { CoverImage } from "../components/Images"
import {useState, useEffect} from 'react'
import { useHistory, useParams } from 'react-router-dom'
import styled from "styled-components"
import { getMetadata } from "../controllers/blockchainController"


const TrackContentContainer = styled.div`

`

export default function ArtworkPage(props){

    const [image, setImage] = useState("")
    const { contractAddress }= useParams()
    

    useEffect(()=>{
        const loadMetadata = async () =>{
            const metadata =  await getMetadata(contractAddress, props.provider)
            console.log(metadata)
        }
        loadMetadata()
        
    })

    return(
        <div>
            <TrackContentContainer>
                {/* <CoverImage/>
                <AudioVisualizer/>
                <TrackInfo/> */}
            </TrackContentContainer>
            {/* <ParentWorks/> */}
        </div>
    )
}