import styled from "styled-components"
import { useState, useEffect } from "react"
import { getSidechains } from "../controllers/backendController"
import { getOnChainData } from "../controllers/blockchainController"
import { getAddressFromExternalURL } from "../helperFunctions"
import FeedArtworkTile  from "../components/FeedArtworkTile"
import DownArrow from "../components/DownArrow"
import SearchAndSort from "../components/SearchAndSort"
import { setSource } from "../controllers/audioController"
import { Heading2 } from "../components/TextComponents"
import Loader from "../components/Loader"

const FeedContainer = styled.div`
    display : grid;
    grid-template-columns : 1fr 1fr 1fr;
    justify-items : center;
    grid-gap : 50px;
    width : 100%;
`

const PageContainer = styled.div`
    display : flex;
    margin-top : 50px;
    margin-bottom : 75px;
    gap : 50px;
    flex-direction : column;
    width : 1000px;
    margin-left : auto;
    margin-right : auto;
`


export default function FeedPage(){

    const [data, setData] = useState([])
    const [sort, setSort] = useState("timestamp_desc")
    const [keyword, setKeyword] = useState("")
    const [playing, setPlaying] = useState(-1)
    const [loading, setLoading] = useState(false)

    const defaultQuerySize = 9

    const handleDownArrowClick = () =>{
        loadData(data)
    }

    const loadData = async(pastData) =>{
        const sidechains = await getSidechains(sort,keyword,defaultQuerySize,pastData.length)
        const newData = [...pastData]
        setLoading(true)
        try {
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
                    id : chain.id
                }
                newData.push(p)
            }
            setData(newData)
            
        } catch (error) {
            console.log(error)
        }
        setLoading(false)
        
    }

    useEffect(()=>{
        loadData([])
        return(() =>{
            setPlaying(-1)
            setSource("")
        })

    },[sort])


    return (
       <div>
            {loading? <Loader/> :
                <PageContainer key={"feedPage"}>
                    <SearchAndSort keyword={keyword} setKeyword={setKeyword} 
                    sort={sort} setSort={setSort}/>
                    {data.length === 0? 
                        <Heading2>No projects found. Connect to the Rinkeby ETH test net using MetaMask to view project feed</Heading2>
                        :
                        <FeedContainer>
                            {data.map((d, i) => 
                                <FeedArtworkTile 
                                    id={i} 
                                    key={d.contractAddress}
                                    playing={playing === i} 
                                    setPlaying={setPlaying}
                                    data={d}/> )}
                        </FeedContainer>
                    }
                    {(data.length % defaultQuerySize === 0 && data.length > 0)? 
                        <DownArrow handleClick={handleDownArrowClick}/>: null}
                </PageContainer>
                
            }
        </div>
        
    )

}