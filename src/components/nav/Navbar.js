import React, { useState, useEffect, useLayoutEffect, useCallback } from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import SigninButton from '../sign in/SigninButton';
import NavDropdownItem from './NavDropdownItem';
import { useLocation } from '@reach/router';
import logo from '../../../static/img/logo/pp-logo-bg.svg';
import { useModal } from '../../contexts/ModalContext';
import { FaMoon, FaSun } from 'react-icons/fa';

export default function Navbar() {
	const location = useLocation();
	const { currentModal } = useModal();

	const [darkModeActive, setDarkModeActive] = useState(false);
	const [activeHash, setActiveHash] = useState('');
	const [navHeight, setNavHeight] = useState(0);
	const [isBurgerNavShown, setBurgerNavShown] = useState(false);
	const [hasScrolled, setHasScrolled] = useState(false);

	// Reacting to currentModal change to toggle Navbar visibility
	const isNavbarVisible = !currentModal;

	useEffect(() => {
		if (currentModal) {
			setBurgerNavShown(false);
		}
	}, [currentModal]);

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
		const handleScroll = () => setHasScrolled(window.scrollY > 200);
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	// Adjust navHeight based on the size of the navbar
	useEffect(() => {
		const updateNavHeight = () =>
			setNavHeight(document.getElementById('navMenu')?.offsetHeight || 0);
		window.addEventListener('resize', updateNavHeight);
		updateNavHeight(); // Call on mount to set initial value
		return () => window.removeEventListener('resize', updateNavHeight);
	}, []);

	// Monitor location changes and update currentPath state
	useEffect(() => {
		setActiveHash(location.hash);
	}, [location]);

	// Intersection Observer to track active section
	useEffect(() => {
		const observerCallback = (entries, observer) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) setActiveHash(entry.target.id);
			});
		};

		const observerOptions = { rootMargin: '0px', threshold: 0.5 };
		const observer = new IntersectionObserver(observerCallback, observerOptions);
		const sections = document.querySelectorAll('section');
		sections.forEach((section) => observer.observe(section));

		return () => observer.disconnect();
	}, []);

	function isHashActive(hash) {
		return activeHash === hash;
	}

	const resourcesDropdown = [
		{ label: 'Recent', href: '/resources/' },
		{ label: 'Blog', href: '/resources/blog/' },
		{ label: 'Videos', href: '/resources/videos/' },
	];

	const navLinks = [
		{ title: 'Team', hash: 'team', colorClass: 'primary' },
		{ title: 'Services', hash: 'services', colorClass: 'four' },
		{ title: 'Testimonials', hash: 'testimonials', colorClass: 'tertiary' },
	];

	useLayoutEffect(() => {
		setNavHeight(document.getElementById('navMenu').offsetHeight);
	}, [navHeight]);

	return (
		<>
			<nav
				className={`transform transition-all duration-300 ease-in-out fixed bg-light dark:bg-dark w-full z-30 drop-shadow-md overflow-visible`}
				role='navigation'
				aria-label='main-navigation'>
				<div
					id='navbar'
					className='flex flex-col -space-y-1'>
					<AnchorLink
						to={'/#contact'}
						title='Contact section link'
						className={`flex w-full h-fit justify-center items-center translate-y-[-2px] py-[.45rem] bg-four`}>
						<div className='flex flex-col items-center cursor-pointer group md:hover:opacity-50 md:active:scale-95 w-fit'>
							{/* <div
								style={{
									maxHeight: hasScrolled ? '0px' : '20px',
									transform: hasScrolled ? 'translateY(-4rem)' : 'translateY(0px)',
									paddingBottom: hasScrolled ? '0px' : '4px',
								}}
								className={`transform transition-all duration-500 ease-in-out flex justify-center items-end space-x-2`}>
								<BsEnvelopeFill
									size={14}
									className='select-none text-light dark:text-dark'
								/>
								<FaLongArrowAltRight
									size={16}
									className='select-none text-light dark:text-dark'
								/>
								<BsMailbox2Flag
									size={15}
									className='select-none text-light dark:text-dark'
								/>
							</div> */}
							<span className={`leading-snug sans text-xs text-light dark:text-dark xbold`}>
								READY TO SCHEDULE?{' '}
								<span
									className={`ml-1 px-1 leading-none bg-light dark:bg-dark text-four text-xs rounded-sm`}>
									{' '}
									CONTACT US.
								</span>
							</span>
						</div>
					</AnchorLink>
					<div
						id='navMenu'
						className={`relative flex py-0 md:px-0 lg:px-10 xl:px-40 xxl:px-80 bg-light dark:bg-dark items-center w-full h-full null:justify-around lg:justify-center`}>
						<AnchorLink
							to='/'
							onAnchorLinkClick={() => window.scrollTo(0, 0)}
							className='lg:absolute null:translate-x-0 lg:translate-x-[8rem] xl:translate-x-[14rem] xxl:translate-x-[40rem] left-0 overflow-hidden w-fit h-fit null:py-2 lg:py-0'
							title={'Home'}>
							<div className='flex flex-col justify-center w-full h-full items-center'>
								<img
									src={logo}
									alt='positive professionals logo'
									className=' aspect-auto null:w-[40px] null:h-[40px] mobile:w-[42px] mobile:h-[42px] '
								/>
								<div
									style={{
										maxHeight: hasScrolled ? '0px' : '30px',
									}}
									className={`${
										hasScrolled
											? 'null:-translate-x-20 sm:translate-y-10 sm:translate-x-0 null:max-w-[0px] sm:max-w-[100px]'
											: 'pt-[0.1rem] max-w-[100px]'
									} relative transition-all null:duration-[800ms] sm:duration-[600ms] null:ease-in-out sm:ease-out flex text-xs text-dark dark:text-light/60 flex-col text-center w-fit leading-none`}>
									<span className='sans xbold'>POSITIVE</span>
									<span className='sans'>PROFESSIONALS</span>
								</div>
							</div>
						</AnchorLink>
						<div className='flex h-full space-x-4'>
							{navLinks.map((link) => (
								<AnchorLink
									key={'#' + link.hash}
									to={'/#' + link.hash}
									title={`Go to ${link.title}`}
									onAnchorLinkClick={() => setActiveHash(link.hash)}
									className={`xbold w-full h-full hidden lg:block sans transition-all duration-[300ms] text-dark dark:text-light/60 text-sm px-2 ${
										hasScrolled ? 'null:py-4' : 'null:py-7'
									} border-b-[3px]  text-nowrap ${
										isHashActive(link.hash)
											? ' border-four hover:border-four'
											: 'border-transparent hover:border-four/50'
									}`}>
									{link.title.toUpperCase()}
								</AnchorLink>
							))}
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
						</div>
						<div className='lg:absolute right-0 py-0 null:-translate-x-0 lg:-translate-x-[8rem] xl:-translate-x-[14rem] xxl:-translate-x-[40rem] flex items-center w-fit space-x-4'>
							<div className='scale-[80%] flex space-x-2 items-center justify-center'>
								<button
									aria-label='Hamburger Menu Button'
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
								size={20}
								className='select-none dark:hidden text-dark cursor-pointer md:hover:opacity-50 active:scale-95'
							/>
							<FaMoon
								onClick={toggleDarkMode}
								size={16}
								className='select-none hidden dark:block text-light/70 cursor-pointer md:hover:opacity-50 active:scale-95'
							/>
							{/* <SigninButton hasScrolled={hasScrolled} /> */}
						</div>
					</div>
				</div>
				{/* MOBILE */}
				<div
					style={{
						transform: isBurgerNavShown ? `translateY(0px)` : `translateY(-100%)`,
					}}
					className={`-z-20 overflow-visible mobile:space-x-[0.15rem] flex flex-col mobile:flex-row w-full h-fit items-center transform fixed lg:hidden bg-darkAccent duration-[600ms] ease-in-out transition-all`}>
					{navLinks.map((link, index) => (
						<AnchorLink
							key={'#' + link.hash}
							to={'/#' + link.hash}
							title={link.title}
							onAnchorLinkClick={() => {
								setActiveHash(link.hash);
								setBurgerNavShown(false);
							}}
							className={`bg-dark border-b-[3px]  border-darkAccent w-full py-4 text-light text-xs flex px-4 justify-center items-center text-center ${
								isHashActive(link.hash)
									? 'border-b-[3px]  border-b-primary hover:border-b-primary'
									: ''
							} `}>
							<span className={`text-center sans xbold text-nowrap`}>
								{link.title.toUpperCase()}
							</span>
						</AnchorLink>
					))}

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
			</nav>
		</>
	);
}
