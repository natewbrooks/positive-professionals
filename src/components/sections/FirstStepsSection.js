import React from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import SeeMore from '../pieces/SeeMore';

export default function FirstStepsSection({ data }) {
	return (
		<section
			id='firstSteps'
			className='w-full h-full'>
			<div className='flex flex-col -space-y-1 mb-8 items-center text-center justify-center'>
				<span className='serif text-xxl'>{data.header}</span>
				<span className='sans text-md'>{data.subtext}</span>
			</div>

			<div className='flex flex-col space-y-12 md:space-y-0 md:flex-row md:space-x-0 lg:space-x-8 justify-center items-center'>
				{data.steps.map((step, index) => (
					<div className='flex flex-row md:space-x-4 lg:space-x-8 items-center'>
						<div className='flex flex-col space-y-4 items-center justify-center'>
							<div className='bg-dark/10 rounded-full p-12'></div>
							<div className='flex flex-col items-center justify-center text-center'>
								<span className='sans text-lg md:text-md xbold'>{step.name}</span>
								<span className='sans text-md md:text-sm w-[240px] xl:w-[400px] text-center'>
									{step.explanation}
								</span>
							</div>
						</div>
						{index !== data.steps.length - 1 && (
							<div className='hidden md:block'>
								<MdOutlineKeyboardArrowRight size={32} />
							</div>
						)}
					</div>
				))}
			</div>
		</section>
	);
}
