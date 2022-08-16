import axios from "axios";
import {SIDECHAIN_UPLOAD_ENDPOINT, SIDECHAIN_FEED_ENDPOINT} from '../config.js'

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