import React, { forwardRef } from 'react';
import { FaUser } from 'react-icons/fa';

const TestimonialItem = forwardRef(({ id, testimonial, style, borderColor }, ref) => {
	// ${id === 0 ? testimonial.borderColorClass : 'border-red-400'}
	return (
		<div
			ref={ref}
			id={'testimonial' + id}
			className={`flex flex-col w-full h-full`}>
			<div
				style={style}
				className={`w-full active:cursor-grabbing hover:cursor-grab ${borderColor} select-none rounded-l-sm h-full justify-center text-start relative flex flex-col -space-y-1 bg-dark/10 border-l-4 p-4 `}>
				<span className='sans text-md'>{testimonial.quote}</span>
			</div>
			<div className='h-fit flex items-center space-x-2 py-2'>
				<FaUser size={24} />
				<div className='flex flex-col -space-y-1'>
					<span className='sans text-md text-nowrap xbold'>{testimonial.name}</span>
					<span className='sans text-sm '>{testimonial.company}</span>
				</div>
			</div>
		</div>
	);
});

export default TestimonialItem;
