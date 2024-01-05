import React from 'react';
import { FaUser } from 'react-icons/fa';

export default function WorkedWithSection({ content }) {
	return (
		<section id='workedWith' className='flex flex-col space-y-4'>
			<div className='flex flex-col -space-y-1 text-end'>
				<span className='sans text-sm'>WHO WE'VE WORKED WITH</span>
			</div>
			<div className='bg-dark/10 flex justify-center w-full h-full p-4 rounded-md'>
				<div className='grid grid-cols-5 justify-items-center gap-10 w-full'>
					<FaUser size={100} />
					<FaUser size={100} />
					<FaUser size={100} />
					<FaUser size={100} />
					<FaUser size={100} />
					<FaUser size={100} />
					<FaUser size={100} />
					<FaUser size={100} />
					<FaUser size={100} />
					<FaUser size={100} />
				</div>
			</div>
		</section>
	);
}
