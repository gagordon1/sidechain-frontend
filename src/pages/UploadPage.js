import styled from "styled-components"
import { TextInputStyled, LongTextInputStyled } from "../components/InputContainer"
import { UploadArtwork, UploadProjectFiles, UploadImageFile} from "../components/MediaInput"
import { Heading3 } from '../components/TextComponents'
import SelectDownloadedContent from '../components/SelectDownloadedContent'
import {useState, useRef} from 'react'
import {UPLOAD_SIDECHAIN_ENDPOINT} from '../config.js'

const InputGrid = styled.div`
    display : grid;
    grid-template-columns : 1fr 1fr;
    grid-gap : 20px;
    justify-items : center;
    align-items : center;
    `
const UploadPageTextInputContainer = styled.div`
    height : 160px;
    display : flex;
    flex-direction : column;
    justify-content : space-between
`
const UploadPageContainer = styled.div`
    display : flex; 
    width : 700px;
    margin-left : auto;
    margin-right : auto;
    flex-direction : column;
    gap : 40px;
    text-align : left;
`
const getValue= (name)=>{
    console.log(name)
    console.log(document.getElementById(name))
    return document.getElementById(name).value
}
export default function UploadPage(){

    const [downloadedContent, setDownloadedContent] = useState([])

    const [projectFiles, setProjectFiles] = useState(null)
    const [artwork, setArtwork] = useState(null)
    const [image, setImage] = useState(null)
    const [name, setName] = useState(null)
    const [description, setDescription] = useState(null)


    const handleSubmit = () =>{
        const formData = new FormData()
        formData.append("image", image)
        formData.append("name", name)
        formData.append("artwork", artwork)
        formData.append("project_files", projectFiles)
        formData.append("description", description)
        console.log(formData)
    }

    
    return (
        <UploadPageContainer>
            <Heading3>Upload Metadata</Heading3>
            <div>
                <InputGrid>
                    <UploadPageTextInputContainer>
                        <TextInputStyled width={"250px"} height={"45px"} 
                            onChange={(e) => setName(e.target.value)} placeholder={"Name"}/>
                        <LongTextInputStyled width={"250px"} height={"100px"} 
                            onChange={(e) => setDescription(e.target.value)} placeholder={"Description"}/>
                    </UploadPageTextInputContainer>
                    <UploadImageFile setFile={setImage}/>
                    <UploadArtwork setFile={setArtwork}/>
                    <UploadProjectFiles setFile={setProjectFiles}/>
                </InputGrid>
                <button onClick={handleSubmit}>Submit</button>
            </div>
            <Heading3>Select Remixed Content From Downloads</Heading3>
            <SelectDownloadedContent downloadedContent={downloadedContent}/>
        </UploadPageContainer>
        

    )
}