import React, { Component } from 'react';
import WaveSurfer from 'wavesurfer.js';
import styled from 'styled-components';
import {useState, useEffect} from 'react'
import { colors } from '../Theme';

export const WaveformContainer = styled.div`
  display: flex;  
  flex-direction: row;  
  align-items: center;
  justify-content: center;
  height: 100px;  width: 100%;
  background: transparent;
`;

export const Wave = styled.div`
  width: 500px;
  height: 90px;
`;

export const PlayButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  background: #EFEFEF;
  border-radius: 50%;
  border: none;
  outline: none;
  cursor: pointer;
  padding-bottom: 3px;
  &:hover {
    background: #DDD;
  }
`;

class Waveform extends Component {  
  state = {
    playing: false,
  };

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
      height: 80,
      progressColor: colors.black,
      responsive: true,
      waveColor: colors.lightGray,
      cursorColor: 'transparent',
    });

    this.waveform.load(track);
  };
  
  handlePlay = () => {
    this.setState({ playing: !this.state.playing });
    this.waveform.playPause();
  };
  
  render() {

    return (
      <WaveformContainer>
        <PlayButton onClick={this.handlePlay} >
          {!this.state.playing ? 'Play' : 'Pause'}
        </PlayButton>
        <Wave id="waveform" />
        <audio id="track" src={this.props.src } />
      </WaveformContainer>
    );
  }
};

export default Waveform;