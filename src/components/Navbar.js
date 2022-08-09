import LogoImage from '../assets/logo512.png';
import styled from 'styled-components'
import InputContainer from './InputContainer';


const Logo = styled.img`
    width : 60px;
    height : auto;
    margin-top : auto;
    margin-bottom : auto;
`

const NavbarContainer = styled.header`
    display : flex;
    margin-top : 10px;
    width : 100%;
    justify-content : space-between;
    align-items : center;
    padding-left : 20px;
    padding-right : 20px;
`

const LogoText = styled.h1`
    margin : none;
    padding : none;
    margin-left : 10px;
`

const LogoContainer = styled.div`
    display : flex;
`

export default function Navbar(){



    return(
        <NavbarContainer className="App-header">
            <LogoContainer>
                <Logo src={LogoImage}/>
                <LogoText>Sidechain</LogoText> 
            </LogoContainer>
            <InputContainer width={"200px"}/>
        </NavbarContainer>
    )
}