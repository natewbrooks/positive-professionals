import React from 'react';
import { FaUser } from 'react-icons/fa';

export default function TestimonialItem({ testimonial }) {
	return (
		<div className='flex flex-col'>
			<div
				className={`relative flex flex-col -space-y-1 bg-dark/10 w-fit border-l-4 p-4 rounded-r-md ${testimonial.borderColorClass}`}>
				<span className='sans text-md'>{testimonial.quote}</span>
			</div>
			<div className='flex items-center space-x-2 py-2'>
				<FaUser size={24} />
				<div className='flex flex-col'>
					<span className='sans text-md'>{testimonial.name}</span>
					<span className='sans text-sm '>{testimonial.workplace}</span>
				</div>
			</div>
		</div>
	);
}
