import React, { useState } from 'react';
import { Nav, NavLink, Bars, BarsNavLink, NavMenu } from './NavbarElements';
import logo from '../../images/icon.png';

const Navbar = () => {
	const [ barsMenuOpen, setBarsMenuOpen ] = useState(false);
	const handleToggle = () => {
		setBarsMenuOpen(!barsMenuOpen);
		console.log(barsMenuOpen);
	};

	return (
		<Nav>
			<NavLink to="/home">
				<img src={logo} alt="logo" className="logo" />
			</NavLink>
			<Bars onClick={handleToggle} />
			<div className={`barsMenu ${barsMenuOpen ? ' showBarsMenu' : 'hideBarsMenu'}`} onClick={handleToggle}>
				<BarsNavLink to="/home">Home</BarsNavLink>
				<BarsNavLink to="/raidassembler">Raid Assembler</BarsNavLink>
				<BarsNavLink to="/arenapointcalculator" onClick={handleToggle}>
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
