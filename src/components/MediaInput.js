import DefaultImageIcon from '../assets/default_image.png'
import AcceptedImageIndicator from '../assets/accepted_image.png'
import ProjectFilesIconImage from '../assets/zip_file_icon.png'
import WaveformIconImage from '../assets/waveform_icon.png'
import { InputContainer } from "./InputContainer"
import styled from 'styled-components'
import { Heading2 } from './TextComponents'
import React, {useCallback, useState} from 'react'
import {useDropzone} from 'react-dropzone'

const DefaultImage = styled.img`
    margin-left : auto;
    margin-right : auto;
    width : 50px;
    height : auto;
`
const verticalInputStyle = {
    "flex-direction" : "column",
    "justify-content" : "center"
}

const CoverImagePreview = styled.img`
    max-width: ${props=>props.width};
    max-height: ${props=>props.height};
`



function Dropzone(props) {

    const [acceptedImage, setAcceptedImage] = useState(false);

    const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
        if (acceptedFiles.length > 0){
            if(props.filename === "image"){
                setAcceptedImage(URL.createObjectURL(acceptedFiles[0]))
            }
            else{
                setAcceptedImage(AcceptedImageIndicator)
            }
        }
    }, [props.filename])
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

    return (
        <div {...getRootProps()}>
            <input accept={props.accept} name={props.filename} {...getInputProps()} />
            
                
                    {(props.filename === "image" && acceptedImage)?
                        <CoverImagePreview height={props.height} width={props.width} src={acceptedImage}/>
                        :
                        <InputContainer style={verticalInputStyle}width={props.width} height={props.height}>
                            <DefaultImage src={(acceptedImage)?
                            AcceptedImageIndicator :
                            props.imageSource}/>
                            <Heading2>{props.headingText}</Heading2>
                        </InputContainer>
                    }
            
            
        </div>
    )
}

export const UploadMainFile = ()=>{
    return (
        <Dropzone
            width="250px"
            height="200px"
            imageSource={WaveformIconImage}
            headingText="Upload Artwork"
            filename="artwork"
            accept=".wav,.mp3,.aiff"
        />
    )

}
export const UploadProjectFiles = ()=>{
    return (
        <Dropzone
            width="250px"
            height="200px"
            imageSource={ProjectFilesIconImage}
            headingText="Upload Project Files"
            filename="project_files"
            accept=".zip"
        />
    )
    
}
export const UploadImageFile = ()=>{

    return (
        <Dropzone
            width="250px"
            height="250px"
            imageSource={DefaultImageIcon}
            headingText="Upload Cover Image"
            filename="image"
            accept=".png,.jpg,.jpeg"
        />
    )
    
}