import React from 'react';
import { FaUser } from 'react-icons/fa';

export default function TestimonialItem({ quote, name, workplace, borderColorClass }) {
	return (
		<div className='flex flex-col'>
			<div
				className={`relative flex flex-col -space-y-1 bg-dark/10 w-fit border-l-4 p-4 rounded-r-md ${borderColorClass}`}>
				<span className='sans text-md'>{quote}</span>
			</div>
			<div className='flex items-center space-x-2 py-2'>
				<FaUser size={24} />
				<div className='flex flex-col'>
					<span className='serif text-md'>{name}</span>
					<span className='sans text-sm '>{workplace}</span>
				</div>
			</div>
		</div>
	);
}
