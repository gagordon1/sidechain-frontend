import styled from 'styled-components'

export const InputContainer = styled.div`
    display : flex;
    width : ${props => props.width};
    height : 45px;
    box-sizing: border-box;
    border: 1px solid #DDDDDD;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.25);
    border-radius: 3px;
    align-items : center;
`