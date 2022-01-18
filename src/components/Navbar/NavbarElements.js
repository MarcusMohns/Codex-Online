import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
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

  @media screen and (min-width: 768px) {
    position: sticky;
    justify-content: space-evenly;
    top: 0px;
    background-color: ${(props) =>
      props.shrunk ? `${COLORS.primary}` : `${COLORS.primaryTransparent}`};
    height: ${(props) => (props.shrunk ? `75px` : `100px`)};
  }

  .profile-menu {
    display: flex;
    position: absolute;
    background-color: ${COLORS.offWhite};
    width: 200px;
    height: 500px;
    box-shadow: 5px 5px 6px 1px rgba(0, 0, 0, 0.35);
    transform: translate(-50%, 0%);
    border-radius: 0.5rem;
    transition: 0.5ms all;
    @media screen and (min-width: 1200px) {
      width: 200px;
      transform: translate(0, 60%);
    }
  }
  .hide-profile-menu {
    position: absolute;
    box-shadow: 5px 5px 6px 1px rgba(0, 0, 0, 0.35);

    @media screen and (min-width: 1200px) {
    }
  }

  .showBarsMenu {
    padding-top: 50%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 1000vw;
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
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  transition: all 0.2s ease-out;
  &.active {
    color: #256ce1;
  }
  &:hover,
  &:focus {
    color: #256ce1;
  }

  .logo {
    width: 50px;
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
  font-size: 2rem;
  cursor: pointer;
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
