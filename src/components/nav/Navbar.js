import React, { useState, useEffect, useLayoutEffect } from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import SigninButton from '../sign in/SigninButton';
import NavDropdownItem from './NavDropdownItem';
import { useLocation } from '@reach/router';
import puzzleTree from '../../img/pp.svg';

export default function Navbar() {
	const [activeHash, setActiveHash] = useState('');
	const [userData, setUserData] = useState();
	const [navHeight, setNavHeight] = useState(0);
	const [isBurgerNavShown, setBurgerNavShown] = useState(false);
	const [currentPath, setCurrentPath] = useState('');
	const location = useLocation();
	const [hasScrolled, setHasScrolled] = useState(false);

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
			window.removeEventListener('scroll', handleScroll);
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
						className={`transition-all duration-[600ms] ease-in-out flex null:py-4 lg:py-0 md:px-0 lg:px-10 xl:px-40 xxl:px-80 z-50 bg-light overflow-hidden items-center w-full h-full justify-around`}>
						<AnchorLink
							to='/'
							onAnchorLinkClick={() => window.scrollTo(0, 0)}
							className='px-4 '
							title={'Home'}>
							<div className='py-2 flex flex-col justify-center h-full items-center space-y-1'>
								<img
									src={puzzleTree}
									alt='logo'
									style={{ width: '48px', height: '48px' }}
								/>
								<div
									style={{
										transform: hasScrolled ? 'translateY(50px)' : 'translateY(0px)',
										maxHeight: hasScrolled ? '0px' : '300px',
									}}
									className={`relative transition-all duration-[500ms] ease-in-out flex text-sm text-dark flex-col text-center w-fit leading-none`}>
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
						<div className='flex h-full space-x-4 '>
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
							{currentPath.includes('/resources') ? (
								<div className='hidden lg:block'>
									<NavDropdownItem
										items={resourcesDropdown}
										title='Resources'
										hash={''}
										isHashActive={isHashActive}
										isBurgerNavShown={isBurgerNavShown}
										setActiveHash={setActiveHash}
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
										className={`transform transition-all duration-300 ease-in-out h-[4px] w-full bg-dark rounded-full ${
											isBurgerNavShown ? '-rotate-45 translate-y-2' : 'rotate-0'
										}`}></div>
									<div
										className={`transform transition-all duration-500 ease-in-out h-[4px] w-full bg-dark rounded-full ${
											isBurgerNavShown ? 'rotate-45' : 'rotate-0'
										}`}></div>
									<div
										className={`transform transition-all duration-300 ease-in-out h-[4px] w-full bg-dark rounded-full ${
											isBurgerNavShown ? '-rotate-45 -translate-y-2' : 'rotate-0'
										}`}></div>
								</button>
							</div>
							{/* <span className='text-dark/50'>|</span> */}
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
							className={`bg-dark border-b-2 border-light/10 w-full py-5 text-light text-sm flex px-4 justify-center items-center text-center ${
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
						/>
					) : (
						<NavDropdownItem
							items={resourcesDropdown}
							title='Resources'
							hash={'/#resources'}
							isHashActive={isHashActive}
							isBurgerNavShown={isBurgerNavShown}
							setActiveHash={setActiveHash}
						/>
					)}
				</div>
			</nav>
		</>
	);
}
