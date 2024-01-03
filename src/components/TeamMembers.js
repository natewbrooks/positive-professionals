import * as React from 'react';
import PropTypes from 'prop-types';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import { FaUser } from 'react-icons/fa';

export default function TeamMembers({ gridItems }) {
	return (
		<div className='w-full h-full flex justify-center my-12'>
			<div className='grid grid-cols-2 gap-y-10 gap-x-10 w-fit h-fit'>
				{gridItems.map((item) => (
					<div className='w-full h-full group hover:select-none hover:cursor-pointer'>
						<div
							className={`relative bg-dark/10 group-hover:bg-primary/50 flex items-center py-12 px-20 rounded-md`}>
							<FaUser size={180} className='group-hover:opacity-50' />
							{/* <span className='hidden group-hover:block absolute bottom-0 right-2 sans text-xl text-light font-extrabold'>
								Learn More
							</span> */}
						</div>

						<div className='flex flex-col text-start py-1'>
							<span className='serif text-lg'>Liz Brooks</span>
							<span className='sans text-sm'>Executive Leadership Specialist</span>
						</div>
						<p>{item.text}</p>
					</div>
				))}
			</div>
		</div>
	);
}
