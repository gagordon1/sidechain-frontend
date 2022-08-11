import axios from "axios";
import {UPLOAD_SIDECHAIN_ENDPOINT} from '../config.js'

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
    const response = await axios.post(UPLOAD_SIDECHAIN_ENDPOINT, formData, config)
                            .catch(error => {
                                alert("Error uploading metadata")
                            })
    return response.data

}