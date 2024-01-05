import React from 'react';
import { HiCursorClick } from 'react-icons/hi';

export default function ServicesItem({ Icon, title, description, colorClass }) {
	return (
		<div className='group cursor-pointer select-none active:scale-95 flex flex-col space-y-2 text-center rounded-md'>
			<div className='z-50 relative w-full flex justify-center'>
				<div
					className={`group-hover:bg-dark bg-opacity-100 py-2 px-14 rounded-md ${colorClass} transition-all duration-300 relative top-5`}>
					<Icon size={40} className='text-light rounded-md' />
				</div>
			</div>
			<div className='relative group-hover:opacity-50 py-12 h-full flex flex-col items-center justify-center space-y-2 bg-dark/10 px-8 rounded-md'>
				<span className='serif text-xl'>{title}</span>
				<span className='sans text-md'>{description}</span>
				<HiCursorClick
					size={18}
					className={`hidden group-hover:block absolute top-1 right-1 text-dark/50 animate-pulse`}
				/>
			</div>
		</div>
	);
}
