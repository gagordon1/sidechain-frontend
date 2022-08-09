import {useState, useEffect} from 'react'
import MetaMaskLogoImage from '../assets/metamask_logo.png'
import styled from 'styled-components';
const MetaMaskLogo = styled.img`
    height : 35px;
    width : auto;
    margin-left : 10px;
    margin-right : 20px;
    &:hover{
        cursor : pointer;
    }
`

export default function MetaMaskComponent(){
    // Function for getting handling all events
    const accountChangeHandler = (account) => {
        // Setting an address data
        setdata({
        address: account,
        });
    
        // Setting a balance
        getbalance(account);
    };

    // getbalance function for getting a balance in
    // a right format with help of ethers
    const getbalance = (address) => {
    
        // Requesting balance method
        window.ethereum
        .request({ 
            method: "eth_getBalance", 
            params: [address, "latest"] 
        })
        .then((balance) => {
            // Setting balance
            setdata({
            Balance: ethers.utils.formatEther(balance),
            });
        });
    };
    

    const btnhandler = () => {
    
        // Asking if metamask is already present or not
        if (window.ethereum) {
    
        // res[0] for fetching a first wallet
        window.ethereum
            .request({ method: "eth_requestAccounts" })
            .then((res) => accountChangeHandler(res[0]));
        } else {
        alert("install metamask extension!!");
        }
    };

    return(
        <div>
            <MetaMaskLogo src={MetaMaskLogoImage}/>
            {"Connected"}
        </div>
    )



}