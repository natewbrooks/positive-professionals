import React, { useState, useRef } from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { useEffect } from 'react';

export default function NavDropdownItem({
	index,
	items,
	title,
	hash,
	isHashActive,
	isBurgerNavShown,
	setActiveHash,
	hasScrolled,
}) {
	const [isOpen, setIsOpen] = useState(false);

	const closeTimer = useRef(null);

	const startCloseTimer = () => {
		closeTimer.current = setTimeout(() => {
			setIsOpen(false);
		}, 3000);
	};

	const stopCloseTimer = () => {
		clearTimeout(closeTimer.current);
	};

	const toggleDropdown = (bool) => {
		setIsOpen(bool);
		if (bool) {
			stopCloseTimer();
		} else {
			startCloseTimer();
		}

		console.log(bool);
	};

	return (
		<>
			<div
				// onMouseEnter={stopCloseTimer}
				// onMouseLeave={startCloseTimer}
				className='hidden lg:block w-full'>
				<div
					onClick={() => toggleDropdown(!isOpen)}
					className={`cursor-pointer w-full h-full hidden lg:flex items-center sans transition-all duration-[300ms] text-dark dark:text-light/60 text-md px-2  ${
						hasScrolled ? 'py-5' : 'py-8'
					}  border-b-2 text-nowrap ${
						isHashActive(hash) ? ' border-four hover:border-four' : ' border-transparent'
					}`}>
					{title}
					<MdOutlineKeyboardArrowDown
						className={`relative left-1 top-0 ${
							isOpen ? 'rotate-0' : 'rotate-180'
						}  transition-all duration-300`}
					/>
				</div>
				<div
					// onMouseEnter={stopCloseTimer}
					// onMouseLeave={() => toggleDropdown(false)}
					className={`-z-40 flex space-x-4 justify-center transition-all duration-300 w-full absolute bottom-0 left-0 ${
						isOpen ? 'translate-y-full' : 'translate-y-0'
					} bg-dark dark:bg-darkAccent rounded-b-md `}>
					{items.map(({ label, href }, index) => (
						<AnchorLink
							key={index}
							to={href}
							title={label}
							onAnchorLinkClick={() => {
								setActiveHash('#' + label.toLowerCase());
								toggleDropdown(false);
							}}
							className='sans xbold p-4 text-sm text-light dark:text-light/70 flex justify-center items-center border-b-2  dark:border-light/70 hover:border-secondary'>
							{label.toUpperCase()}
						</AnchorLink>
					))}
				</div>
			</div>

			{/* MOBILE MENU */}

			<div
				onClick={() => toggleDropdown(!isOpen)}
				key={'#' + hash}
				title={title}
				className={`lg:hidden relative bg-dark dark:bg-darkAccent border-b-2 py-5 px-4 text-light border-light/10 text-sm flex w-full justify-center items-center text-center ${
					isHashActive(hash) ? 'border-b-primary hover:border-b-primary' : ''
				} `}>
				<span className={`text-center sans xbold text-nowrap`}>{title.toUpperCase()}</span>
				<MdOutlineKeyboardArrowDown
					className={`w-[18px] h-[18px] relative left-1 top-0 ${
						isOpen ? 'rotate-0' : 'rotate-180'
					}  transition-all duration-300`}
				/>
				{/* DROPDOWN MENU */}
				<div
					className={`w-full absolute bottom-0 ${
						isOpen ? 'translate-y-full' : ''
					} bg-dark/90 dark:bg-dark -z-50 rounded-b-md transform transition-transform duration-[600ms]`}>
					{items.map(({ label, href }, index) => (
						<AnchorLink
							key={index}
							to={href}
							title={label}
							onAnchorLinkClick={() => {
								setActiveHash('#' + label.toLowerCase());
								toggleDropdown(false);
							}}
							className='sans xbold p-4 text-sm text-light flex justify-center items-center border-b-2 border-light/10 hover:border-four'>
							{label.toUpperCase()}
						</AnchorLink>
					))}
				</div>
			</div>
		</>
	);
}
