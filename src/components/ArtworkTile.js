
import styled from "styled-components"
import { CoverImage } from "../components/Images"
import Waveform from "../components/Waveform"
import PlayPause from "../components/PlayPause"
import { InfoText2 } from "../components/TextComponents"
import { renderTimeDelta } from "../helperFunctions"

const TrackContentContainer = styled.div`
    display : grid;
    grid-template-columns : 200px 800px 100px;
    align-items : center;
    justify-content : left;
    height : 200px;
    width : 1100px;
`
const ImageAndPlayPauseStyled = styled.div`
    display : flex;
    justify-content : center;
    justify-self : left;
    align-items : center;
    border : none;
`
const TrackInfo = styled.div`
    display : flex;
    flex-direction : column;
    text-align : left;
    gap : 3px;
`

const TileImage= styled.img`
    width : ${props => props.width};
    height : ${props => props.height};
    filter : brightness(${props=>props.brightness}%);
    ${ImageAndPlayPauseStyled}:hover &{
        filter : brightness(50%);
    }
`

export default function ArtworkTile(props){

    const handleClick = () =>{
        console.log(props.playing)
        if (!props.playing){
            props.setPlaying(true)
        }else{
            props.setPlaying(false)
        }
    }

    return (
        <TrackContentContainer>
            <ImageAndPlayPauseStyled>
                <TileImage width={"200px"} height={"200px"} brightness={props.playing? 50 : 100}
                    src={props.data.imageLink? props.data.imageLink : null}/>
                <PlayPause playing={props.playing} handleClick={handleClick}/>
            </ImageAndPlayPauseStyled>
            {props.data.audioLink? <Waveform id={0} style={{"position" : "relative"}} playing={props.playing} src={props.data.audioLink}/> : null}
            <TrackInfo>
                {props.data.name? <InfoText2>{props.data.name}</InfoText2> : null}
                <InfoText2>{props.data.rev} REV</InfoText2>
                <InfoText2>{renderTimeDelta(props.data.timestamp)}</InfoText2>
            </TrackInfo>
        </TrackContentContainer>
    )
}