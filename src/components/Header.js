import React from 'react';
import styled from 'styled-components'


function Header() {
  return (
    <Nav className="Header">
      <Logo src="https://static.turbosquid.com/Preview/2015/08/30__04_27_51/1.jpgfc4f1c77-9f9e-4bd8-a7dc-ded81c2505fbOriginal.jpg" />

      <NavMenu>
        <a>
          <img src="/images/home-icon.svg" />
          <span>HOME</span>
        </a>
        <a>
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
        </a>
        <a>
          <img src="/images/watchlist-icon.svg" />
          <span>CONTACT</span>
        </a>
      </NavMenu>
      <UserImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3ZqtH_FflCcwXc7p6H-15NAf8hfAvK9A0-g&usqp=CAU"/>

    


    </Nav>
  );
}

export default Header;

const Nav = styled.nav`
height: 70px;
background-color: #3B6190;
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
  a {
      display:flex;
      align-items: center;
      padding: 0 12px;
      cursor: pointer;

      img {
        height: 20px;
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
