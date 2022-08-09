import styled from "styled-components"
import { TextInputStyled } from "../components/InputContainer"
import { UploadMainFile, UploadProjectFiles, UploadImageFile } from "../components/MediaInput"

const InputGrid = styled.div`
    margin-left : auto;
    margin-right : auto;
    display : grid;
    grid-template-columns : 1fr 1fr;
    width : 700px;
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


export default function UploadPage(){

    
    return (
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
    )
}