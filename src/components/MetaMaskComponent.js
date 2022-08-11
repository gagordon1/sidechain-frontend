import MetaMaskLogoImage from '../assets/metamask_logo.png'
import styled from 'styled-components';
const ethers = require('ethers');

const MetaMaskLogo = styled.img`
    height : 35px;
    width : auto;
    margin-left : 10px;
    margin-right : 10px;
    &:hover{
        cursor : pointer;
    }
`

const MetaMaskContainer = styled.span`
    display : flex;
    align-items : center;
`


export default function MetaMaskComponent(props){
    
    const btnhandler = () => {
        // Asking if metamask is already present or not
        if (window.ethereum) {
            // res[0] for fetching a first wallet
            const provider = window.ethereum.providers.find((provider) => provider.isMetaMask)
            const wrapped = new ethers.providers.Web3Provider(provider)
            provider
            .request({ method: "eth_requestAccounts" })
            .then((res) => props.setAccount(res[0]))
            .then(()=> {
                props.setSigner(wrapped.getSigner())
            });

        } else {
            alert("install metamask extension!!");
        }
    };

    

    return(
        <MetaMaskContainer>
            <MetaMaskLogo src={MetaMaskLogoImage} onClick={btnhandler}/>
            {props.account? "Connected" : "Connect Wallet"}
        </MetaMaskContainer>
    )



}