import React, { useState, useEffect } from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { FaBars } from 'react-icons/fa';
import SigninButton from './SigninButton';

export default function Navbar() {
	const [activeHash, setActiveHash] = useState('');
	const [darkModeActive, setDarkMode] = useState(false);
	const [darkHover, setDarkHover] = useState(false);
	const [isLoggedIn, setLoggedIn] = useState(false);
	const [userData, setUserData] = useState();

	const [isBurgerNavShown, setBurgerNavShown] = useState(false);

	const isHashActive = (hash) => {
		return hash == activeHash;
	};

	// const servicesDropdownItems = [
	// 	{ label: 'One on one Session', href: '/services#1v1' },
	// 	{ label: 'Group Session', href: '/services#group' },
	// 	{ label: 'Workshops', href: '/services#workshops' },
	// 	// Add more items here
	// ];

	const navLinks = [
		{
			title: 'Team',
			hash: 'team',
			colorClass: 'primary',
		},
		{
			title: 'Testimonials',
			hash: 'testimonials',
			colorClass: 'secondary',
		},
		{
			title: 'Services',
			hash: 'services',
			colorClass: 'tertiary',
		},
		{
			title: 'Resources',
			hash: 'resources',
			colorClass: 'four',
		},
	];

	useEffect(() => {
		console.log('Logged in state is now:', isLoggedIn);
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
					if (['team', 'testimonials', 'services', 'resources'].includes(entry.target.id)) {
						setActiveHash(entry.target.id);
					}
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
	}, [darkModeActive, isLoggedIn]);

	const handleUserSignIn = (userData) => {
		// Process the user data received from SigninModal
		console.log('User Data Received in Navbar:', userData);
		setLoggedIn(true);
		setUserData(userData);
		console.log('LOGGED IN: ' + isLoggedIn);
		// You can set state here if you want to use this data in Navbar
	};

	const handleUserSignOut = () => {
		// Process the user data received from SigninModal
		// You can set state here if you want to use this data in Navbar
		setLoggedIn(false);
	};

	return (
		<>
			<nav
				className='fixed bg-light dark:bg-darkAccent w-full z-50 drop-shadow-md'
				role='navigation'
				aria-label='main-navigation'>
				<div className='flex items-center'>
					<div
						id='navMenu'
						className={`flex xs:py-4 lg:py-0 items-center w-full h-full justify-around`}>
						<AnchorLink
							to='/'
							className='px-4 '
							title={'Home'}>
							{/* <img src={logo} alt='Kaldi' style={{ width: '88px' }} /> */}
							<div className='relative flex'>
								<div className='z-50 bg-primary p-4 rotate-45'></div>
								<div className='z-20 absolute -left-2 top-0 bg-secondary p-4 rotate-45'></div>
								<div className='z-40 absolute -right-2 bg-tertiary p-4 rotate-45'></div>
								<div className='z-10 absolute -right-4 bg-four p-4 rotate-45'></div>
							</div>
						</AnchorLink>
						<div className='flex h-full space-x-8 '>
							{navLinks.map((link) => (
								<AnchorLink
									key={'#' + link.hash}
									to={'/#' + link.hash}
									title={link.title}
									onAnchorLinkClick={() => setActiveHash(link.hash)}
									className={`w-full h-full hidden lg:block sans  text-dark text-md px-2 sm:py-4 hover:bg-dark/10 text-nowrap ${
										isHashActive(link.hash)
											? 'border-b-2 border-primary hover:border-primary'
											: 'hover:border-dark/10'
									}`}>
									{link.title}
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
								<div className='select-none hidden lg:flex cursor-pointer hover:bg-opacity-50 group bg-hard-stop-gradient p-[0.25rem] rounded-md items-center'>
									<div className=' bg-light group-active:scale-95 sans px-1'>
										<span className='text-dark text-sm xbold  group-hover:text-opacity-50'>
											CONTACT US
										</span>
									</div>
								</div>
								<div
									onClick={() => setBurgerNavShown(!isBurgerNavShown)}
									className='flex lg:hidden select-none cursor-pointer hover:opacity-50 active:scale-95'>
									<FaBars
										size={24}
										className='text-dark'
									/>
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
							<SigninButton
								isLoggedIn={isLoggedIn}
								userData={userData}
								handleUserSignIn={handleUserSignIn}
								handleUserSignOut={handleUserSignOut}
							/>
						</div>
					</div>
				</div>
			</nav>
			<nav
				className={`fixed z-40 lg:hidden w-full h-fit bg-dark/80 ${
					isBurgerNavShown ? 'translate-y-16' : '-translate-y-[100%]'
				} duration-300 ease-in-out transition-all`}>
				<div className='flex flex-col sm:flex-row w-full h-full'>
					{navLinks.map((link, index) => (
						<AnchorLink
							key={'#' + link.hash}
							to={'/#' + link.hash}
							title={link.title}
							onAnchorLinkClick={() => {
								setActiveHash(link.hash);
								setBurgerNavShown(false);
							}}
							className={`${
								index != 0 ? 'border-l-2 border-light/10' : ''
							} w-full h-full text-center sans hover:text-light/50 hover:bg-dark/20  text-light text-md p-4 text-nowrap ${
								isHashActive(link.hash)
									? 'border-l-light/10 border-b-2 border-b-primary hover:border-b-primary'
									: 'hover:border-dark/10'
							}`}>
							{link.title}
						</AnchorLink>
					))}
					{/* <div className='hidden lg:block'>
							<NavDropdownItem title={'Services'} items={servicesDropdownItems} />
						</div> */}
				</div>
			</nav>
		</>
	);
}
