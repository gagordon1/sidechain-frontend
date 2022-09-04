import axios from 'axios';
const ethers = require('ethers');

export const getProvider = () =>{
    return window.ethereum.providers.find((provider) => provider.isMetaMask)
}

/**
 * 
 * @param int REV equity value [0-100]
 * @param string creatorAddress wallet address of the contract's creator
 * @param string[] parents array of parent contract addresses
 * @param string baseURI link to the metadata
 * 
 * @returns str address of the deployed contract
 * 
 * 
 */
export async function deploySidechain(REV, creatorAddress, parents, baseURI){
    return ""
}


/**
 * Given a contract address, gets its metadata
 * @param string contractAddress 
 * @returns {*} object of the format Sidechain Metadata
 */
export async function getMetadata(contractAddress){
    return require("./testMetadata.json")
}


/**
 * Gets REV, parents and creator from contract
 * @param string contractAddress 
 * @returns object of form {
 *    rev : int
 *    parents : string[]
 *    creator : string
 * }
 */
export async function getOnChainData(contractAddress){
    return {
        rev : 20,
        parents : [],
        creator : "0x6293r8612350r87123ta7rt237"
    }
}

    


