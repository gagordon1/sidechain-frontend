
const ethers = require('ethers');

/**
 * 
 * @param Signer signer signer object for the function
 * @param int REV equity value [0-100]
 * @param string creatorAddress wallet address of the contract's creator
 * @param string[] parents array of parent contract addresses
 * @param string baseURI link to the metadata
 */
export async function deploySidechainEth(signer, REV, creatorAddress, parents, baseURI){
    var json = require('../SidechainERC721.json'); 
    const abi = json["abi"]
    const byteCode = json["bytecode"]
    const factory = new ethers.ContractFactory(abi, byteCode, signer)
    const contract = await factory.deploy(creatorAddress, parents, REV, baseURI)
    await contract.deployed()
}