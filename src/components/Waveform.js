import React, { Component } from 'react';
import WaveSurfer from 'wavesurfer.js';
import styled from 'styled-components';
import { colors } from '../Theme';
import { getAudio, setSource } from '../controllers/audioController';

export const WaveformContainer = styled.div`
  display: flex;  
  flex-direction: row;  
  align-items: center;
  background: transparent;
  width : 95%;
  justify-self : center;
`;

export const Wave = styled.div`
  width : 100%;
  align-items : center;
  justify-content : center;
`;

class Waveform extends Component {  

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
      normalize : true
    });

    this.waveform.load(track);
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
      </WaveformContainer>
    );
  }
};

export default Waveform;