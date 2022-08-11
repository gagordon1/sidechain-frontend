import axios from 'axios';
const ethers = require('ethers');

/**
 * 
 * @param Provider provider unwrapped provider object (MetaMask)
 * @param int REV equity value [0-100]
 * @param string creatorAddress wallet address of the contract's creator
 * @param string[] parents array of parent contract addresses
 * @param string baseURI link to the metadata
 * 
 * @returns str address of the deployed contract
 * 
 * 
 */
export async function deploySidechainEth(provider, REV, creatorAddress, parents, baseURI){
    var json = require('../SidechainERC721.json'); 
    const abi = json["abi"]
    const byteCode = json["bytecode"]
    const signer = new ethers.providers.Web3Provider(provider).getSigner()
    const factory = new ethers.ContractFactory(abi, byteCode, signer)
    const contract = await factory.deploy(creatorAddress, parents, REV, baseURI)
    await contract.deployed()
    return contract.address
}

async function getMetadataEndpoint(contractAddress, provider){
    var json = require('../SidechainERC721.json'); 
    const abi = json["abi"]
    const wrappedProvider = new ethers.providers.Web3Provider(provider)
    let contract = new ethers.Contract(contractAddress, abi, wrappedProvider);
    return await contract.tokenURI(0) //metadata for each token is identical
    
}

/**
 * Given a contract address, gets its metadata
 * @param string contractAddress 
 * @returns {*} object of the format Sidechain Metadata
 */
export async function getMetadata(contractAddress, provider){
    const metadataEndpoint = await getMetadataEndpoint(contractAddress, provider)
    const metadata = await axios.get(metadataEndpoint)
    return metadata.data
}

    


