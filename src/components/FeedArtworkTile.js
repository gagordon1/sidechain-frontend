import { CoverImage } from "./Images"
import { InputContainer } from "./InputContainer"
import { InfoText3, ClickableInfoText3 } from "./TextComponents"
import styled from "styled-components"
import { renderTimeDelta } from "../helperFunctions"
import { minimizeAddress } from "../helperFunctions"
import ContractIconImage from '../assets/contract_icon.png'
import ProfileIconImage from '../assets/profile_icon.png'
import { useNavigate } from "react-router-dom"

const feedArtworkTileStyle = {
    flexDirection : "column",
    justifyContent : "start",
    border : "none"
}

const TrackInfo = styled.div`
    margin-top : auto;
    margin-bottom : auto;
    width : 90%;
    display : grid;
    grid-template-columns : 1fr 1fr;
    justify-items : start;
    grid-gap : 8px;
`

const ArtworkTileImage = styled.img`
    width : 15px;
    height : auto;
`
const IconWithText = styled.div`
    display : flex;
    flex-direction : row;
    gap : 3px;
    align-items : center;
`

const endStyling = {
    justifySelf : "end"
}


export default function FeedArtworkTile(props){

    const navigate = useNavigate()

    return (
        <InputContainer style={feedArtworkTileStyle} width={"250px"} height ={"320px"}>
            <CoverImage src={props.data.imageLink}/>
            <TrackInfo>
                <IconWithText onClick={() => navigate(`/artwork/${props.data.contractAddress}`)}>
                    <ArtworkTileImage src={ContractIconImage}/>
                    <ClickableInfoText3>{minimizeAddress(props.data.contractAddress)}</ClickableInfoText3>
                </IconWithText>
                
                <InfoText3 style={endStyling}>{props.data.rev} REV</InfoText3>

                <IconWithText onClick={() => navigate(`/profile/${props.data.creator}`)}>
                    <ArtworkTileImage src={ProfileIconImage}/>
                    <ClickableInfoText3>{minimizeAddress(props.data.creator)}</ClickableInfoText3>
                </IconWithText>
                <InfoText3 style={endStyling}>{renderTimeDelta(props.data.timestamp)}</InfoText3>
            </TrackInfo>
        </InputContainer>
    )
}