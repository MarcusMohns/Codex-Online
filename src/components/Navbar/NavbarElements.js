import { NavLink as Link } from "react-router-dom";
import { CgProfile } from "@react-icons/all-files/cg/CgProfile";
import { FaBars } from "@react-icons/all-files/fa/FaBars";
import styled from "styled-components";
import COLORS from "../../components";

export const Nav = styled.nav`
  background: ${COLORS.primary};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100px;
  transition: 0.4s ease;
  z-index: 500;
  box-shadow: 5px 5px 6px 1px rgba(0, 0, 0, 0.35);
  position: relative;

  .logo {
    width: 48px;
    height: 48px;
  }

  @media screen and (min-width: 768px) {
    position: fixed;
    width: 100%;
    top: 0;
    justify-content: space-evenly;
    height: ${(props) => (props.shrunk ? `60px` : `100px`)};

    .logo-text {
      transition: 0.3s ease;
      opacity: ${(props) => (props.shrunk ? `0%` : `100%`)};
    }
  }

  .profile-menu {
    display: flex;
    position: absolute;
    background-color: black;
    width: 200px;
    height: 500px;
    box-shadow: 5px 5px 6px 1px rgba(0, 0, 0, 0.35);
    transform: translate(-50%, 0%);
    border-radius: 0.5rem;
    border: 1px solid grey;
    transition: 0.5ms all;

    display: none; // <----

    @media screen and (min-width: 1200px) {
      width: 200px;
      transform: translate(0, 60%);
    }
  }
  .hide-profile-menu {
    display: none;
  }

  .showBarsMenu {
    padding-top: 50%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 1000vh;
    width: 100%;
    position: absolute;
    top: 0;
    z-index: 10000;
    background-color: rgba(0, 0, 0, 0.9);
    text-align: center;
  }

  .hideBarsMenu {
    display: none;
  }
`;
export const LogoLink = styled(Link)`
  font-size: 2rem;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  position: relative;
  letter-spacing: 0.5px;
  width: auto;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  font-weight: 200;

  @media screen and (min-width: 768px) {
    width: 100%;
  }
`;
export const BarsNavLink = styled(Link)`
  padding: 0.6rem;
  text-decoration: none;
  font-size: 2rem;
  color: #818181;
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  margin: 0 1rem;
  height: 100%;
  padding: 5px 0;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.2s ease-out;
  position: relative;
  user-select: none;
  white-space: nowrap;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;

  &:after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: "";
    display: block;
    height: 3px;
    left: 50%;
    position: absolute;
    background: ${COLORS.fadedOffWhite};
    transition: width 0.2s ease 0s, left 0.2s ease 0s;
    width: 0;
  }
  &:hover:after,
  &.active:after {
    width: 100%;
    left: 0;
  }
`;
export const Bars = styled(FaBars)`
  position: absolute;
  top: 0;
  left: 0;
  color: white;
  transform: translate(100%, 120%);
  font-size: 1.8rem;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const ProfileContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  color: white;
  width: 100%;
  font-size: 1.8rem;
  transform: translate(-100%, 150%);

  @media screen and (min-width: 768px) {
    position: static;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transform: none;
  }
`;

export const ProfileImage = styled(CgProfile)`
  color: white;
  color: transparent; // <-------
  //cursor: pointer; // <-------
  font-size: 2rem;
  z-index: 2;
  position: relative;
`;

export const NavMenu = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    margin-right: -24px;
  }
`;
