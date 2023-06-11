import React, { useState } from 'react';
import styled from 'styled-components';
import Hamburger from 'hamburger-react'
import './Navbar.css'
const Nav = styled.nav`
  background-color: #1B242Eff;
  overflow: hidden;
  padding: 10px;
  display:flex;
  justify-content:flex-end;

`;

const NavLink = styled.a`
  
  color: white;
  text-align: center;
  padding: 14px 14px;
  text-decoration: none;
  font-size: 16px;
  &:hover {
    background-color: rgba(219, 5, 117, 0.4);
    text-decoration:none;
    color:white;
  }
  margin-right:10px;
  margin-left:10px;
 
`;



const NavbarButtons = styled.div`
  @media screen and (max-width: 600px) {
    display: ${props => (props.showMenu ? 'block' : 'none')};
  }
`;

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <Nav>
         <Hamburger direction='right' color="white" className='ham-menu'>&#9776;
      <NavbarButtons showMenu={showMenu}>
        MENU
      </NavbarButtons>
      </Hamburger>
      <NavLink href="#" className='link1'>GO PREMIUM</NavLink>
      <NavLink href="#" className='link2'>SIGN IN</NavLink>
     
      
    </Nav>
  );
};

export default Navbar;
