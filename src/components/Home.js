import React, { useEffect } from 'react';
import styled from 'styled-components'
import ImgSlider from './ImgSlider';
import Viewers from './Viewers'
import Videos from './Videos'
import db from '../firebase'


function Home({allVideos}) {

  useEffect(() => {

      // console.log("HONME VIDES", allVideosState)

  }, [])
  
  return (
    <Container>
       <ImgSlider/>
       <Viewers/>
       <Videos allVideos={allVideos}/>
    </Container>
  );
}

export default Home;

const Container = styled.main`
    min-height: calc(100vh - 70px);
    padding: - calc(3.5vw + 5px);
    position: relative;
    &:before {
        background: url("/images/home-background.png") center center / cover no-repeat fixed;
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
    }
    
`