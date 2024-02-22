import React from 'react';
import { FaUser } from 'react-icons/fa';

export default function WorkedWithSection({ content }) {
	return (
		<div
			id='workedWith'
			className='flex flex-col space-y-4'>
			<div className='flex flex-col leading-snug text-end'>
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
		// <div
		// 	id='workedWith'
		// 	className='flex flex-col space-y-4 pb-2'>
		// 	<div className='flex flex-col leading-snug text-end'>
		// 		<span className='sans text-sm '>WHAT WE STRIVE TO DO</span>
		// 		<span className='serif text-xxl dark:text-light/80'>Our mission</span>
		// 	</div>
		// 	<span className='text-dark dark:text-light/60 z-10 sans text-lg leading-snug'>
		// 		At Positive Professionals, we envision a world where every individual, especially women in
		// 		transition, harnesses the power of personal and professional growth to reshape their
		// 		destinies. We are committed to changing the world one leader at a time, guiding them through
		// 		the intricate journey of overcoming imposter syndrome, advancing in their careers, and
		// 		harmoniously integrating family and career commitments. Our mission is to cultivate a
		// 		generation of authentic, resilient leaders who are equipped to navigate life's complexities,
		// 		inspiring a ripple effect of positive change in communities and organizations worldwide.
		// 	</span>
		// </div>
	);
}
