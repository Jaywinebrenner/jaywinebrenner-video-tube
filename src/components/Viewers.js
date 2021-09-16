import React from 'react';
import styled from 'styled-components';


function Viewers() {
  return (
      <Container>
            <Wrap>
                <img src="/images/viewers-disney.png" />
                Director Reel
            </Wrap>
            <Wrap>
                <img src="/images/viewers-marvel.png" />
                Shorts / Commercials
            </Wrap>
            <Wrap>
                <img src="/images/viewers-national.png" />
                Music Videos
            </Wrap>
            <Wrap>
                <img src="/images/viewers-starwars.png" />
            </Wrap>
      </Container>
  );
}

export default Viewers;

const Container = styled.div`
    margin-top: 30px;
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    padding: 20px;
`

const Wrap = styled.div`
    border: 3px solid rgba(249,249,249, .1);
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, 
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    transition: all 250ms cubic-bezier(.25, .46, .45, .95) 0s;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &:hover {
        transform: scale(1.03);
        border-color: rgba(249, 249, 249, .8);
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, 
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    }

`


