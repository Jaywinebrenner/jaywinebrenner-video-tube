import React from 'react';
import styled from 'styled-components'


function Loading() {


  return (
    <Container>
    <div className="loading-icon-wrapper">
        <img className="loading-icon" src="https://cutewallpaper.org/21/loading-gif-transparent-background/Used-Cars-Trucks-Inventory-Cedar-Rapids-Iowa-City-IA-.gif" />
    </div>

        
    </Container>
  );
}

export default Loading;

const Container = styled.div`
    h2 {
        margin-left: 20px;
    }
`
