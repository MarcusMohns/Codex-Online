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
  transition: 0.5s ease;
  z-index: 500;
  box-shadow: 5px 5px 6px 1px rgba(0, 0, 0, 0.35);

  .logo {
    width: 50px;
    height: 50px;
  }

  @media screen and (min-width: 768px) {
    position: sticky;
    justify-content: space-evenly;
    top: 0px;
    height: ${(props) => (props.shrunk ? `60px` : `100px`)};
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
  }

  .hideBarsMenu {
    display: none;
  }
`;
export const LogoLink = styled(Link)`
  font-size: 1.6rem;
  color: ${COLORS.offWhite};
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  position: relative;
  width: 100%;
  letter-spacing: 1px;
`;
export const BarsNavLink = styled(Link)`
  padding: 0.6rem;
  text-decoration: none;
  font-size: 2rem;
  color: #818181;
`;

export const NavLink = styled(Link)`
  color: ${COLORS.offWhite};
  display: flex;
  align-items: center;
  text-decoration: none;
  margin: 0 1rem;
  height: 100%;
  padding: 7px 0;
  cursor: pointer;
  transition: all 0.2s ease-out;
  position: relative;
  user-select: none;
  white-space: nowrap;

  &:after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: "";
    display: block;
    height: 1px;
    left: 50%;
    position: absolute;
    background: ${COLORS.fadedOffWhite};
    transition: width 0.2s ease 0s, left 0.2s ease 0s;
    box-shadow: 3px 5px 10px -2px rgba(0, 0, 0, 0.6);
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
  transform: translate(100%, 200%);
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
