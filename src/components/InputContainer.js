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


export const TextInputStyled = (props) => {
    return (
        <InputContainer width={props.width} height={props.height}>
            <TextInput type="text" name={props.placeholder} placeholder={props.placeholder + "..."}/>
        </InputContainer>
    )
}