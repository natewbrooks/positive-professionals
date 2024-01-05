import React, { useState, useEffect } from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import github from '../img/github-icon.svg';
import logo from '../img/logo.svg';
import { FaSun, FaMoon, FaUserCircle } from 'react-icons/fa';
import NavDropdownItem from './NavDropdownItem';

export default function Navbar() {
	const [activeHash, setActiveHash] = useState('');
	const [darkModeActive, setDarkMode] = useState(false);
	const [darkHover, setDarkHover] = useState(false);

	const isHashActive = (hash) => {
		return hash == activeHash;
	};

	const servicesDropdownItems = [
		{ label: 'One on one Session', href: '/services#1v1' },
		{ label: 'Group Session', href: '/services#group' },
		{ label: 'Workshops', href: '/services#workshops' },
		// Add more items here
	];

	useEffect(() => {
		if (darkModeActive) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}

		// Define the callback for IntersectionObserver
		const observerCallback = (entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					// Set the hash to the ID of the entry target
					setActiveHash(entry.target.id);
					console.log(entry.target.id);
				}
			});
		};

		// Create an IntersectionObserver instance
		const observerOptions = { rootMargin: '0px', threshold: 0.5 };
		const observer = new IntersectionObserver(observerCallback, observerOptions);

		// Observe all sections that you want to track
		const sections = document.querySelectorAll('section');
		sections.forEach((section) => {
			observer.observe(section);
		});

		// Disconnect the observer on unmount
		return () => observer.disconnect();
	}, [darkModeActive]);

	return (
		<nav
			className='fixed bg-light dark:bg-darkAccent w-full z-50 drop-shadow-md'
			role='navigation'
			aria-label='main-navigation'>
			<div className='flex items-center'>
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
				<div
					id='navMenu'
					className={`flex xs:py-4 lg:py-0 items-center w-full h-full justify-around`}>
					<AnchorLink to='/' className='px-4 ' title={'Home'}>
						{/* <img src={logo} alt='Kaldi' style={{ width: '88px' }} /> */}
						<div className='relative flex'>
							<div className='z-50 bg-primary p-4 rotate-45'></div>
							<div className='z-20 absolute -left-2 top-0 bg-secondary p-4 rotate-45'></div>
							<div className='z-40 absolute -right-2 bg-tertiary p-4 rotate-45'></div>
							<div className='z-10 absolute -right-4 bg-four p-4 rotate-45'></div>
						</div>
					</AnchorLink>
					<div className='flex h-full space-x-8 '>
						{[
							['Team', 'team', 'secondary'],
							['Testimonials', 'testimonials', 'primary'],
							['Services', 'services', 'tertiary'],
							['Resources', 'resources', 'four'],
							// ['Services', '#services', 'tertiary'],
							// ['Connect', '#contact', 'four'],
						].map(([title, hash, color]) => (
							<AnchorLink
								key={'#' + hash}
								to={'/#' + hash}
								title={title}
								onAnchorLinkClick={() => setActiveHash(hash)}
								className={`w-full h-full hidden lg:block sans  text-dark text-md px-2 sm:py-6 hover:bg-dark/10 text-nowrap ${
									isHashActive(hash)
										? 'border-b-2 border-primary hover:border-primary'
										: 'hover:border-dark/10'
								}`}>
								{title}
							</AnchorLink>
						))}
						{/* <div className='hidden lg:block'>
							<NavDropdownItem title={'Services'} items={servicesDropdownItems} />
						</div> */}
					</div>
					<div className='flex items-center w-fit space-x-4'>
						{/* <h2 className='sans text-md text-nowrap'>Login / Signup</h2>
							<FaUserCircle size={24} className='text-dark' /> */}
						{/* <div className='bg-dark px-2 py-1 font-bold text-light'>Log in</div>
						<span className='sans items-end text-dark'>or</span>
						<div className='px-2 py-1 font-bold text-dark border-b-2 border-dark'>Sign up</div> */}
						<div className='flex space-x-2 items-center justify-center'>
							<div className='hidden lg:block cursor-pointer hover:bg-opacity-50 group bg-hard-stop-gradient p-[0.25rem] rounded-md'>
								<div className=' bg-light group-active:scale-95  group-hover:text-opacity-50 select-none rounded-md sans px-1 py-1 text-sm text-dark'>
									GET IN TOUCH
								</div>
							</div>
							{/* <div
								onMouseEnter={() => setDarkHover(true)}
								onMouseLeave={() => setDarkHover(false)}
								onClick={() => setDarkMode(!darkModeActive)}
								className={`group cursor-pointer rounded-md py-2 px-2 ${
									darkModeActive ? 'bg-light hover:bg-dark' : 'bg-dark hover:bg-light'
								} bg-dark`}>
								{darkModeActive && (
									<FaSun
										size={14}
										className={'text-dark group-hover:text-light transition-all duration-300'}
									/>
								)}
								{!darkModeActive && (
									<FaMoon
										size={14}
										className={'text-light group-hover:text-dark transition-all duration-300'}
									/>
								)}
							</div> */}
						</div>
						<span className='text-dark/50'>|</span>
						<div className='flex items-center w-fit space-x-2'>
							<FaUserCircle size={22} />
							<h2 className='sans text-sm text-nowrap'>SIGN IN</h2>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
}
