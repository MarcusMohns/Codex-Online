import React from 'react'
import {Nav,NavLink,Bars,NavMenu,NavBtn,NavBtnLink} from './NavbarElements'
import logo from '../../images/TBC.png' 
const Navbar = () => {
    return (
        <>
          <Nav>
            <NavLink to="/">
            <img src={logo}/>
            </NavLink>
            <Bars />
            <NavMenu>
            <NavLink to="/home" activeStyle>
              Home
              </NavLink>  
              <NavLink to="/raidassembler" activeStyle>
              Raid Assembler
              </NavLink>  
              <NavLink to="/arenapointcalculator" activeStyle>
              Arena Calculator
              </NavLink>  
              <NavLink to="/about" activeStyle>
              About
              </NavLink>  
            </NavMenu>
            <NavBtn>
              <NavBtnLink to="/sign in"> Sign in</NavBtnLink>
            </NavBtn>
          </Nav>
        </>
    )
}

export default Navbar
