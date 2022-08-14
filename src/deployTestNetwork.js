const { toBeInTheDOM } = require('@testing-library/jest-dom/dist/matchers');
const ethers = require('ethers');
const axios = require('axios')

//maps songs to their parents
const parentMap = {
    "cherish_sean_paul" : [],
    "do_it_to_it_acraze" : ["cherish_sean_paul"],
    "do_it_to_it_tiesto" : ["do_it_to_it_acraze"],
    "free_fallin" : [],
    "go_flex" : [],
    "free_flexin" : ["free_fallin", "go_flex"],
    "violent_siblings" : [],
    "violent_siblings_skin_on_skin" : ["violent_siblings"],
    "pyt" : [],
    "good_life" : ["pyt"],
    "guilty_conscience" : [],
    "higher_love_steve_winwood" : [],
    "higher_love_whitney_houston" : ["higher_love_steve_winwood"],
    "higher_love_kygo" : ["higher_love_whitney_houston"]
}

//maps songs to their REVs
const revMap = {
    "cherish_sean_paul" : 20,
    "do_it_to_it_acraze" : 30,
    "do_it_to_it_tiesto" : 40,
    "free_fallin" : 30,
    "go_flex" : 30,
    "free_flexin" :20,
    "violent_siblings" : 60,
    "violent_siblings_skin_on_skin" : 40,
    "pyt" : 20,
    "good_life" : 60,
    "guilty_conscience" : 80,
    "higher_love_steve_winwood" : 30,
    "higher_love_whitney_houston" :50,
    "higher_love_kygo" :10
}

//maps songs to their contract addressess (dynamically created)
const addressMap = {

}

const deployOrder =[
    "cherish_sean_paul",
    "do_it_to_it_acraze",
    "do_it_to_it_tiesto",
    "free_fallin",
    "go_flex",
    "free_flexin",
    "violent_siblings",
    "violent_siblings_skin_on_skin",
    "pyt",
    "good_life",
    "guilty_conscience",
    "higher_love_steve_winwood",
    "higher_love_whitney_houston",
    "higher_love_kygo"
]

const deployTestNetwork = async(provider) =>{
    const accounts = await provider.send("eth_accounts")
    const signer = provider.getSigner()
    var json = require('./SidechainERC721.json'); 
    const abi = json["abi"]
    const byteCode = json["bytecode"]
    const factory = new ethers.ContractFactory(abi, byteCode, signer)
    for(let i = 0; i < deployOrder.length; i++){
        title = deployOrder[i]
        console.log(title)
        rev = revMap[title]
        creatorAddress = accounts[i]
        parents = parentMap[title].map(parent => addressMap[parent])
        baseURI = BACKEND + "/test-" + title + "/"
        const contract = await factory.deploy(creatorAddress, parents, rev, baseURI)
        await contract.deployed()
        try {
            const config = {     
                headers: { 'content-type': 'text/plain' }
            }
            await axios.post(baseURI + "-1", contract.address, config) //update external url
        } catch (error) {
            console.log(error)
        }
        
        addressMap[title] = contract.address
    }
    console.log(addressMap)
    
}
BACKEND = "http://localhost:8080"
const provider = new ethers.providers.JsonRpcProvider();
deployTestNetwork(provider)
