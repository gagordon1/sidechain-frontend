import { InputContainer } from "./InputContainer"
import { InfoText3, ClickableInfoText3 } from "./TextComponents"
import styled from "styled-components"
import { renderTimeDelta } from "../helperFunctions"
import { minimizeAddress } from "../helperFunctions"
import ContractIconImage from '../assets/contract_icon.png'
import ProfileIconImage from '../assets/profile_icon.png'
import { useNavigate } from "react-router-dom"
import PlayPause from './PlayPause'
import { getSource, pauseAudio, playAudio, setSource } from "../controllers/audioController"

const feedArtworkTileStyle = {
    flexDirection : "column",
    justifyContent : "start",
    border : "none",
    animationName : "fade-in",
    animationDuration : "1s"
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
const ImageAndPlayer = styled.div`
    display : flex;
    justify-content : center;
    align-items : center;
`

const FeedImage = styled.img`
    width : ${props => props.width};
    height : ${props => props.height};
    filter : brightness(${props => props.brightness}%);
    ${ImageAndPlayer}:hover &{
        filter : brightness(50%);
    }
`

const endStyling = {
    justifySelf : "end"
}


export default function FeedArtworkTile(props){

    const navigate = useNavigate()

    const handleTogglePlay = () =>{
        if (props.playing){
            props.setPlaying(-1)
            pauseAudio()
        }else{
            props.setPlaying(props.id)
            if (getSource() !== props.data.audioLink){
                setSource(props.data.audioLink)
            }
            playAudio()
        }
        
    }

    return (
        <InputContainer style={feedArtworkTileStyle} width={"250px"} height ={"320px"}>
            <ImageAndPlayer>
                <FeedImage height={"250px"} width={"250px"} brightness={props.playing? 50 : 100}
                    src={props.data.imageLink}/>
                <PlayPause handleClick={handleTogglePlay} playing={props.playing}/>
            </ImageAndPlayer>
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