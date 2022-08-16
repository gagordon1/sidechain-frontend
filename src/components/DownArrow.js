import DownArrowImage from '../assets/down_arrow.png'
import styled from 'styled-components'
import { bounce } from './Animations'



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