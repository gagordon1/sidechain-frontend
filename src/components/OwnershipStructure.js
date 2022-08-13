import { InputContainer } from "./InputContainer"
import styled from "styled-components"
import { useEffect, useState } from "react"
import { getMetadata, getOnChainData } from "../controllers/blockchainController"
import DefaultImage from '../assets/logo512.png'

const OwnershipImage = styled.img`
    width : 50px;
    height : 50px;
`

export default function OwnershipStructure(props){

    const [data, setData] = useState({
        image : DefaultImage,
        parents : []
    })

    useEffect(() => {
        const loadData = async() =>{
            const image = (await getMetadata(props.contractAddress)).image
            const parents = (await getOnChainData(props.contractAddress)).parents
            console.log(parents)
            setData({
                    image : image,
                    parents : parents
                }   
            )
        }
        loadData()
    }, [])

    return(
        <div>
            <OwnershipImage src={data.image}/>
            {data.parents.map(parent =>
                    <OwnershipStructure contractAddress={parent}/>
                )
            }
        </div>
    )



}