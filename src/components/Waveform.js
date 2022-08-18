import React, { Component } from 'react';
import WaveSurfer from 'wavesurfer.js';
import styled from 'styled-components';
import { colors } from '../Theme';
import { getAudio, setSource } from '../controllers/audioController';
import { Audio } from  'react-loader-spinner'

export const WaveformContainer = styled.div`
  display: flex;  
  flex-direction: row;  
  align-items: center;
  background: transparent;
  width : 95%;
  justify-self : center;
  justify-content : center;
  animation : fade-in 1s;
`;

export const Wave = styled.div`
  width : 100%;
  align-items : center;
  justify-content : center;
`;

// const AudioLLoaderStyled = styled.div`
//   position : absolute;
//   display 
// `

const StyledAudio = () => 
  <Audio
    wrapperStyle={{margin : "none", padding : "none"}}
    height="80"
    width="80"
    radius="9"
    color={colors.altGray1}
    ariaLabel='three-dots-loading'   
    /> 

function AudioLoader(){
  return(
    <span style={{position : "absolute", display : "flex", gap : "0px"}}>
      <StyledAudio/>
      <StyledAudio/>
      <StyledAudio/>
      <StyledAudio/>
      <StyledAudio/>
      <StyledAudio/>
    </span>
  )
}
class Waveform extends Component { 
  
  state = {
    loading : false
  }

  componentDidMount() {
    if(this.waveform){
        this.waveform.destroy()
    }
    const track = getAudio()
    setSource(this.props.src)

    this.waveform = WaveSurfer.create({
      barWidth: 3,
      cursorWidth: 1,
      container: `#waveform${this.props.id}`,
      backend: 'WebAudio',
      height : 150,
      progressColor: colors.black,
      responsive: true,
      waveColor: colors.altGray1,
      cursorColor: 'transparent',
      normalize : true,
      barMinHeight : 3
    });

    this.setState({loading : true})
    this.waveform.load(track);

    this.waveform.on("ready", () =>{
      this.setState({loading : false})
    })
  };

  componentWillUnmount(){
    this.waveform.pause()
    setSource("")
    
  }

  componentDidUpdate () {
    if(this.props.playing){
      this.waveform.play()
    }else{
      this.waveform.pause()
    }
  }
  
  render() {

    return (
      <WaveformContainer>
        <Wave style={{alignItems : "center"}} id={`waveform${this.props.id}`} />
        {this.state.loading? 
         <AudioLoader/> :  null}
      </WaveformContainer>
    );
  }
};

export default Waveform;