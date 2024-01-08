import React from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

export default function SeeMore({ text = 'See more', colorClass = 'text-four' }) {
	return (
		<div className='flex w-full justify-end items-center mt-4'>
			<div className='group hover:cursor-pointer relative flex items-center select-none'>
				<span className={`${colorClass} sans group-hover:opacity-50 `}>{text}</span>
				<MdOutlineKeyboardArrowRight
					size={16}
					className={`${colorClass} absolute right-0 opacity-0 translate-x-2 group-hover:translate-x-4 group-hover:opacity-50 transition-all delay-75 duration-300`}
				/>
			</div>
		</div>
	);
}