
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
    width : 1100px
`
const ImageAndPlayPauseStyled = styled.div`
    display : flex;
    justify-content : center;
    justify-self : left;
    align-items : center;
    height : 100%;
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
                <CoverImage width={"200px"} height={"auto"} 
                    src={props.data.imageLink? props.data.imageLink : null}/>
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