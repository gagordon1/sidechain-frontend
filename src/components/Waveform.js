import React, { Component } from 'react';
import WaveSurfer from 'wavesurfer.js';
import styled from 'styled-components';
import { colors } from '../Theme';

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
    const track = document.querySelector('#track');

    this.waveform = WaveSurfer.create({
      barWidth: 3,
      cursorWidth: 1,
      container: '#waveform',
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

  componentDidUpdate (newProps) {
    if(newProps.playing){
      this.waveform.play()
    }else{
      this.waveform.pause()
    }
  }
  
  render() {

    return (
      <WaveformContainer>
        <Wave style={{alignItems : "center"}} id="waveform" />
        <audio id="track" src={this.props.src } />
      </WaveformContainer>
    );
  }
};

export default Waveform;