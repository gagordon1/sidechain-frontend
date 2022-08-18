import { Link } from "react-router-dom"
import styled from "styled-components"
import { useEffect, useState } from "react"
import { getMetadata, getOnChainData } from "../controllers/blockchainController"
import DefaultImage from '../assets/logo512.png'
import { InfoText2 } from "./TextComponents"
import Xarrow from "react-xarrows"


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
    }, [props.contractAddress])

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
                    <div key={props.contractAddress}>
                        <OwnershipStructure contractAddress={parent}/>
                        <Xarrow
                            start = {`ownershipImage${parent}`}
                            end ={`ownershipImage${props.contractAddress}`}
                            path="grid"
                            color="black"
                            headShape="circle"
                            headSize={2}
                        />

                    </div>
                        
                    )
                    
                }
                
            </ChildContainer>
        </div>
    )



}