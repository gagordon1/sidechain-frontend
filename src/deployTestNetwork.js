const ethers = require('ethers');
const axios = require('axios')

//maps songs to their parents
const parentMap = {
    "Cherish" : [],
    "Do-it-to-it" : ["Cherish"],
    "Do-it-to-it-Tiesto-Remix" : ["Do-it-to-it"],
    "Free-Fallin" : [],
    "Go-Flex" : [],
    "Free-Flexin" : ["Free-Fallin", "Go-Flex"],
    "I-Can't-Stop" : [],
    "Afraid-To-Feel" : ["I-Can't-Stop"],
    "Amen-Brother-Drumbreak" :[],
    "One-Kiss" : [],
    "One-Kiss-Oliver-Heldens-Remix" : ["Amen-Brother-Drumbreak", "One-Kiss"],
    "Try-a-Little-Tenderness" : [],
    "Otis" : ["Try-a-Little-Tenderness"],
    "Seville" : [],
    "Somebody-That-I-Used-To-Know" : ["Seville"],
    "Somebody-That-I-Used-To-Know-Remix" : ["Somebody-That-I-Used-To-Know"],
    "Tondoho-Mba" : [],
    "Tondo" : ["Tondoho-Mba"],
    "Walking-On-A-Dream": [],
    "Yes-Indeed": []
}

//maps songs to their REVs
const revMap = {
    "Cherish" : 30,
    "Do-it-to-it" : 20,
    "Do-it-to-it-Tiesto-Remix" : 20,
    "Free-Fallin" : 60,
    "Go-Flex" : 10,
    "Free-Flexin" :  20,
    "I-Can't-Stop" : 50,
    "Afraid-To-Feel" : 30,
    "Amen-Brother-Drumbreak" : 40,
    "One-Kiss" : 20,
    "One-Kiss-Oliver-Heldens-Remix" : 20,
    "Try-a-Little-Tenderness" : 70,
    "Otis" : 20,
    "Seville" : 50,
    "Somebody-That-I-Used-To-Know" : 40,
    "Somebody-That-I-Used-To-Know-Remix" : 5,
    "Tondoho-Mba" : 40,
    "Tondo" : 20,
    "Walking-On-A-Dream": 30,
    "Yes-Indeed": 30
}

//maps songs to their contract addressess (dynamically created)
const addressMap = {

}

const deployOrder =[
    "Cherish",
    "Do-it-to-it",
    "Do-it-to-it-Tiesto-Remix",
    "Free-Fallin",
    "Go-Flex",
    "Free-Flexin",
    "I-Can't-Stop",
    "Afraid-To-Feel",
    "Amen-Brother-Drumbreak",
    "One-Kiss",
    "One-Kiss-Oliver-Heldens-Remix",
    "Try-a-Little-Tenderness",
    "Otis",
    "Seville",
    "Somebody-That-I-Used-To-Know",
    "Somebody-That-I-Used-To-Know-Remix",
    "Tondoho-Mba",
    "Tondo",
    "Walking-On-A-Dream",
    "Yes-Indeed"
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
const BACKEND = "http://18.212.228.207:8080"
const provider = new ethers.providers.JsonRpcProvider();
deployTestNetwork(provider)
