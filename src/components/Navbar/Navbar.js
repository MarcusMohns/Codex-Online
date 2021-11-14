import React, { useState } from 'react';
import { Nav, NavLink, Bars, BarsNavLink, NavMenu, DoubleArrowLeft } from './NavbarElements';
import logo from '../../images/icon.png';

const Navbar = () => {
	const [ barsMenuOpen, setBarsMenuOpen ] = useState(false);
	const handleNavBarToggle = () => {
		setBarsMenuOpen(!barsMenuOpen);
	};
	const [leftMenuOpen, setLeftMenuOpen] = useState(false);
	const handleLeftMenuToggle = () => {
		setLeftMenuOpen(!leftMenuOpen);
	};


	return (
		<Nav>
			<NavLink to="/home">
				<img src={logo} alt="logo" className="logo" />
			</NavLink>
			
			<div className={`${leftMenuOpen ? 'left-menu' : 'hide-left-menu'}`}>
			<DoubleArrowLeft className="double-arrow-right" onClick={handleLeftMenuToggle} />

			</div>
			<Bars onClick={handleNavBarToggle} />
			<div className={`barsMenu ${barsMenuOpen ? ' showBarsMenu' : 'hideBarsMenu'}`} onClick={handleNavBarToggle}>
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
		</Nav>
	);
};

export default Navbar;
