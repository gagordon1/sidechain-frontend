import styled from "styled-components"
import { TextInputStyled } from "../components/InputContainer"
import { UploadAudioFile, UploadImageFile } from "../components/MediaInput"

const InputGrid = styled.div`
        margin-left : auto;
        margin-right : auto;
        display : grid;
        grid-template-columns : 1fr 1fr;
        width : 600px;
        grid-gap : 40px;
        justify-items : center;
        align-items : center;
    `
const UploadPageTextInputContainer = styled.div`
    width : 200px;
    height : 150px;
    display : flex;
    flex-direction : column;
    justify-content : space-between
`


export default function UploadPage(){

    
    return (
        <InputGrid>
            <UploadPageTextInputContainer>
                <TextInputStyled width={"200px"} placeholder={"Title"}/>
                <TextInputStyled width={"200px"} placeholder={"REV"}/>
                <TextInputStyled width={"200px"} placeholder={"Creator Wallet Address"}/>
            </UploadPageTextInputContainer>
            <UploadImageFile/>
            <UploadAudioFile/>
            <UploadAudioFile/>
        </InputGrid>
    )
}