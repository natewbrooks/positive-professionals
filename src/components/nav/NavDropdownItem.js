import React, { useState } from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { useEffect } from 'react';
import { useModal } from '../../contexts/ModalContext';

export default function NavDropdownItem({
	index,
	items,
	title,
	hash,
	isHashActive,
	isBurgerNavShown,
	setBurgerNavShown,
	setActiveHash,
	hasScrolled,
}) {
	const [isOpen, setIsOpen] = useState(false);
	const { currentModal } = useModal();

	useEffect(() => {
		if (currentModal || !isBurgerNavShown) {
			setIsOpen(false);
		}
	}, [currentModal, isBurgerNavShown]);

	const toggleDropdown = (bool) => {
		setIsOpen(bool);
	};

	return (
		<>
			<div className='hidden lg:block w-full'>
				<div
					onClick={() => toggleDropdown(!isOpen)}
					className={`xbold cursor-pointer w-full h-full hidden lg:flex items-center sans transition-all duration-[300ms] text-dark dark:text-light/60 text-sm px-2  ${
						hasScrolled ? 'null:py-4' : 'null:py-7'
					}  border-b-[3px]  text-nowrap ${
						isHashActive(hash) ? ' border-four hover:border-four' : ' border-transparent'
					}`}>
					{title.toUpperCase()}
					<MdOutlineKeyboardArrowDown
						className={`scale-[120%] relative left-1 top-0 ${
							isOpen ? 'rotate-0' : 'rotate-180'
						}  transition-transform duration-300`}
					/>
				</div>
				<div
					className={`-z-40 flex space-x-4 justify-center items-center transition-all duration-300 w-full absolute bottom-1 left-0 ${
						isOpen ? 'translate-y-[105%]' : 'translate-y-0'
					} bg-dark dark:bg-darkAccent rounded-b-md `}>
					{items.map(({ label, href }, index) => (
						<AnchorLink
							key={index}
							to={href}
							title={`Navigate to ${label}`}
							onAnchorLinkClick={() => {
								setActiveHash('#' + label.toLowerCase());
								toggleDropdown(false);
							}}
							className='sans xbold p-4 text-xs text-light dark:text-light/70 flex justify-center items-center border-b-[3px]  border-dark dark:border-darkAccent hover:md:text-light/50 dark:md:hover:text-light/40 hover:border-secondary dark:hover:border-secondary'>
							{label.toLowerCase()}
						</AnchorLink>
					))}
				</div>
			</div>

			{/* MOBILE MENU */}

			<div
				onClick={() => toggleDropdown(!isOpen)}
				key={'#' + hash}
				title={title}
				className={`lg:hidden relative bg-dark border-b-[3px]  p-4 text-light border-light/10 text-xs flex w-full justify-center items-center text-center ${
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
					} bg-darkAccent -z-50 rounded-b-md transform transition-transform duration-[600ms]`}>
					{items.map(({ label, href }, index) => (
						<AnchorLink
							key={index}
							to={href}
							title={`Navigate to ${label}`}
							onAnchorLinkClick={() => {
								setActiveHash('#' + label.toLowerCase());
								toggleDropdown(false);
							}}
							className='sans xbold p-4 text-xs text-light flex justify-center items-center border-b-[3px]  border-light/10 hover:border-four'>
							{label.toUpperCase()}
						</AnchorLink>
					))}
				</div>
			</div>
		</>
	);
}
