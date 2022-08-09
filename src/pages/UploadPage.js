import styled from "styled-components"
import { TextInputStyled } from "../components/InputContainer"
import { UploadMainFile, UploadProjectFiles, UploadImageFile } from "../components/MediaInput"
import { Heading3 } from '../components/TextComponents'
import SelectDownloadedStems from '../components/SelectDownloadedStems'
import {useState, useEffect} from 'react'

const InputGrid = styled.div`
    display : grid;
    grid-template-columns : 1fr 1fr;
    grid-gap : 40px;
    justify-items : center;
    align-items : center;
    `
const UploadPageTextInputContainer = styled.div`
    height : 180px;
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
    gap : 30px;
    text-align : left;
`

export default function UploadPage(){

    const [downloadedStems, setDownloadedStems] = useState([])


    useEffect(()=>{

    })
    
    return (
        <UploadPageContainer>
            <InputGrid>
                <UploadPageTextInputContainer>
                    <TextInputStyled width={"250px"} height={"45px"} placeholder={"Title"}/>
                    <TextInputStyled width={"250px"} height={"45px"} placeholder={"REV"}/>
                    <TextInputStyled width={"250px"} height={"45px"} placeholder={"Creator Wallet Address"}/>
                </UploadPageTextInputContainer>
                <UploadImageFile/>
                <UploadMainFile/>
            <UploadProjectFiles/>
            </InputGrid>
            <Heading3>Select Samples From Downloads</Heading3>
            <SelectDownloadedStems stems={downloadedStems}/>
        </UploadPageContainer>
        

    )
}