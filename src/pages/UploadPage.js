import styled from "styled-components"
import { TextInputStyled } from "../components/InputContainer"

const InputGrid = styled.div`
        margin-left : auto;
        margin-right : auto;
        display : grid;
        grid-template-columns : 1fr 1fr;
        width : 600px;
        justify-items : center;
    `
const UploadPageTextInputContainer = styled.div`
    width : 200px;
    height : 200px;
    display : flex;
    flex-direction : column;
    justify-content : space-between
`




export default function UploadPage(){

    
    return (
        <InputGrid>
            <UploadPageTextInputContainer>
                <TextInputStyled width={"200px"} placeholder={"Title"}/>
            </UploadPageTextInputContainer>


        </InputGrid>
    )
}