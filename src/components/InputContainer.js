import styled from 'styled-components'
import {colors} from '../Theme'

export const InputContainer = styled.div`
    display : flex;
    width : ${props => props.width};
    height : ${props => props.height};
    box-sizing: border-box;
    border: 1px solid ${colors.inputBorderColor};
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.25);
    border-radius: 3px;
    align-items : center;
`

const TextInput = styled.input`
    outline : none;
    border : none;
    padding-left : 10px;
    width : 100%;
`

const LongTextInput = styled.textarea`
    outline : none;
    border : none;
    padding-left : 10px;
    width : 100%;
    height : 80%;
    font-family : inherit;
    resize : none;
`


export const TextInputStyled = (props) => {
    return (
        <InputContainer width={props.width} height={props.height}>
            <TextInput onChange={props.onChange} type="text" 
                name={props.name} placeholder={props.placeholder + "..."}/>
        </InputContainer>
    )
}

export const LongTextInputStyled = (props) => {
    return (
        <InputContainer width={props.width} height={props.height}>
            <LongTextInput onChange={props.onChange} type="text" 
                name={props.name} placeholder={props.placeholder + "..."}/>
        </InputContainer>
    )
}