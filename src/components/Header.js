import React from 'react';
import styled from 'styled-components'
import {
  Link
} from "react-router-dom";


function Header() {
  const linkStyle = {
    textDecoration: "none",
    color: 'white',
    padding: 0,
    fontSize: '13px',
    letterSpacing: '1.42px',
    position: 'relative',
    marginRight: '20px'
  };


  return (
    <Nav className="Header">
      {/* <Logo src="/images/head.png" /> */}

      <NavMenu>
        <h1>Jay Winebrenner Video</h1>
 
          <img className="link-icon" src="/images/home-icon.svg" />
          <Link style={linkStyle} to="/"><span>HOME</span></Link>
  
        {/* <a>
          <img src="/images/search-icon.svg" />
          <span>SEARCH</span>
        </a>
        <a>
          <img src="/images/original-icon.svg" />
          <span>MUSIC VIDEOS</span>
        </a>
        <a>
          <img src="/images/movie-icon.svg" />
          <span>SHORTS</span>
        </a> */}
    
          <img className="link-icon" src="/images/watchlist-icon.svg" />
          <Link style={linkStyle} to="/contact"><span>CONTACT</span></Link>
      
      </NavMenu>
      <a href="/admin">
      <UserImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3ZqtH_FflCcwXc7p6H-15NAf8hfAvK9A0-g&usqp=CAU"/>
        </a>
    


    </Nav>
  );
}

export default Header;

const Nav = styled.nav`
height: 70px;
// background-color: #3B6190;
background-color: black;
display:flex;
align-items: center;
padding: 0 30px;
`


const Logo = styled.img`
  height: 50px
`

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  align-items: center;
  
  h1 {
    margin-right: 20px;
  }
  a {
      display:flex;
      align-items: center;
      padding: 0 12px;
      cursor: pointer;

      img {
        height: 20px;
        margin-right: 20px;
      }

      span {
        font-size: 13px;
        letter-spacing: 1.42px;
        position: relative;
        &:after {
          content: "";
          height: 2px;
          background: white;
          position: absolute;
          left: 0;
          right: 0;
          bottom: -6px;
          opacity: 0;
          transform-origin: left center;
          transition: all 250ms cubic-bezier(.25, .46, .46, .94) 0s;
          transform: scaleX(0);
        }
      }
      
      &:hover {
        span:after {
          transform: scaleX(1);
          opacity: 1;
        }
      }
  }
`

const UserImg = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  cursor: pointer;
`
