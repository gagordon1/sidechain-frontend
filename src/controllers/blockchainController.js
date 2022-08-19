import axios from 'axios';

export const getProvider = () =>{
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
}

async function getMetadataEndpoint(contractAddress){
}

/**
 * Given a contract address, gets its metadata
 * @param string contractAddress 
 * @returns {*} object of the format Sidechain Metadata
 */
export async function getMetadata(contractAddress){
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
}

    


