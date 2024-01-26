import React, { useState, useEffect, useLayoutEffect } from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import SigninButton from '../sign in/SigninButton';
import NavDropdownItem from './NavDropdownItem';
import { useLocation } from '@reach/router';
import logo from '../../img/logo/pp-logo-bg.svg';
import { has } from 'lodash';
import { FaMoon, FaSun } from 'react-icons/fa';

export default function Navbar() {
	const [darkModeActive, setDarkModeActive] = useState(false);
	const [activeHash, setActiveHash] = useState('');
	const [userData, setUserData] = useState();
	const [navHeight, setNavHeight] = useState(0);
	const [isBurgerNavShown, setBurgerNavShown] = useState(false);
	const [currentPath, setCurrentPath] = useState('');
	const location = useLocation();
	const [hasScrolled, setHasScrolled] = useState(false);

	const toggleDarkMode = () => {
		const newMode = !darkModeActive;
		setDarkModeActive(newMode);
		localStorage.setItem('darkMode', newMode ? 'dark' : 'light');
		if (newMode) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	};

	useEffect(() => {
		const savedMode = localStorage.getItem('darkMode');
		const isDarkMode = savedMode === 'dark';
		setDarkModeActive(isDarkMode);
		if (isDarkMode) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}, []);

	const handleScroll = () => {
		setHasScrolled(window.scrollY > 0);
	};

	useEffect(() => {
		setCurrentPath(location.pathname);
	}, [location.pathname]);

	const isHashActive = (hash) => {
		return hash == activeHash;
	};

	const resourcesDropdown = [
		{ label: 'Blog', href: '/resources/blog/' },
		{ label: 'Videos', href: '/resources/videos/' },
		{ label: 'Webinars', href: '/resources/webinars/' },
		// Add more items here
	];

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
	];

	function resizeWindow() {
		setNavHeight(document.getElementById('navMenu').offsetHeight);
	}

	useLayoutEffect(() => {
		setNavHeight(document.getElementById('navMenu').offsetHeight);
	}, [navHeight]);

	useEffect(() => {
		window.addEventListener('resize', resizeWindow);
		window.addEventListener('scroll', handleScroll);

		if (document.getElementById('navMenu')) {
			setNavHeight(document.getElementById('navMenu').offsetHeight);
		}

		// Define the callback for IntersectionObserver
		const observerCallback = (entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					// Set the hash to the ID of the entry target
					if (['team', 'testimonials', 'services', 'resources'].includes(entry.target.id)) {
						setActiveHash(entry.target.id);
					}
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
		return () => {
			window.removeEventListener('resize', resizeWindow);
			window.removeEventListener('scroll', handleScroll);
			observer.disconnect();
		};
	}, [navHeight, isBurgerNavShown]);

	return (
		<>
			<nav
				className='fixed bg-light dark:bg-dark w-full z-30 drop-shadow-md overflow-visible'
				role='navigation'
				aria-label='main-navigation'>
				<div className='flex flex-col items-center'>
					<div
						id='navMenu'
						className={`flex py-0 md:px-0 lg:px-10 xl:px-40 xxl:px-80 z-30 bg-light dark:bg-dark items-center w-full h-full justify-around`}>
						<AnchorLink
							to='/'
							onAnchorLinkClick={() => window.scrollTo(0, 0)}
							className='py-2 bg-light dark:bg-dark text-dark dark:text-light/60 overflow-hidden w-fit h-fit '
							title={'Home'}>
							<div className='flex flex-col justify-center w-full h-full items-center'>
								<img
									src={logo}
									alt='logo'
									className='transition-all duration-[500ms] ease-in-out w-[48px] h-[48px] mobile:w-[52px] mobile:h-[52px] '
								/>
								<div
									style={{
										maxHeight: hasScrolled ? '0px' : '30px',
										maxWidth: hasScrolled ? '0px' : '100px',
										paddingTop: hasScrolled ? '0px' : '2px',
										transform: hasScrolled ? 'translateY(20px)' : 'translateY(0px)',
										transform: hasScrolled ? 'translateX(40px)' : 'translateX(0px)',
									}}
									className={`relative transition-all duration-[500ms] ease-in-out flex text-sm text-dark dark:text-light/60 flex-col text-center w-fit leading-none`}>
									<span className='sans xbold'>POSITIVE</span>
									<span className='sans'>PROFESSIONALS</span>
								</div>
							</div>
							{/* <div className='relative flex'>
								<div className='z-20 absolute -left-2 top-0 bg-secondary p-4 rotate-45 rounded-sm'></div>
								<div className='z-40 bg-primary p-4 rotate-45 rounded-md'></div>
								<div className='z-30 absolute -right-2 bg-tertiary p-4 rotate-45 rounded-md'></div>
								<div className='z-10 absolute -right-4 bg-four p-4 rotate-45 rounded-sm'></div>
							</div> */}
						</AnchorLink>
						<div className='flex h-full space-x-4'>
							{navLinks.map((link) => (
								<AnchorLink
									key={'#' + link.hash}
									to={'/#' + link.hash}
									title={link.title}
									onAnchorLinkClick={() => setActiveHash(link.hash)}
									className={`w-full h-full hidden lg:block sans transition-all duration-[300ms] text-dark dark:text-light/60 text-md px-2 ${
										hasScrolled ? 'py-5' : 'py-8'
									} border-b-2 text-nowrap ${
										isHashActive(link.hash)
											? ' border-four hover:border-four'
											: 'border-light dark:border-light/70 hover:border-four/50'
									}`}>
									{link.title}
								</AnchorLink>
							))}
							{currentPath.includes('/resources') ? (
								<div className='hidden lg:block'>
									<NavDropdownItem
										items={resourcesDropdown}
										title='Resources'
										hash={''}
										isHashActive={isHashActive}
										isBurgerNavShown={isBurgerNavShown}
										setActiveHash={setActiveHash}
										hasScrolled={hasScrolled}
									/>
								</div>
							) : (
								<div className='hidden lg:block'>
									<NavDropdownItem
										items={resourcesDropdown}
										title='Resources'
										hash={'/#resources'}
										isHashActive={isHashActive}
										isBurgerNavShown={isBurgerNavShown}
										setActiveHash={setActiveHash}
										hasScrolled={hasScrolled}
									/>
								</div>
							)}
						</div>
						<div className='flex items-center w-fit space-x-4'>
							<div className='flex space-x-2 items-center justify-center'>
								{/* <div className='select-none hidden lg:flex cursor-pointer hover:bg-opacity-50 group bg-hard-stop-gradient p-[0.25rem] rounded-md items-center'>
									<div className=' bg-light group-active:scale-95 sans px-1'>
										<span className='text-dark text-sm xbold  group-hover:text-opacity-50'>
											CONTACT US
										</span>
									</div>
								</div> */}
								<button
									onClick={(e) => {
										e.preventDefault();
										setBurgerNavShown(!isBurgerNavShown);
									}}
									className='lg:hidden select-none cursor-pointer active:scale-95 w-[24px] h-[20px] flex flex-col justify-between'>
									<div
										className={`transform transition-all duration-300 ease-in-out h-[4px] w-full bg-dark dark:bg-light/70 rounded-full ${
											isBurgerNavShown ? '-rotate-45 translate-y-2 opacity-0' : 'rotate-0'
										}`}></div>
									<div
										className={`transform transition-all duration-500 ease-in-out h-[4px] w-full bg-dark dark:bg-light/70 rounded-full ${
											isBurgerNavShown ? 'rotate-45' : 'rotate-0'
										}`}></div>
									<div
										className={`transform transition-all duration-300 ease-in-out h-[4px] w-full bg-dark dark:bg-light/70 rounded-full ${
											isBurgerNavShown ? '-rotate-45 -translate-y-2' : 'rotate-0'
										}`}></div>
								</button>
							</div>
							<span className='lg:hidden text-dark/50 dark:text-light/50'>|</span>
							<FaSun
								onClick={toggleDarkMode}
								size={24}
								className='select-none dark:hidden text-dark cursor-pointer md:hover:opacity-50 active:scale-95'
							/>
							<FaMoon
								onClick={toggleDarkMode}
								size={20}
								className='select-none hidden dark:block text-light/70 cursor-pointer md:hover:opacity-50 active:scale-95'
							/>
							<SigninButton userData={userData} />
						</div>
					</div>
				</div>
				<div
					style={{
						transform: isBurgerNavShown ? `translateY(0px)` : `translateY(-100%)`,
					}}
					className={`overflow-visible mobile:space-x-[0.15rem] flex flex-col mobile:flex-row w-full h-fit items-center transform fixed lg:hidden bg-dark/90 duration-[600ms] ease-in-out transition-all`}>
					{navLinks.map((link, index) => (
						<AnchorLink
							key={'#' + link.hash}
							to={'/#' + link.hash}
							title={link.title}
							onAnchorLinkClick={() => {
								setActiveHash(link.hash);
								setBurgerNavShown(false);
							}}
							className={`bg-dark dark:bg-darkAccent border-b-2 border-light/10 w-full py-5 text-light text-sm flex px-4 justify-center items-center text-center ${
								isHashActive(link.hash) ? 'border-b-2 border-b-primary hover:border-b-primary' : ''
							} `}>
							<span className={`text-center sans xbold text-nowrap`}>
								{link.title.toUpperCase()}
							</span>
						</AnchorLink>
					))}

					{currentPath.includes('/resources') ? (
						<NavDropdownItem
							items={resourcesDropdown}
							title='Resources'
							hash={''}
							isHashActive={isHashActive}
							isBurgerNavShown={isBurgerNavShown}
							setActiveHash={setActiveHash}
							hasScrolled={hasScrolled}
						/>
					) : (
						<NavDropdownItem
							items={resourcesDropdown}
							title='Resources'
							hash={'/#resources'}
							isHashActive={isHashActive}
							isBurgerNavShown={isBurgerNavShown}
							setActiveHash={setActiveHash}
							hasScrolled={hasScrolled}
						/>
					)}
				</div>
			</nav>
		</>
	);
}
