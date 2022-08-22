import LogoImage from '../assets/logo512.png'
import styled from 'styled-components'
import { InputContainer } from './InputContainer'
import ProfileIconImage from '../assets/profile_icon.png'
import { useNavigate } from 'react-router-dom'
import { Heading1 } from './TextComponents'
import MetaMaskComponent from './MetaMaskComponent'
import NewSidechainImage from '../assets/new_sidechain.png'
import { ClickableInfoText3 } from './TextComponents'


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
    &:hover{
        cursor : pointer;
    }
`
const ProfileIcon = styled.img`
    height : 30px;
    width : auto;
    filter : drop-shadow(2px 2px 2px rgba(0,0,0,.25));
    &:hover{
        cursor : pointer;
    }
`
const RightSide = styled.div`
    display : flex;
    justify-content : space-between;
    gap : 30px;
    align-items : center;
`

export default function Navbar(props){

    const navigate = useNavigate()

    return(
        <NavbarContainer className="App-header">
            <LogoContainer onClick={()=>navigate("/")}>
                <Logo src={LogoImage}/>
                <Heading1>Sidechain</Heading1> 
            </LogoContainer>
            <RightSide>
                <ClickableInfoText3 onClick={()=>navigate("/about")} style={{fontSize : "20px"}}>
                    about
                </ClickableInfoText3>
                <ProfileIcon src={NewSidechainImage} onClick={()=>navigate("/upload")}/>
                <ProfileIcon src={ProfileIconImage}/>
                <InputContainer width={"200px"} height={"45px"}>
                    <MetaMaskComponent 
                        account={props.account}
                        setAccount={props.setAccount}
                        provider={props.provider}
                        />
                </InputContainer>
            </RightSide>
            
        </NavbarContainer>
    )
}