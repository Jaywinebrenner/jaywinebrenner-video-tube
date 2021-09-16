import React, { useState, useEffect } from "react";
import styled from 'styled-components'


function Reel ({theCode}) {




return (
  <Container>
      <h2>Director Reel</h2>
    <div className="video-reel">
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${theCode}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  </Container>
)}


export default Reel;

const Container = styled.div`
margin-bottom: 90px;
    h2 {
        margin-left: 20px;
    }
`