
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

const renderTimeDelta = (timestamp) => {
    var diff =  Date.now() / 1000 - timestamp;
    var years = (diff / ((60 * 60 * 24 * 365)))
    var days = (diff / (60 * 60 * 24));
    var hours = (diff / (60 * 60));
    var minutes = (diff / (60));
    for (const val of [[years, "y"], [days, "d"], [hours, "h"], [minutes, "m"]]){
        let num = val[0]
        let char = val[1]
        if (num >=1){
            return Math.round(num).toString() + char
        }
    }
    return "<1m"
}

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
                {props.data.name? <InfoText2>{props.data.name}</InfoText2> : null}
                <InfoText2>{props.data.creator}</InfoText2>
                <InfoText2>{props.data.rev} REV</InfoText2>
                <InfoText2>{renderTimeDelta(props.data.timestamp)}</InfoText2>
            </TrackInfo>
        </TrackContentContainer>
    )
}