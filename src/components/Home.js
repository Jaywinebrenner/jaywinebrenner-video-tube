import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import ImgSlider from './ImgSlider';
import Reel from './Reel'
import Videos from './Videos'



function Home({allVideos}) {

  const [reelVidUrl, setReelVidUrl] = useState(null)
  const [theCode, setTheCode] = useState(null)

  useEffect(() => {
    async function getReelUrl() {
      let reelVid = null;
      console.log("hello")

      // if(allVideos){
      //     reelVid = await allVideos.filter((vid) => vid.name === "Director Reel")
      //     console.log("REEL VID", reelVid[0].name)
      //     allVideos && setReelVidUrl(
      //       reelVid[0].video_url
      //     )
      //     console.log("REEL VID STATE", reelVidUrl  )
      //     // reelVidUrl && getCode(reelVidUrl)
      //   } else {
          setTheCode("JSD8k3JwSVU")
        // }
      }

      // function getCode(url){
      //   var ID = '';
      //   url = url.replace(/(>|<)/gi,'').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
    
      //   if(url[2] !== undefined) {
      //     ID = url[2].split(/[^0-9a-z_\-]/i);
      //     ID = ID[0];
      //     handleGetCode(ID)
      //   }
      //   else {
      //     ID = url;
      //     handleGetCode(ID)
      //   }
      //     return handleGetCode(ID)
      // }

      // getCode(reelVidUrl)
    
      // function handleGetCode (code) {
      //   setTheCode(code)
      // }
      // console.log("THE CODE", theCode)

      getReelUrl()

  }, [allVideos])
  
  return (
    <Container>
       <ImgSlider/>
       {/* <Viewers/> */}
       <Reel theCode={theCode}/>
       {theCode && <Videos allVideos={allVideos}/>}
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