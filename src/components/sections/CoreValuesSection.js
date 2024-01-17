import React from 'react';
import {
	FaHammer,
	FaLightbulb,
	FaHandshake,
	FaTrophy,
	FaUsers,
	FaBalanceScale,
} from 'react-icons/fa';

import CoreValuesItem from '../core values/CoreValueItem';

const coreValues = [FaHammer, FaLightbulb, FaHandshake, FaTrophy, FaUsers, FaBalanceScale];
export default function CoreValuesSection({ data }) {
	return (
		<section
			id='values'
			className='w-full h-full flex justify-center items-center'>
			<div className='flex flex-col space-y-4'>
				<div className='flex flex-col leading-tight w-full text-center'>
					<span className='sans text-sm'>{data.subtext.toUpperCase()}</span>
					<span className='serif text-xxl'>{data.header}</span>
				</div>

				<div className='md:px-20 lg:px-40 2xl:px-80 flex flex-col space-y-4 justify-center items-center'>
					<div className='grid grid-cols-3 gap-2 justify-items-center max-w-[80%]  w-full justify-center'>
						{data.values.map((value, index) => (
							<CoreValuesItem
								key={index}
								text={value.name.toUpperCase()}
								Icon={coreValues[index]}
							/>
						))}
					</div>

					<p className='sans text-lg text-center flex'>{data.body}</p>
				</div>
			</div>
		</section>
	);
}
