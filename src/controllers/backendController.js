import axios from "axios";
import {SIDECHAIN_UPLOAD_ENDPOINT, SIDECHAIN_FEED_ENDPOINT} from '../config.js'
import {getAddressFromExternalURL} from '../helperFunctions'

/**
 * Uploads metadata from a formData object to the backend server
 * formData schema;
 *      image : file
 *      artwork : file (required)
 *      project_files : zip file
 *      name : str
 *      description : str
 * @param {*} formData 
 * @returns str : {link to metadata}%{authToken}
 */
export async function uploadMetadata(formData){
    return ""

}

/**
 * Updates the metadata database with the contract address
 * @param str update metadata endpoint
 * @param str contractAddress 
 */
export async function updateMetadataWithExternalURL(baseURI, contractAddress, authToken){
    
}

/**
 * 
 * @param str sort 
 * @param str keyword 
 * @param str limit 
 * @param str offset 
 * @returns [{*}] list of sidechain objects
 */
export async function getSidechains(sort, keyword, limit, offset){
    return //TODO
}

/**
 * Given a wallet address return contract addresses where theyve downloaded project files
 * TBU TBU TBU
 * @param str account wallet address
 */
export async function getDownloadedContent(account){
    const items = await getSidechains("timestamp_desc", "", 100, 0)
    return items.map(
        obj => {return {
                address : getAddressFromExternalURL(obj.external_url),
                image : obj.image,
                selected : false
            }
        }
    )
}