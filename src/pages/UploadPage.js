import styled from "styled-components"
import { TextInputStyled, LongTextInputStyled } from "../components/InputContainer"
import { UploadMainFile, UploadProjectFiles, UploadImageFile} from "../components/MediaInput"
import { Heading3 } from '../components/TextComponents'
import SelectDownloadedContent from '../components/SelectDownloadedContent'
import {useState, useEffect} from 'react'
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

export default function UploadPage(){

    const [downloadedContent, setDownloadedContent] = useState([])
    const [formData, setFormData] = useState({
        image : null,
        description : null,
        name : null,
        project_files : null,
        artwork : null,
        REV : null,
    })

    const handleSubmit = () =>{

    }

    const handleFormDataChange =  (newValue, field) => {
        const newData = {...formData}
        newData[field] = newValue
        setFormData(newData)
        console.log(newData)
    }
    


    useEffect(()=>{

    })
    
    return (
        <UploadPageContainer>
            <Heading3>Upload Metadata</Heading3>
            <form onSubmit={handleSubmit}>
                <InputGrid>
                    <UploadPageTextInputContainer>
                        <TextInputStyled handleChange={(e) => handleFormDataChange(e.target.value, "name")} 
                            width={"250px"} height={"45px"} placeholder={"Name"}/>
                        <LongTextInputStyled handleChange={(e) => handleFormDataChange(e.target.value, "description")}
                            width={"250px"} height={"100px"} placeholder={"Description"}/>
                    </UploadPageTextInputContainer>
                    <UploadImageFile handleChange={handleFormDataChange}/>
                    <UploadMainFile handleChange={handleFormDataChange}/>
                    <UploadProjectFiles handleChange={handleFormDataChange}/>
                </InputGrid>
                <button type="submit">Submit</button>
            </form>
            <Heading3>Select Remixed Content From Downloads</Heading3>
            <SelectDownloadedContent downloadedContent={downloadedContent}/>
        </UploadPageContainer>
        

    )
}