import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import YoutubeEmbed from './YoutubeEmbed';
import { useParams} from 'react-router-dom'
import db from '../firebase'
import {
    Link
  } from "react-router-dom";



function Detail() {

    const linkStyle = {
        textDecoration: "none",
        color: 'white',
        padding: 0,
        fontSize: '13px',
        letterSpacing: '1.42px',
        position: 'relative'
      };

    const [video, setVideo] = useState(null);
    
    const {id} = useParams()
    console.log("ID", id)

    useEffect(() => {
        console.log("DB", db)
        db.collection("videos")
        .doc(id)
        .get()
        .then((doc)=> {
            if(doc.exists) {
                setVideo(doc.data())

            } else {

            }
        })
   }, [])

   console.log("Video is ", video)

  return (
      <Container>
          <DetailInfo>
            <h3>{video && video.name}</h3>
            <div class="x-wrapper">
                 <Link style={linkStyle}to="/"><h3 class="x">x</h3></Link>
            </div>
          </DetailInfo>
          {video && <YoutubeEmbed youTubeUrl={video.video_url}/> }
      </Container>
  );
}

export default Detail;

const Container = styled.div`
    min-height: calc(100vh -70px);
    padding: 0 calc(3.5vw + 5px);
    margin-top: 20px;
    h3 {
        display: inline;
    }

`

const DetailInfo = styled.div`
margin-top: 70px;
flex: 2;
display: flex;
justify-content: flex-end;
    h3 {
        display: inline;
        flex: 1;
        // margin-top: 0px;
    }
`

