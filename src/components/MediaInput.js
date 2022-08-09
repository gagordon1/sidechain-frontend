import DefaultImageIcon from '../assets/default_image.png'
import ProjectFilesIconImage from '../assets/zip_file_icon.png'
import WaveformIconImage from '../assets/waveform_icon.png'
import { InputContainer } from "./InputContainer"
import styled from 'styled-components'
import { Heading2 } from './TextComponents'

const DefaultImage = styled.img`
    margin-left : auto;
    margin-right : auto;
    width : 100px;
    height : auto;
`
const verticalInputStyle = {
    "flex-direction" : "column",
    "justify-content" : "center"
}


const ProjectFilesIcon = styled.img`
    margin-left : auto;
    margin-right : auto;
    width : 50px;
    height : auto;
    margin-bottom : 10px;
`

export const UploadImageFile = (props) =>{
    return (
        <InputContainer style={verticalInputStyle}width={"250px"} height={"250px"}>
            <DefaultImage src={DefaultImageIcon}/>
            <Heading2>Upload Image</Heading2>
        </InputContainer>
    )
}
 export const UploadMainFile = (props) =>{

    return (
        <InputContainer style={verticalInputStyle} width={"250px"} height={"150px"}>
            <ProjectFilesIcon src={WaveformIconImage}/>
            <Heading2>Upload Artwork</Heading2>
        </InputContainer>
    )
}

export const UploadProjectFiles = (props) =>{

    return (
        <InputContainer style={verticalInputStyle} width={"250px"} height={"150px"}>
            <ProjectFilesIcon src={ProjectFilesIconImage}/>
            <Heading2>Upload Project Files</Heading2>
        </InputContainer>
    )
}