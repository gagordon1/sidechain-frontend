import styled from "styled-components"
import { InputContainer } from "./InputContainer"


export const CoverImageStyled = styled.img`
    object-fit : contain;
    height: 100%; 
    width: 100%; 
`

export function CoverImage(props){
    console.log(props.src)
    return(
        <InputContainer width={props.width} height={props.height} >
            <CoverImageStyled src={props.src}/>
        </InputContainer>
    )
}