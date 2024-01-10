import React, { forwardRef } from 'react';
import { FaUser } from 'react-icons/fa';

const TestimonialItem = forwardRef(({ id, testimonial, style }, ref) => {
	return (
		<div
			ref={ref}
			id={'testimonial' + id}
			className='flex flex-col w-fit h-full'>
			<div
				style={style}
				className={`rounded-r-md rounded-l-sm h-full justify-center text-start relative flex flex-col -space-y-1 bg-dark/10 border-l-4 p-4 ${testimonial.borderColorClass}`}>
				<span className='sans text-md'>{testimonial.quote}</span>
			</div>
			<div className='h-fit flex items-center space-x-2 py-2'>
				<FaUser size={24} />
				<div className='flex flex-col'>
					<span className='sans text-md text-nowrap'>{testimonial.name}</span>
					<span className='sans text-sm '>{testimonial.workplace}</span>
				</div>
			</div>
		</div>
	);
});

export default TestimonialItem;
