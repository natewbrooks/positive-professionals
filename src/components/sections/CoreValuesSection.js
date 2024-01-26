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
import bgTop from '../../img/bg-waves/blue-waves/blue-wave-top.svg';
import bgBottom from '../../img/bg-waves/blue-waves/blue-wave-bottom.svg';

const coreValues = [FaHammer, FaLightbulb, FaHandshake, FaTrophy, FaUsers, FaBalanceScale];
export default function CoreValuesSection({ data }) {
	return (
		<section
			id='values'
			className='w-full h-full relative bg-tertiary flex justify-center items-center text-dark'>
			<img
				src={bgTop}
				style={{ transform: 'translateY(-60%)' }}
				className='absolute w-full top-0 '></img>
			<img
				src={bgBottom}
				style={{ transform: 'translateY(70%)' }}
				className='absolute w-full bottom-0 '></img>
			<div className='flex flex-col space-y-4 items-center justify-center'>
				<div className='flex flex-col leading-tight w-full text-center'>
					<span className='sans text-sm'>{data.subtext.toUpperCase()}</span>
					<span className='serif text-xxl'>{data.header}</span>
				</div>

				<div className='null:w-full md:max-w-[80%] xl:max-w-[60%] flex flex-col space-y-4 justify-center items-center'>
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
