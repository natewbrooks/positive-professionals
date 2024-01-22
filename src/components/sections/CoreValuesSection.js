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
import blueWavesBg from '../../img/bg-waves/blue-waves-bg.svg';

const coreValues = [FaHammer, FaLightbulb, FaHandshake, FaTrophy, FaUsers, FaBalanceScale];
export default function CoreValuesSection({ data }) {
	return (
		<section
			id='values'
			className='w-full h-full bg-tertiary relative flex justify-center items-center text-dark'>
			{/* <img
				src={blueWavesBg}
				className='absolute -z-10 h-[100vh]'></img> */}
			<div className='flex flex-col space-y-4 items-center justify-center'>
				<div className='flex flex-col leading-tight w-full text-center'>
					<span className='sans text-sm'>{data.subtext.toUpperCase()}</span>
					<span className='serif text-xxl'>{data.header}</span>
				</div>

				<div className='null:w-full md:max-w-[80%] md:px-20 lg:px-40 2xl:px-80 flex flex-col space-y-4 justify-center items-center'>
					<div className='w-full grid grid-cols-3 gap-2 justify-items-center justify-center'>
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
