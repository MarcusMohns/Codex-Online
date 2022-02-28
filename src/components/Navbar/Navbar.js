import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Nav,
  NavLink,
  Bars,
  BarsNavLink,
  NavMenu,
  ProfileImage,
  ProfileContainer,
} from "./NavbarElements";

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
          document.body.scrollTop < 60 &&
          document.documentElement.scrollTop < 60
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
      <Link to="/home">
        <img src={"images/icon.png"} alt="logo" className="logo" />
      </Link>

      <Bars onClick={handleNavBarToggle} />
      <div
        className={`barsMenu ${barsMenuOpen ? "showBarsMenu" : "hideBarsMenu"}`}
        onClick={handleNavBarToggle}
      >
        <BarsNavLink to="/home">Home</BarsNavLink>
        <BarsNavLink to="/raidassembler">Raid Assembler</BarsNavLink>
        <BarsNavLink to="/gemfinder">Gem Finder</BarsNavLink>
        <BarsNavLink to="/arenapointcalculator">
          Arena Point Calculator
        </BarsNavLink>
      </div>
      <NavMenu>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/raidassembler">Raid Assembler</NavLink>
        <NavLink to="/gemfinder">Gem Finder</NavLink>
        <NavLink to="/arenapointcalculator">Arena Point Calculator</NavLink>
      </NavMenu>
      <ProfileContainer>
        <ProfileImage onClick={handleProfileMenuToggle} />
        <div
          className={`${
            profileMenuOpen ? "profile-menu" : "hide-profile-menu"
          }`}
        >
          Input for profile menu here (Under construction)
        </div>
      </ProfileContainer>
    </Nav>
  );
};

export default Navbar;
