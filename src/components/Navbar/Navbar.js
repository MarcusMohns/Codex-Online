import React, { useState, useEffect } from "react";
import {
  Nav,
  NavLink,
  Bars,
  BarsNavLink,
  NavMenu,
  ProfileImage,
  ProfileContainer,
  LogoLink,
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
          (document.body.scrollTop > 120 ||
            document.documentElement.scrollTop > 120)
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
      <LogoLink to="/home">
        <img
          src="images/icon.png"
          srcSet="images/icon.png 1x, images/big-icon.png 2x"
          alt="logo"
          className="logo"
        />
        <div className="logo-text">Codex</div>
      </LogoLink>

      <Bars onClick={handleNavBarToggle} />
      <div
        className={`barsMenu ${barsMenuOpen ? "showBarsMenu" : "hideBarsMenu"}`}
        onClick={handleNavBarToggle}
      >
        <BarsNavLink to="/home">Home</BarsNavLink>
        <BarsNavLink to="/raidhelper">Raid Helper</BarsNavLink>
        <BarsNavLink to="/gemfinder">Gem Finder</BarsNavLink>
        <BarsNavLink to="/arenapointcalculator">
          Arena Point Calculator
        </BarsNavLink>
        <BarsNavLink to="/hitcaphelper">Hit Cap Helper</BarsNavLink>
      </div>
      <NavMenu>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/raidhelper">Raid Helper</NavLink>
        <NavLink to="/gemfinder">Gem Finder</NavLink>
        <NavLink to="/arenapointcalculator">Arena Point Calculator</NavLink>
        <NavLink to="/hitcaphelper">Hit Cap Helper</NavLink>
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
