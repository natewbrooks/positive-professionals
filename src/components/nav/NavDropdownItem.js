import React, { useState } from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

export default function NavDropdownItem({ title, items }) {
	const [isOpen, setIsOpen] = useState(false);

	const toggleDropdown = (bool = isOpen) => {
		setIsOpen(bool);
	};

	return (
		<div className='relative' onMouseEnter={() => toggleDropdown(true)}>
			<AnchorLink
				to={'#services'}
				className='group w-full h-full sans text-dark text-md px-2 py-5 hover:bg-dark/10 flex items-center'>
				{title}
				<MdOutlineKeyboardArrowDown
					className={`relative left-1 top-0 ${
						isOpen ? 'rotate-0' : 'rotate-180'
					}  transition-all duration-300`}
				/>
			</AnchorLink>
			{isOpen && (
				<div
					onMouseEnter={() => toggleDropdown(true)}
					onMouseLeave={() => toggleDropdown(false)}
					className='flex flex-col absolute bg-light border-x-2 border-t-2 border-dark/10 mt-1 rounded-md'>
					{items.map(({ label, href }) => (
						<AnchorLink
							key={href}
							to={href}
							title={label}
							className='text-center px-4 py-2 text-sm text-dark sans border-b-2 hover:bg-dark/10 hover:border-four'>
							{label}
						</AnchorLink>
					))}
				</div>
			)}
		</div>
	);
}
