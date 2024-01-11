import React from 'react';
import {
	FaHammer,
	FaLightbulb,
	FaHandshake,
	FaTrophy,
	FaUsers,
	FaBalanceScale,
} from 'react-icons/fa';

import CoreValuesItem from '../../core values/CoreValueItem';

const coreValues = [
	{
		text: 'Persistence',
		Icon: FaHammer,
	},
	{
		text: 'Innovation',
		Icon: FaLightbulb,
	},
	{
		text: 'Integrity',
		Icon: FaHandshake,
	},
	{
		text: 'Excellence',
		Icon: FaTrophy,
	},
	{
		text: 'Collaboration',
		Icon: FaUsers,
	},
	{
		text: 'Respect',
		Icon: FaBalanceScale,
	},
];

export default function CoreValuesSection() {
	return (
		<section
			id='values'
			className='w-full h-full flex justify-center items-center'>
			<div className='flex flex-col space-y-4'>
				<div className='flex flex-col -space-y-2 w-full text-center'>
					<span className='sans text-sm'>WHAT WE BELIEVE IN</span>
					<span className='serif text-xxl'>Our core values</span>
				</div>

				<div className='md:px-20 lg:px-40 2xl:px-80 flex flex-col space-y-4 justify-center items-center'>
					<div className='grid grid-cols-3 gap-2 justify-items-center  w-full justify-center'>
						{coreValues.map((value, index) => (
							<CoreValuesItem
								key={index}
								text={value.text}
								Icon={value.Icon}
							/>
						))}
					</div>

					<p className='sans text-lg text-center flex'>
						Mental fitness is our capacity to handle life’s greatest challenges with a positive
						mindset rather than getting stressed or upset. When it comes to physical fitness, we are
						unlikely to be able to climb a mountain if we have not strengthened our muscles and
						built our stamina in advance. Mental fitness is similar; if we want to overcome
						stressful situations and view life through a positive mindset, we need to learn and
						practice the skills that will enable us to do so. In other words, we need to build our
						mental fitness.
					</p>
				</div>
			</div>
		</section>
	);
}
