
import { CoverImage } from "./Images"
import styled from "styled-components"
import { Link } from "react-router-dom"

const ArtworkContainer = styled.div`
    left : 0px;
    width : 100%;
    display : flex;
    flex-direction : row;
    gap : 20px;
`

const ImageContainer = styled.div`
    &:hover{
        cursor : pointer
    }
`


export default function HorizontalArtworkContainer(props){

    return (
        <ArtworkContainer>
            {props.artwork.map(parent => 
                <Link to={`/artwork/${parent.address}`}>
                    <CoverImage 
                        src={parent.image} 
                        key={parent.address}
                        width={"200px"} height={"200px"}/>
                </Link>
                )
            }
        </ArtworkContainer>
    )
}