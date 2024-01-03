import React, { useState, useEffect } from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import github from '../img/github-icon.svg';
import logo from '../img/logo.svg';
import { FaUserCircle } from 'react-icons/fa';
import NavDropdownItem from './NavDropdownItem';

export default function Navbar() {
	const [activeHash, setActiveHash] = useState('');

	const isHashActive = (hash) => {
		return hash == activeHash;
	};

	const servicesDropdownItems = [
		{ label: 'One on one Session', href: '/services#1v1' },
		{ label: 'Group Session', href: '/services#group' },
		{ label: 'Workshops', href: '/services#workshops' },
		// Add more items here
	];

	return (
		<nav
			className='lg:px-80 fixed bg-light w-full z-40 drop-shadow-md'
			role='navigation'
			aria-label='main-navigation'>
			<div className='flex items-center px-10'>
				<div className='flex h-full w-fit justify-center'>
					{/* Hamburger menu */}
					{/* <div
							className={`navbar-burger burger ${this.state.navBarActiveClass}`}
							data-target='navMenu'
							role='menuitem'
							tabIndex={0}
							onKeyPress={() => this.toggleHamburger()}
							onClick={() => this.toggleHamburger()}>
							<span />
							<span />
							<span />
						</div> */}
				</div>
				<div id='navMenu' className={`flex items-center w-full h-full justify-around`}>
					<AnchorLink to='/' className='px-4 ' title={'Home'}>
						{/* <img src={logo} alt='Kaldi' style={{ width: '88px' }} /> */}
						<div className='flex'>
							<div className='z-20 relative left-6 bg-secondary p-4 rotate-45'></div>
							<div className='z-50 bg-primary p-4 rotate-45'></div>
							<div className='z-40 relative right-6 bg-tertiary p-4 rotate-45'></div>
							<div className='z-10 relative right-12 bg-four p-4 rotate-45'></div>
						</div>
					</AnchorLink>
					<div className='flex h-full space-x-8 '>
						{[
							['Team', '#team', 'secondary'],
							['Resources', '#resources', 'primary'],
							['Testimonials', '#testimonials', 'tertiary'],
							// ['Services', '#services', 'tertiary'],
							// ['Connect', '#contact', 'four'],
						].map(([title, hash, color]) => (
							<AnchorLink
								key={hash}
								to={'/' + hash}
								title={title}
								onAnchorLinkClick={() => setActiveHash(hash)}
								className={`w-full h-full sans text-dark text-md p-4 hover:bg-dark/10 text-nowrap ${
									isHashActive(hash) ? 'border-b-2 border-primary' : ''
								}`}>
								{title}
							</AnchorLink>
						))}
						<NavDropdownItem title={'Services'} items={servicesDropdownItems} />
					</div>
					<div className='flex items-center w-fit space-x-4'>
						{/* <h2 className='sans text-md text-nowrap'>Login / Signup</h2>
							<FaUserCircle size={24} className='text-dark' /> */}
						{/* <div className='bg-dark px-2 py-1 font-bold text-light'>Log in</div>
						<span className='sans items-end text-dark'>or</span>
						<div className='px-2 py-1 font-bold text-dark border-b-2 border-dark'>Sign up</div> */}
						<div className='bg-four hover:scale-105 active:scale-95 hover:cursor-pointer select-none rounded-xl px-2 py-1 sans font-extrabold text-light'>
							Connect
						</div>
						<span className='text-dark/50'>|</span>
						<div className='flex items-center w-fit space-x-2'>
							<FaUserCircle size={22} />
							<h2 className='sans text-md text-nowrap'>Sign in</h2>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
}
