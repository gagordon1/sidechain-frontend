
import { CoverImage } from "./Images"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { Heading2 } from "./TextComponents"

const ArtworkContainer = styled.div`
    left : 0px;
    width : 100%;
    display : flex;
    flex-direction : row;
    gap : 20px;
    overflow-x : scroll;
`


export default function HorizontalArtworkContainer(props){

    return (
        <ArtworkContainer>
            {props.artwork.map(parent => 
                <Link key={parent.address} to={`/artwork/${parent.address}`}>
                    <CoverImage 
                        src={parent.image} 
                        width={"200px"} height={"200px"}/>
                </Link>
                )
            }
            {props.artwork.length === 0? <Heading2>No samples.</Heading2> : null}
        </ArtworkContainer>
    )
}