import { FRONTEND } from "./config";

export const renderTimeDelta = (timestamp) => {
    var diff =  Date.now() / 1000 - timestamp;
    var years = (diff / ((60 * 60 * 24 * 365)))
    var days = (diff / (60 * 60 * 24));
    var hours = (diff / (60 * 60));
    var minutes = (diff / (60));
    for (const val of [[years, "y"], [days, "d"], [hours, "h"], [minutes, "m"]]){
        let num = val[0]
        let char = val[1]
        if (num >=1){
            return Math.round(num).toString() + char
        }
    }
    return "<1m"
}

export const getAddressFromExternalURL = (externalURL) =>{
    var re = new RegExp(FRONTEND +"/artwork/", 'g');
    return externalURL.replace(re, "")
}

export const randomGen= ()=>{
    return Math.floor(Math.random()*10000)
}

/**
 * 
 * @param str address blockchain address
 * @returns minimized version 
 */
export const minimizeAddress = (address) =>{
    return address.slice(0,4) + "..." + address.slice(-4)

}