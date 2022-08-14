import styled from "styled-components"
import { useState, useEffect } from "react"
import { getSidechains } from "../controllers/backendController"
import { getOnChainData } from "../controllers/blockchainController"
import { getAddressFromExternalURL } from "../helperFunctions"
import FeedArtworkTile  from "../components/FeedArtworkTile"

const FeedContainer = styled.div`
    display : grid;
    grid-template-columns : 1fr 1fr 1fr;
    margin-top : 100px;
    width : 1000px;
    justify-items : center;
    margin-left : auto;
    margin-right : auto;
    grid-gap : 50px;
`



export default function FeedPage(){

    const [data, setData] = useState([])
    const [sort, setSort] = useState("timestamp_desc")
    const [keyword, setKeyword] = useState("")

    useEffect(()=>{
        const loadData = async() =>{
            const sidechains = await getSidechains(sort,keyword,9,0)
            const newData = []
            const newPlaying = []
            for(const chain of sidechains){
                const contractAddress = getAddressFromExternalURL(chain.external_url)
                const onChainData = await getOnChainData(contractAddress)
                const p = {
                    imageLink : chain.image,
                    audioLink : chain.artwork,
                    creator : onChainData.creator,
                    rev : onChainData.rev,
                    timestamp : chain.timestamp_added,
                    contractAddress : contractAddress,
                    name : chain.name,
                    id : chain.id,
                    playing : false
                }
                newData.push(p)
            }
            setData(newData)
        }
        loadData()
    }, [])


    return (
        <FeedContainer>
            {data.map((d, i) => 
                <FeedArtworkTile 
                    id={i} 
                    playing={d.playing} 
                    data={d}/> )}
        </FeedContainer>
    )

}