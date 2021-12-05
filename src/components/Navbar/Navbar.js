import React, { useState, useEffect } from "react";
import {
  Nav,
  NavLink,
  Bars,
  BarsNavLink,
  NavMenu,
  ProfileImage,
  ProfileContainer,
} from "./NavbarElements";
import logo from "../../images/icon.png";

const Navbar = () => {
  const [barsMenuOpen, setBarsMenuOpen] = useState(false);
  const handleNavBarToggle = () => {
    setBarsMenuOpen(!barsMenuOpen);
  };
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const handleProfileMenuToggle = () => {
    setProfileMenuOpen(!profileMenuOpen);
  };

  const [isShrunk, setShrunk] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      setShrunk((isShrunk) => {
        if (
          !isShrunk &&
          (document.body.scrollTop > 100 ||
            document.documentElement.scrollTop > 100)
        ) {
          return true;
        }

        if (
          isShrunk &&
          document.body.scrollTop < 10 &&
          document.documentElement.scrollTop < 10
        ) {
          return false;
        }
        return isShrunk;
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Nav shrunk={isShrunk}>
      <NavLink to="/home">
        <img src={logo} alt="logo" className="logo" />
      </NavLink>

      <Bars onClick={handleNavBarToggle} />
      <div
        className={`barsMenu ${barsMenuOpen ? "showBarsMenu" : "hideBarsMenu"}`}
        onClick={handleNavBarToggle}
      >
        <BarsNavLink to="/home">Home</BarsNavLink>
        <BarsNavLink to="/raidassembler">Raid Assembler</BarsNavLink>
        <BarsNavLink to="/arenapointcalculator">
          Arena Point Calculator
        </BarsNavLink>
        <BarsNavLink to="/gemfinder">Gem Finder</BarsNavLink>
        <BarsNavLink to="/about">About</BarsNavLink>
      </div>
      <NavMenu>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/raidassembler">Raid Assembler</NavLink>
        <NavLink to="/arenapointcalculator">Arena Point Calculator</NavLink>
        <NavLink to="/gemfinder">Gem Finder</NavLink>
        <NavLink to="/about">About</NavLink>
      </NavMenu>
      <ProfileContainer>
        <ProfileImage onClick={handleProfileMenuToggle} />

        <div
          className={`${
            profileMenuOpen ? "profile-menu" : "hide-profile-menu"
          }`}
        ></div>
      </ProfileContainer>
    </Nav>
  );
};

export default Navbar;
