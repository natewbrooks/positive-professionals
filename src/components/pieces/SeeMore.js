import React from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

export default function SeeMore({ text = 'See more', colorClass = 'text-light/50', onClick }) {
	return (
		<div className='flex w-full justify-end items-center mt-4'>
			<div
				onClick={onClick}
				className='group cursor-pointer relative flex items-center select-none'>
				<span className={`${colorClass} sans group-md:hover:opacity-50 xbold text-md text-nowrap`}>
					{text}
				</span>
				<MdOutlineKeyboardArrowRight
					size={16}
					className={`text-light absolute right-0 opacity-0 translate-x-2 group-hover:translate-x-4 md:group-hover:opacity-50 transition-all delay-75 duration-300`}
				/>
			</div>
		</div>
	);
}
