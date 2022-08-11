import styled from "styled-components";
import { InputContainer } from "./InputContainer";
import { ButtonText } from "./TextComponents";

  

const ButtonStyled = styled.button`
    margin-left : auto;
    margin-right : auto;
    outline : black;
    background : none;
    border : none;
    padding : 15px;
    &:hover{
        cursor : pointer;
    }
`

export default function SubmitButton(props){

    return(
        <InputContainer height={"30px"}>
            <ButtonStyled onClick={props.onClick}>
                <ButtonText>{props.text}</ButtonText>
            </ButtonStyled>
        </InputContainer>
        
    )

}