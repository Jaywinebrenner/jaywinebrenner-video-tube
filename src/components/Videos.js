import React from 'react';
import styled from 'styled-components'
import {Link} from 'react-router-dom'


function Videos({allVideos}) {


  return (
    <Container>
        <h2>Videos</h2>

        <Wrap>
     
            {allVideos && allVideos.map((video) => (
    
            <Content key={video.id}>
                {/* <a href={`/detail/${video.id}`}>
                    <img className="video-image" src={video.thumbnail_url} />
                </a> */}
                <Link to={`/detail/${video.id}`}><img className="video-image" src={video.thumbnail_url} /></Link>
                <p>{video.name}</p>
            </Content>

            ))}
     

        </Wrap>
        
    </Container>
  );
}

export default Videos;

const Container = styled.div`
    h2 {
        margin-left: 20px;
    }
`

const Content = styled.div`
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    transition: all 250ms cubic-bezier(.25, .46, .45, .95) 0s;
    img {
        width: 100%;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, 
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        &:hover {
            transform: scale(1.02);
        }
    }

`

const Wrap = styled.div`
    margin-top: 30px;
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    padding: 20px;
    @media only screen and (max-width: 600px) {
        grid-template-columns: repeat(1, minmax(0, 1fr));
      }

`

