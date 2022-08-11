import styled from "styled-components";
import PlayButtonImage from "../assets/play_button.png"
import PauseButtonImage from "../assets/pause_button.png"

const PlayPauseStyled = styled.div`
    position : absolute;
`

const PlayPauseButton = styled.img`
    width : auto;
    height : 60px;
    &:hover{
        cursor : pointer;
    }
`

export default function PlayPause(props){

    return (
        <PlayPauseStyled onClick={() => props.setPlaying(!props.playing)}>
            <PlayPauseButton src={props.playing? PauseButtonImage :PlayButtonImage}/>
        </PlayPauseStyled>
    )
}