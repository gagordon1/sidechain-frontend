import React, { Component } from 'react';
import WaveSurfer from 'wavesurfer.js';
import styled from 'styled-components';
import {useState, useEffect} from 'react'
import { colors } from '../Theme';

export const WaveformContainer = styled.div`
  display: flex;  
  flex-direction: row;  
  align-items: center;
  height: 100%;  width: 100%;
  background: transparent;
`;

export const Wave = styled.div`
  width: 600px;
  height: 180px;
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
      height: 180,
      progressColor: colors.black,
      responsive: true,
      waveColor: colors.lightGray,
      cursorColor: 'transparent',
    });

    this.waveform.load(track);
  };

  componentWillReceiveProps (newProps) {
    if( newProps.playing){
      this.waveform.play()
    }else{
      this.waveform.pause()
    }
  }
  
  render() {

    return (
      <WaveformContainer>
        <Wave id="waveform" />
        <audio id="track" src={this.props.src } />
      </WaveformContainer>
    );
  }
};

export default Waveform;