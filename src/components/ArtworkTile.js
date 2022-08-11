
import styled from "styled-components"
import { CoverImage } from "../components/Images"
import Waveform from "../components/Waveform"
import PlayPause from "../components/PlayPause"
import { InfoText2 } from "../components/TextComponents"
const TrackContentContainer = styled.div`
    display : grid;
    width : 1300px;
    grid-template-columns : 1fr 1fr 1fr;
    align-items : center;

`
const ImageAndPlayPauseStyled = styled.div`
    display : flex;
    justify-content : center;
    align-items : center;
`
const TrackInfo = styled.div`
    display : flex;
    flex-direction : column;
    text-align : left;
    gap : 3px;
`

export default function ArtworkTile(props){

    return (
        <TrackContentContainer>
            <ImageAndPlayPauseStyled>
                <PlayPause playing={props.playing} setPlaying={props.setPlaying}/>
                <CoverImage width={"200px"} height={"200px"} 
                    src={props.data.imageLink? props.data.imageLink : null}/>
            </ImageAndPlayPauseStyled>
            {props.data.audioLink? <Waveform playing={props.playing} src={props.data.audioLink}/> : null}
            <TrackInfo>
                <InfoText2>Title</InfoText2>
                <InfoText2>{props.data.creator}</InfoText2>
                <InfoText2>{props.data.rev}</InfoText2>
                <InfoText2>Timestamp</InfoText2>
            </TrackInfo>
        </TrackContentContainer>
    )
}