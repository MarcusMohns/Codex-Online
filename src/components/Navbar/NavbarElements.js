import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
	background: #000;
	height: 3rem;
	display: flex;
	justify-content: space-between;
	padding: 0.5rem calc((100vw - 1000px) / 2);

	@media screen and (max-width: 768px) {
		height: 10%;
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
  padding: .6rem;
  text-decoration: none;
  font-size: 2rem;
  color: #818181;


`;

export const NavLink = styled(Link)`
  color: #fff;
  background:#000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #256ce1;
  }
  &:hover {
    color: #256ce1;
    
  }

  .logo {
    width:50px;
  }
  
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
	display: flex;
	align-items: center;
	margin-right: -24px;

	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const NavBtn = styled.nav`
	display: flex;
	align-items: center;
	margin-right: 24px;
	background-color: black;
	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const NavBtnLink = styled(Link)`
  background-color: #256ce1;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: #fff;
    color: #010606;
  }
`;
