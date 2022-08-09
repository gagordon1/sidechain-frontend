import LogoImage from '../assets/logo512.png'
import styled from 'styled-components'
import { InputContainer } from './InputContainer'
import ProfileIconImage from '../assets/profile_icon.png'
import MetaMaskLogoImage from '../assets/metamask_logo.png'
import { Heading1 } from './TextComponents'


const Logo = styled.img`
    width : 60px;
    height : auto;
    margin-top : auto;
    margin-bottom : auto;
    margin-right : 10px;
`
const NavbarContainer = styled.header`
    display : flex;
    margin : auto;
    margin-top : 10px;
    width : 95%;
    justify-content : space-between;
    align-items : center;
`
const LogoContainer = styled.div`
    display : flex;
`
const ProfileIcon = styled.img`
    height : 30px;
    width : auto;
    margin-right : 20px;
    &:hover{
        cursor : pointer;
    }
`
const RightSide = styled.div`
    display : flex;
    justify-content : space-between;
    align-items : center;
`
const MetaMaskLogo = styled.img`
    height : 35px;
    width : auto;
    margin-left : 10px;
    margin-right : 20px;
`

export default function Navbar(props){



    return(
        <NavbarContainer className="App-header">
            <LogoContainer>
                <Logo src={LogoImage}/>
                <Heading1>Sidechain</Heading1> 
            </LogoContainer>
            <RightSide>
                <ProfileIcon src={ProfileIconImage}/>
                <InputContainer width={"200px"}>
                    <MetaMaskLogo src={MetaMaskLogoImage}/>
                    {"Connected"}
                </InputContainer>
            </RightSide>
            
        </NavbarContainer>
    )
}