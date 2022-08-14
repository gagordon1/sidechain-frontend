import styled from "styled-components"
import { useState, useEffect } from "react"
import { getSidechains } from "../controllers/backendController"
import { getOnChainData } from "../controllers/blockchainController"
import { FRONTEND } from "../config"
import ArtworkTile from "../components/ArtworkTile"

const FeedContainer = styled.div`
    display : flex;
    width : 100%;
    flex-direction : column;
    align-items : center;
    gap : 30px;
    margin-top : 40px;
`

const getAddressFromExternalURL = (externalURL) =>{
    var re = new RegExp(FRONTEND +"/artwork/", 'g');
    return externalURL.replace(re, "")
}

export default function FeedPage(){

    const [data, setData] = useState([])
    const [sort, setSort] = useState("timestamp_desc")
    const [keyword, setKeyword] = useState("")


    useEffect(()=>{
        const loadData = async() =>{
            const sidechains = await getSidechains(sort,keyword,10,0)
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
            {data.map((d, i) => <ArtworkTile id={i} playing={d.playing} setPlaying={()=> {}} data={d}/> )}
        </FeedContainer>
    )

}