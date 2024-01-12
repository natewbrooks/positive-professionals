import React, { useState, useRef } from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

export default function NavDropdownItem({
	index,
	items,
	title,
	hash,
	isHashActive,
	isBurgerNavShown,
	setActiveHash,
	setBurgerNavShown,
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
	};

	return (
		<>
			{!isBurgerNavShown && (
				<div
					onMouseEnter={stopCloseTimer}
					onMouseLeave={startCloseTimer}
					className='w-full relative'>
					<AnchorLink
						onAnchorLinkClick={() => toggleDropdown(true)}
						to={hash}
						className={`w-full h-full hidden lg:flex items-center sans  text-dark text-md px-2 py-5 border-b-2 text-nowrap ${
							isHashActive(hash)
								? ' border-four hover:border-four'
								: 'border-light hover:border-four/50'
						}`}>
						{title}
						<MdOutlineKeyboardArrowDown
							className={`relative left-1 top-0 ${
								isOpen ? 'rotate-0' : 'rotate-180'
							}  transition-all duration-300`}
						/>
					</AnchorLink>
					{isOpen && (
						<div
							onMouseLeave={() => toggleDropdown(false)}
							className='flex flex-col absolute bg-light border-x-2 border-t-2 border-dark/10 rounded-md'>
							{items.map(({ label, href }, index) => (
								<AnchorLink
									key={index}
									to={href}
									title={label}
									className='text-center px-4 py-2 text-sm text-dark sans border-b-2 hover:bg-dark/10 hover:border-four'>
									{label}
								</AnchorLink>
							))}
						</div>
					)}
				</div>
			)}

			{isBurgerNavShown && (
				<div
					onMouseEnter={stopCloseTimer}
					onMouseLeave={startCloseTimer}
					className='w-full relative'>
					<AnchorLink
						key={'#' + hash}
						to={hash}
						title={title}
						onAnchorLinkClick={() => {
							toggleDropdown(!isOpen);
						}}
						className={`px-4 z-50 flex flex-row items-center bg-dark border-b-2 hover:text-light/50  text-light text-sm border-light/10 ${
							index != 0 ? 'xs:border-l-2 ' : ''
						}  w-full h-full py-6 hover:bg-dark/20 justify-center items-center text-center ${
							isHashActive(hash) ? 'border-b-2 border-b-primary hover:border-b-primary' : ''
						} `}>
						<span className={`text-center sans xbold text-nowrap`}>{title.toUpperCase()}</span>
						<MdOutlineKeyboardArrowDown
							onClick={() => toggleDropdown(!isOpen)}
							className={`w-[18px] h-[18px] relative left-1 top-0 ${
								isOpen ? 'rotate-0' : 'rotate-180'
							}  transition-all duration-300`}
						/>
					</AnchorLink>
					<div
						onMouseEnter={stopCloseTimer}
						onMouseLeave={() => toggleDropdown(false)}
						className={`${
							isOpen ? 'translate-y-0' : '-translate-y-[200%]'
						} -z-10 transform transition-transform duration-300 flex flex-col w-full absolute bg-dark border-x-2 border-t-2 border-light/10 rounded-b-md`}>
						{items.map(({ label, href }, index) => (
							<AnchorLink
								key={index}
								to={href}
								title={label}
								onAnchorLinkClick={() => {
									setActiveHash(href);
									setBurgerNavShown(false);
									toggleDropdown(false);
								}}
								className='text-center sans xbold p-4 text-sm text-light sans border-b-2 border-light/10 hover:bg-dark/10 hover:border-four'>
								{label.toUpperCase()}
							</AnchorLink>
						))}
					</div>
				</div>
			)}
		</>
	);
}
