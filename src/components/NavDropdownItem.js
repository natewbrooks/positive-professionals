import React, { useState } from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

export default function NavDropdownItem({ title, items }) {
	const [isOpen, setIsOpen] = useState(false);

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className='relative'>
			<button
				onClick={toggleDropdown}
				className='group w-full h-full sans text-dark text-md p-4 hover:bg-dark/10 flex items-center'>
				{title}{' '}
				<MdOutlineKeyboardArrowDown
					className={`relative left-1 top-0 ${
						isOpen ? 'rotate-0' : 'rotate-180'
					}  transition-all duration-300`}
				/>
			</button>
			{isOpen && (
				<div className='flex flex-col absolute bg-light border-x-2 border-t-2 border-dark/10 mt-1 rounded-md'>
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
