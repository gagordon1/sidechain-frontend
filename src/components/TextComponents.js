import styled from "styled-components"
import { colors} from '../Theme'

export const Heading1 = styled.h1`
    margin : none;
    padding : none;
`

export const Heading2 = styled.p`
    color : ${colors.grayText};
    font-size : 20px;
    margin-top : 0px;
`
export const Heading4 = styled.p`
    font-size : 20px;
    margin-top : auto;
    margin-bottom : auto;
`
export const Heading3 = styled.b`
    font-size : 20px;
`

export const ButtonText = styled.b`
    font-size : 16px;
    color : ${colors.grayText};
`

export const InfoText2 = styled.p`
    font-size : 20px;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, .25);
    margin : 0px;
`

export const InfoText3 = styled.p`
    font-size : 15px;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, .25);
    margin : 0px;
`

export const ClickableInfoText3 = styled.p`
    font-size : 15px;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, .25);
    margin : 0px;
    &:hover{
        text-decoration : underline;
        cursor : pointer;
    }
`