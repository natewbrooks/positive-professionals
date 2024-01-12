import React, { useState, useEffect, useLayoutEffect } from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { FaBars } from 'react-icons/fa';
import SigninButton from '../sign in/SigninButton';
import NavDropdownItem from './NavDropdownItem';

export default function Navbar() {
	const [activeHash, setActiveHash] = useState('');
	const [userData, setUserData] = useState();
	const [navHeight, setNavHeight] = useState(0);
	const [isBurgerNavShown, setBurgerNavShown] = useState(false);

	const isHashActive = (hash) => {
		return hash == activeHash;
	};

	const resourcesDropdown = [
		{ label: 'Blog', href: '/resources#blog' },
		{ label: 'Videos', href: '/resources#videos' },
		{ label: 'Webinars', href: '/resources#webinars' },
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

		// if (darkModeActive) {
		// 	document.documentElement.classList.add('dark');
		// } else {
		// 	document.documentElement.classList.remove('dark');
		// }

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
			observer.disconnect();
		};
	}, [navHeight, isBurgerNavShown]);

	return (
		<>
			<nav
				className='fixed bg-light dark:bg-darkAccent w-full z-50 drop-shadow-md overflow-visible'
				role='navigation'
				aria-label='main-navigation'>
				<div className='flex items-center'>
					<div
						id='navMenu'
						className={`flex null:py-4 lg:py-0 z-50 bg-light items-center w-full h-full justify-around`}>
						<AnchorLink
							to='/'
							className='px-4 '
							title={'Home'}>
							{/* <img src={logo} alt='Kaldi' style={{ width: '88px' }} /> */}
							<div className='relative flex'>
								<div className='z-40 bg-primary p-4 rotate-45'></div>
								<div className='z-20 absolute -left-2 top-0 bg-secondary p-4 rotate-45'></div>
								<div className='z-30 absolute -right-2 bg-tertiary p-4 rotate-45'></div>
								<div className='z-10 absolute -right-4 bg-four p-4 rotate-45'></div>
								<div className='absolute  -translate-y-[0.6px] -translate-x-2 z-50 drop-shadow-lg'>
									<span className='text-lg xbold text-nowrap  text-light'>+</span>
									<span className=' z-50 text-md xbold text-nowrap  text-light'>PRO</span>
								</div>
							</div>
						</AnchorLink>
						<div className='flex h-full space-x-8 '>
							{navLinks.map((link) => (
								<AnchorLink
									key={'#' + link.hash}
									to={'/#' + link.hash}
									title={link.title}
									onAnchorLinkClick={() => setActiveHash(link.hash)}
									className={`w-full h-full hidden lg:block sans  text-dark text-md px-2 py-5 border-b-2 text-nowrap ${
										isHashActive(link.hash)
											? ' border-four hover:border-four'
											: 'border-light hover:border-four/50'
									}`}>
									{link.title}
								</AnchorLink>
							))}
							<div className='hidden lg:block'>
								<NavDropdownItem
									items={resourcesDropdown}
									title='Resources'
									hash='#resources'
									isHashActive={isHashActive}
									isMobile={false}
								/>
							</div>
						</div>
						<div className='flex items-center w-fit space-x-4'>
							<div className='flex space-x-2 items-center justify-center'>
								<div className='select-none hidden lg:flex cursor-pointer hover:bg-opacity-50 group bg-hard-stop-gradient p-[0.25rem] rounded-md items-center'>
									<div className=' bg-light group-active:scale-95 sans px-1'>
										<span className='text-dark text-sm xbold  group-hover:text-opacity-50'>
											CONTACT US
										</span>
									</div>
								</div>
								<div
									onClick={() => {
										setBurgerNavShown(!isBurgerNavShown);
									}}
									className='flex lg:hidden select-none cursor-pointer hover:opacity-50 active:scale-95'>
									<FaBars
										size={24}
										className='text-dark'
									/>
								</div>
							</div>
							<span className='text-dark/50'>|</span>
							<SigninButton userData={userData} />
						</div>
					</div>
				</div>
				<div
					style={{
						transform: isBurgerNavShown ? `translateX(0px)` : `translateX(100%)`,
					}}
					className={`overflow-visible mobile:space-x-[0.15rem] flex flex-col mobile:flex-row w-full h-full items-center transform fixed lg:hidden bg-dark/90 duration-[600ms] ease-in-out transition-all`}>
					{navLinks.map((link, index) => (
						<AnchorLink
							key={'#' + link.hash}
							to={'/#' + link.hash}
							title={link.title}
							onAnchorLinkClick={() => {
								setActiveHash(link.hash);
							}}
							className={`bg-dark border-b-2 border-light/10 py-5 text-light text-sm flex px-4 w-full h-full justify-center items-center text-center ${
								isHashActive(link.hash) ? 'border-b-2 border-b-primary hover:border-b-primary' : ''
							} `}>
							<span className={`text-center sans xbold text-nowrap`}>
								{link.title.toUpperCase()}
							</span>
						</AnchorLink>
					))}
					<NavDropdownItem
						items={resourcesDropdown}
						title='Resources'
						hash='#resources'
						isHashActive={isHashActive}
						isBurgerNavShown={isBurgerNavShown}
						setActiveHash={setActiveHash}
					/>
				</div>
			</nav>
		</>
	);
}
