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
 * @returns str : link to metadata
 */
export async function uploadMetadata(formData){
    const config = {     
        headers: { 'content-type': 'multipart/form-data' }
    }
    const response = await axios.post(SIDECHAIN_UPLOAD_ENDPOINT, formData, config)
    return response.data

}

/**
 * Updates the metadata database with the contract address
 * @param str update metadata endpoint
 * @param str contractAddress 
 */
export async function updateMetadataWithExternalURL(baseURI, contractAddress){
    const config = {     
        headers: { 'content-type': 'text/plain' }
    }
    return await axios.post(baseURI,contractAddress, config)
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
    const response = await axios.get(SIDECHAIN_FEED_ENDPOINT,{
        params :{
            sort  : sort,
            keyword : keyword,
            limit : limit,
            offset : offset
        }
    } )
    return response.data.items
}

/**
 * Given a wallet address return contract addresses where theyve downloaded project files
 * TBU TBU TBU
 * @param str account wallet address
 */
export async function getDownloadedContent(account){
    const items = await getSidechains("timestamp_desc", "", 10, 0)
    console.log(items)
    return items.map(
        obj => {return {
                address : getAddressFromExternalURL(obj.external_url),
                image : obj.image,
                selected : false
            }
        }
    )
}