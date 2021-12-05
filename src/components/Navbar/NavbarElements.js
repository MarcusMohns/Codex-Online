import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import styled from "styled-components";
import COLORS from "../../components";

export const Nav = styled.nav`
  background: ${COLORS.primary};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  height: 150px;
  transition: 0.4s;
  z-index: 500;

  @media screen and (min-width: 768px) {
    position: sticky;
    top: 0px;
    background: ${(props) =>
      props.shrunk ? `${COLORS.fadedPrimary}` : `${COLORS.primary}`};
    height: ${(props) => (props.shrunk ? `75px` : `150px`)};
  }

  .profile-menu {
    display: flex;
    position: absolute;
    background-color: #fff;
    width: 200px;
    height: 500px;
    box-shadow: 5px 5px 6px 1px rgba(0, 0, 0, 0.35);
    transform: translate(0, 60%);
    border-radius: 0.5rem;
    transition: 0.5ms all;

    @media screen and (min-width: 1200px) {
      width: 200px;
    }
  }
  .hide-profile-menu {
    position: absolute;
    box-shadow: 5px 5px 6px 1px rgba(0, 0, 0, 0.35);

    @media screen and (min-width: 1200px) {
    }
  }

  .showBarsMenu {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    position: fixed;
    z-index: 1;
    background-color: rgb(0, 0, 0);
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
  color: #fff;
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
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  color: white;
  transform: translate(100%, 75%);
  font-size: 1.8rem;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
