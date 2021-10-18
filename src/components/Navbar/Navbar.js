import React from 'react'
import {Nav,NavLink,Bars,NavMenu,NavBtn,NavBtnLink} from './NavbarElements'
import logo from '../../images/WOTLK.png' 
const Navbar = () => {
    return (
        <>
          <Nav>
            <NavLink to="/home">
            <img style={{background:'black'}}src={logo}/>
            </NavLink>
            <Bars />
            <NavMenu>
            <NavLink to="/home">
              Home
              </NavLink>  
              <NavLink to="/raidassembler">
              Raid Assembler
              </NavLink>  
              <NavLink to="/arenapointcalculator">
              Arena Calculator
              </NavLink>  
              <NavLink to="/about">
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
