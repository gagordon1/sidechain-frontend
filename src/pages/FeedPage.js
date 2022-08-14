import styled from "styled-components"
import { useState, useEffect } from "react"
import { getSidechains } from "../controllers/backendController"

const FeedContainer = styled.div`
`

export default function FeedPage(){

    const [data, setData] = useState([])
    const [sort, setSort] = useState("timestamp_desc")
    const [keyword, setKeyword] = useState("")


    useEffect(()=>{
        const loadData = async() =>{
            setData(await getSidechains(sort,keyword,10,0))
        }
        loadData()
    }, [])


    return (
        <FeedContainer>
            {data.map(metadata => <div key={metadata.id}>{metadata.id}</div>)}
        </FeedContainer>
    )

}