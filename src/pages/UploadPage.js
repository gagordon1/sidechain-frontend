import styled from "styled-components"
import { TextInputStyled, LongTextInputStyled } from "../components/InputContainer"
import { UploadArtwork, UploadProjectFiles, UploadImageFile} from "../components/MediaInput"
import { Heading3 } from '../components/TextComponents'
import SelectDownloadedContent from '../components/SelectDownloadedContent'
import {useState, useRef} from 'react'
import {UPLOAD_SIDECHAIN_ENDPOINT} from '../config.js'
import SubmitButton from '../components/SubmitButton'
import Loader from "../components/Loader"
import axios from "axios"

const InputGrid = styled.div`
    display : grid;
    grid-template-columns : 1fr 1fr;
    grid-gap : 20px;
    justify-items : center;
    align-items : center;
    width : 100%;
    `
const UploadPageTextInputContainer = styled.div`
    height : 160px;
    display : flex;
    flex-direction : column;
    justify-content : space-between
`
const UploadPageContainer = styled.div`
    display : flex; 
    width : 600px;
    margin-left : auto;
    margin-right : auto;
    flex-direction : column;
    gap : 40px;
    text-align : left;
`
const MetadataInputContainer = styled.div`
    display : flex;
    align-items : center;
    flex-direction : column;
    gap : 40px;
`

export default function UploadPage(){

    const [downloadedContent, setDownloadedContent] = useState([])

    const [projectFiles, setProjectFiles] = useState("")
    const [artwork, setArtwork] = useState("")
    const [image, setImage] = useState("")
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [baseURI, setBaseURI] = useState("")
    const [loading, setLoading] = useState(false)


    const handleSubmit = () =>{
        const formData = new FormData()
        formData.append("image", image)
        formData.append("name", name)
        formData.append("artwork", artwork)
        formData.append("project_files", projectFiles)
        formData.append("description", description)

        const config = {     
            headers: { 'content-type': 'multipart/form-data' }
        }
        setLoading(true)
        axios.post(UPLOAD_SIDECHAIN_ENDPOINT, formData, config)
            .then(response => {
                setBaseURI(response.data)
                console.log(response.data)
            })
            .catch(error => {
                alert("Error uploading metadata")
            }).finally(()=> setLoading(false));
    }

    const DeployContract = () => {
        return (
            <div>
                <Heading3>Select Remixed Content From Downloads</Heading3>
                <SelectDownloadedContent downloadedContent={downloadedContent}/>    
            </div>
        )
    }

    
    return (
        <div>
        {
            loading? <Loader/> :
            <UploadPageContainer>
                {baseURI? 
                    <DeployContract/> 
                    :
                    <MetadataInputContainer>
                        <Heading3 style={{alignSelf : "start"}}>Upload Metadata</Heading3>
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
                        <SubmitButton text={"Submit"} onClick={handleSubmit}/>
                    </MetadataInputContainer>
                }
            </UploadPageContainer>
        }
        </div>
        
        

    )
}