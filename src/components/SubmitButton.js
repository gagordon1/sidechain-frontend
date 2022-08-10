import styled from "styled-components";
import { InputContainer } from "./InputContainer";
import { ButtonText } from "./TextComponents";

const ButtonStyled = styled.button`
    margin-left : auto;
    margin-right : auto;
    outline : black;
    background : none;
    border : none;
    &:hover{
        cursor : pointer;
    }
`

export default function SubmitButton(props){

    return(
        <InputContainer width={"80px"} height={"30px"}>
            <ButtonStyled onClick={props.onClick}>
                <ButtonText>Submit</ButtonText>
            </ButtonStyled>
        </InputContainer>
        
    )

}