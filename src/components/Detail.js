import React from 'react';
import styled from 'styled-components';
import YoutubeEmbed from './YoutubeEmbed';
import videoData from '../constants/videoData.js'


console.log("video data",videoData)

function Detail() {
  return (
      <Container>
          <h3>Title of Video</h3>
          <YoutubeEmbed/>
      </Container>
  );
}

export default Detail;

const Container = styled.div`
    min-height: calc(100vh -70px);
    padding: 0 calc(3.5vw + 5px);
    margin-top: 20px;

`

