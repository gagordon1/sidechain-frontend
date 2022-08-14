import { Link } from "react-router-dom"
import styled from "styled-components"
import { useEffect, useState } from "react"
import { getMetadata, getOnChainData } from "../controllers/blockchainController"
import DefaultImage from '../assets/logo512.png'
import { colors } from "../Theme"


const OwnershipImage = styled.img`
    width : 50px;
    height : 50px;
    box-sizing: border-box;
    border: 1px solid ${colors.inputBorderColor};
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.25);
    &:hover{
        cursor : pointer;
    }
`
const ChildContainer = styled.div`
    margin-top : 20px;
    display : flex;
    justify-content : center;
    flex-direction : row;
    gap: 50px;
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
            <Link to={"/artwork/" + props.contractAddress}>
                <OwnershipImage src={data.image}/>
            </Link>
            <ChildContainer>
                {data.parents.map(parent =>
                        <OwnershipStructure contractAddress={parent}/>
                    )
                }
            </ChildContainer>
            
        </div>
    )



}