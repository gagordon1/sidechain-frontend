import { CoverImage } from "../components/Images"
import {useState, useEffect} from 'react'
import { useHistory, useParams } from 'react-router-dom'
import styled from "styled-components"


const TrackContentContainer = styled.div`

`

export default function ArtworkPage(){

    const [image, setImage] = useState("")
    const { contractAddress }= useParams()
    

    useEffect(()=>{
        
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