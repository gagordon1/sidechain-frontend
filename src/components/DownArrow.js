import DownArrowImage from '../assets/down_arrow.png'
import styled, {keyframes} from 'styled-components'

const bounce = keyframes`
    0%, 20%, 50%, 80%, 100% {transform: translateY(0);} 
    40% {transform: translateY(-30px);} 
    60% {transform: translateY(-15px);}   
 `

const Arrow = styled.img`
    width : 30px;
    height : auto;
    margin-left : auto;
    margin-right : auto;
    animation: 4s ${bounce} infinite;
    &:hover{
        cursor : pointer;
    }
`



export default function DownArrow(props){

    return(
        <Arrow onClick={props.handleClick} src={DownArrowImage}/>
    )
}