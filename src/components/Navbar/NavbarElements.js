import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
	background: black;
	display: flex;
	flex-direction: row;
	justify-content: center;
	height: 8%;

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
  transition: all .2s ease-out;
  &.active {
    color: #256ce1;
  }
  &:hover ,&:focus {
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
