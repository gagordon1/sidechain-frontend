import axios from 'axios';

const createASA = (baseURL,) => {
    let params = await algodclient.getTransactionParams().do();
    // comment out the next two lines to use suggested fee
    params.fee = 1000;
    params.flatFee = true;
    // Asset creation specific parameters


    // The following parameters are asset specific
    let defaultFrozen = false;
    
    let addr = recoveredAccount1.addr;
    // integer number of decimals for asset unit calculation
    let decimals = 0;
    // total number of this asset available for circulation   
    let totalIssuance = 100;
    // Used to display asset units to user    
    let unitName = "SDCN";
    // Friendly name of the asset    
    let assetName = "Sidechain";
    // Optional string pointing to a URL relating to the asset
    let assetURL = baseURL;
    // store REV and parent addresses
    let assetMetadataHash = "30";


    // signing and sending "txn" allows "addr" to create an asset
    let txn = algosdk.makeAssetCreateTxnWithSuggestedParams(
        addr, 
        note,
        totalIssuance, 
        decimals, 
        defaultFrozen, 
        manager, 
        reserve, 
        freeze,
        clawback, 
        unitName, 
        assetName, 
        assetURL, 
        assetMetadataHash, 
        params);

    let rawSignedTxn = txn.signTxn(recoveredAccount1.sk)
    let tx = (await algodclient.sendRawTransaction(rawSignedTxn).do());

    let assetID = null;
    // wait for transaction to be confirmed
    const ptx = await algosdk.waitForConfirmation(algodclient, tx.txId, 4);
    // Get the new asset's information from the creator account
    assetID = ptx["asset-index"];
    //Get the completed Transaction
    console.log("Transaction " + tx.txId + " confirmed in round " + ptx["confirmed-round"]);
}

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

    


