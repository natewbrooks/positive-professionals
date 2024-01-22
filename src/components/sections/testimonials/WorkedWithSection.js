import React from 'react';
import { FaUser } from 'react-icons/fa';

export default function WorkedWithSection({ content }) {
	return (
		<div
			id='workedWith'
			className='flex flex-col space-y-4'>
			<div className='flex flex-col leading-tight text-end'>
				<span className='text-dark dark:text-light/60 sans text-sm'>WHO WE'VE WORKED WITH</span>
			</div>
			<div className='flex justify-center w-full h-full p-4 rounded-md'>
				<div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 justify-items-center gap-10 w-full'>
					<FaUser size={100} />
					<FaUser size={100} />
					<FaUser size={100} />
					<FaUser size={100} />
					<FaUser size={100} />
					<FaUser size={100} />
				</div>
			</div>
		</div>
	);
}
