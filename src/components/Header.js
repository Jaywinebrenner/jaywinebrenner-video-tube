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
    marginRight: '20px',
  };

  const spanStyle = {
    fontSize: '10px;'

  }


  return (
    <Nav className="Header">
      {/* <Logo src="/images/head.png" /> */}

      <NavMenu>
          <MediaQuerySection>
            <h1>Jay Winebrenner Video Production</h1>
          </MediaQuerySection>

          <MediaQuerySection>
            <img className="link-icon" src="/images/home-icon.svg" />
            <Link style={linkStyle} to="/"><span style={spanStyle}>HOME</span></Link>
          </MediaQuerySection>
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
          <MediaQuerySection>
            <img className="link-icon" src="/images/watchlist-icon.svg" />
            <Link style={linkStyle} to="/contact"><span style={spanStyle}>CONTACT</span></Link>
          </MediaQuerySection>
        
        </NavMenu>

        <AdminLogo href="/admin">
          <UserImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3ZqtH_FflCcwXc7p6H-15NAf8hfAvK9A0-g&usqp=CAU"/>
        </AdminLogo>
    


    </Nav>
  );
}

export default Header;

const Nav = styled.nav`
  @media only screen and (max-width: 600px) {
    height: 150px;
    width: 100%;
  }

  height: 70px;
  // background-color: #3B6190;
  background-color: black;
  display:flex;
  align-items: center;
  padding: 0 30px;
`

const MediaQuerySection = styled.div`
  height: 70px;
  background-color: black;
  display:flex;
  align-items: center;
  padding: 0 30px;
  @media only screen and (max-width: 600px) {
    text-align: center;
    height: 40px;
  }
`

const AdminLogo = styled.a`
@media only screen and (max-width: 600px) {
  display:  block;
}
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
    // display: block;
  }
  @media only screen and (max-width: 600px) {
    margin-right: 0;
    flex-direction: column;
    span {
      font-size: 9px;
    }
    h1 {
      font-size: 15px;
      
    }
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
