
import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'
const markdown = `
# Sidechain
## _Asynchronous Musical Collaboration_


- Running on the Rinkeby Ethereum Test Network, you need to have the MetaMask plugin installed and connect to the rinkeby test network to view the test files I've loaded the network with.
- [demo](https://youtu.be/BAvAvJysfm4)

## Features

- Generate NFT ownership contracts for music 
- View other ownership contracts

## The Contract
The Sidechain [contract](https://github.com/gagordon1/sidechain-frontend/blob/master/contracts/SidechainERC721.sol) exists to track ownership of IP, and to distribute ownership in the form of tokens on construction. When the contract is deployed, REV (remix equity value), parents and creator address are specified. For each parent, the contract sends the parent's specified REV% of new tokens to the parent. The result is a system where musicians can collaborate asynchronously by sharing project files and samples while specifying acceptable ownership terms in any derivative IP. 

## Point of Upload
A number of measures will have to be taken at the point of upload to let Sidechain work within existing legal frameworks. All content must be checked by a system like [Youtube's Content ID](https://support.google.com/youtube/answer/2797370?hl=en) system to screen for copyrighted material. Examples of this exist in almost every audio hosting service like Souhndcloud, Spotify, Youtube etc. In the case of the true owner of existing copyright posting their material, they must assert that they truly own the remixing rights to their work and must prove their identity through perhaps Twitter & Spotify verification. I would expect this to be a manual process at first

## Tech

- [Flask] - Metadata API server
- [S3] - File hosting
- [DynamoDB] - Metadata storage
- [React.js & Hardhat] - Frontend & contract deployment

## Installation

Currently requires Metamask connected to the rinkeby network to access project files, and test Rinkeby ETH (you can get it through a [faucet](https://rinkebyfaucet.com/)) to deploy a contract.

`
const AboutPageContainer = styled.div`
    width : 600px;
    margin-left :auto;
    margin-right :auto;
    text-align : start;
`
export default function AboutPage(){

    return(
        <AboutPageContainer>
            <ReactMarkdown children={markdown}/>

        </AboutPageContainer>
        
    )
}