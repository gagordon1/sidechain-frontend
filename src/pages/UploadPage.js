import styled from "styled-components"
import { TextInputStyled } from "../components/InputContainer"
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
    height : 210px;
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


    useEffect(()=>{

    })
    
    return (
        <UploadPageContainer>
            <form action={UPLOAD_SIDECHAIN_ENDPOINT} method="post" encType="multipart/form-data">
                <InputGrid>
                    <UploadPageTextInputContainer>
                        <TextInputStyled width={"250px"} height={"45px"} placeholder={"Title"}/>
                        <TextInputStyled width={"250px"} height={"45px"} placeholder={"REV"}/>
                        <TextInputStyled width={"250px"} height={"100px"} placeholder={"Description"}/>
                    </UploadPageTextInputContainer>
                    <UploadImageFile/>
                    <UploadMainFile/>
                    <UploadProjectFiles/>
                </InputGrid>
                <Heading3>Select Remixed Content From Downloads</Heading3>
                <SelectDownloadedContent downloadedContent={downloadedContent}/>
                <button type="submit">Submit</button>
            </form>
        </UploadPageContainer>
        

    )
}