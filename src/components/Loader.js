import LoadingIcon from '../assets/logo512.png';
import styled, {keyframes} from 'styled-components';
import { Heading3 } from './TextComponents';
const orbit = keyframes`
    from { transform: rotate(0deg) translateX(50px) rotate(0deg); }
    to   { transform: rotate(360deg) translateX(50px) rotate(-360deg); }
`
      
const orbit2 = keyframes`
    from { transform: rotate(-180deg) translateX(50px) rotate(180deg); }
    to   { transform: rotate(180deg) translateX(50px) rotate(-180deg); }
`

const Loader1 = styled.img`
    position : absolute;
    margin-top: 150px;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    width: 70px;
    height: auto;
    animation:1s ${orbit} infinite linear;
`
const Loader2 = styled.img`
    position : absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    margin-top: 150px;
    width: 70px;
    height: auto;
    animation:1s ${orbit2} infinite linear;
`
const LoaderContainer = styled.div`
    display : flex;
    flex-direction : column;
    justify-content : center;
    gap : 350px;
`
      
export default function Loader(props){
  return (
    <LoaderContainer>
        <div>
            <Loader1 alt="loader" src={LoadingIcon}/>
            <Loader2 alt="loader" src={LoadingIcon}/>
            
        </div>
        <Heading3>{props.message}</Heading3>
    </LoaderContainer>
  )
}