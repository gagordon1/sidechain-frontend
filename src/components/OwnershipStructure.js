import { Link } from "react-router-dom"
import styled from "styled-components"
import { useEffect, useState } from "react"
import { getMetadata, getOnChainData } from "../controllers/blockchainController"
import DefaultImage from '../assets/logo512.png'
import { colors } from "../Theme"
import { InfoText2 } from "./TextComponents"
import LeaderLine from "react-leader-line"


const OwnershipImage = styled.img`
    width : 50px;
    height : 50px;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.25);
    &:hover{
        cursor : pointer;
    }
`
const ParentContainer = styled.div`
    display : flex;
    justify-content : center;
    align-items : center;
`
const ChildContainer = styled.div`
    margin-top : 40px;
    display : flex;
    justify-content : center;
    flex-direction : row;
    gap: 50px;
`

export default function OwnershipStructure(props){

    const [data, setData] = useState({
        image : DefaultImage,
        parents : [],
        rev : ""
    })

    const drawLines = () =>{
        const parentElement = document.getElementById(`ownershipImage${props.contractAddress}`)
        for (const parent of data.parents){
            let childElement = document.getElementById(`ownershipImage${parent}`)
            if(parentElement&&childElement){
                new LeaderLine(childElement,parentElement, {
                    color : "black",
                    path : "straight",
                    size : 2
                })
            }         
        }
    }   

    useEffect(() => {
        const loadData = async() =>{
            const image = (await getMetadata(props.contractAddress)).image
            const onChainData = await getOnChainData(props.contractAddress)
            setData({
                    image : image,
                    parents : onChainData.parents,
                    rev : onChainData.rev
                }   
            )
        }
        loadData()
    }, [])

    return(
        <div style={{overflow : "hide"}}>
            <ParentContainer style={{display: "flex"}}>
                <Link to={"/artwork/" + props.contractAddress}>
                    <OwnershipImage id={`ownershipImage${props.contractAddress}`} src={data.image}/>
                </Link>
                <InfoText2 style={{marginLeft : "10px"}}>{data.rev}</InfoText2>
            </ParentContainer>
            <ChildContainer>
                {data.parents.map(parent =>
                        <OwnershipStructure contractAddress={parent}/>
                    )
                }
            </ChildContainer>
            {drawLines()}
        </div>
    )



}