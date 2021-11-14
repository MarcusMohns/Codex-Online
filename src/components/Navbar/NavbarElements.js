import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import { CgChevronDoubleLeftR } from "react-icons/cg";
import styled from 'styled-components';
export const Nav = styled.nav`
	background: #264874;
	display: flex;
	flex-direction: row;
	justify-content: center;
	height: 10%;

	@media screen and (min-width: 768px) {
		height: 10%;
	}

  .left-menu {
    display:flex;
    flex-direction: row;
    justify-content: flex-end;
    background-color:#264874;
    color:white;
    position: fixed;
    width:50%;
    height:80%;
    top: 15%;
    left: 0;
    font-size: 1.8rem;
    cursor: pointer;
    z-index: 1;
    border-radius:.3rem;
		transition: all 300ms;
    box-shadow: 5px 5px 6px 1px rgba(0, 0, 0, 0.35);

    @media screen and (min-width: 1200px) {
      width:25%;
	}


    .double-arrow-right {
      transition: all 300ms;
      transform:translate(100%);
      align-self:center;
      color:black;
      opacity:100%;
    }
	
}
	.hide-left-menu {
    display:flex;
    flex-direction: row;
    justify-content: flex-end;
    background-color:#264874;
    color:white;
    position: fixed;
    width:50%;
    height:80%;
    top: 15%;
    left: 0;
    font-size: 1.8rem;
    cursor: pointer;
    z-index: 1;
    border-radius:.3rem;
		transition: all 300ms;
    transform:translate(-100%);
    box-shadow: 5px 5px 6px 1px rgba(0, 0, 0, 0.35);

    
    .double-arrow-right {
      transition: all 300ms;
      transform:rotate(180deg) translate(-100%);
      align-self:center;

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
  padding: .6rem;
  text-decoration: none;
  font-size: 2rem;
  color: #818181;
  


`;

export const NavLink = styled(Link)`
  color: #fff;
  background:#264874;
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
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    color:white;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  @media screen and (min-width: 768px) {
    display:none;
  
  }
`;

export const DoubleArrowLeft = styled(CgChevronDoubleLeftR)`
		color:white;
    font-size:2rem;
    cursor: pointer;
    opacity:50%;
    z-index: 2;


	`


export const NavMenu = styled.div`
	display: none;
 
	@media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
	  margin-right: -24px;
		
	}
`;
