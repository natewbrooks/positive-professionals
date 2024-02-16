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
import waveTop from '../../img/bg-waves/core-value-waves/wave-top.svg';
import waveBottom from '../../img/bg-waves/core-value-waves/wave-bottom.svg';

const coreValues = [FaHammer, FaLightbulb, FaHandshake, FaTrophy, FaUsers, FaBalanceScale];
export default function CoreValuesSection({ data }) {
	return (
		<section
			id='values'
			className='w-full h-full relative flex justify-center items-center text-dark'>
			<div className='z-0 absolute w-full h-full left-0'>
				<img
					src={waveTop}
					alt='Core values wave top'
					style={{ transform: 'translateY(-80%)' }}
					className='absolute w-full top-0 -z-[10]'></img>
				<div className='absolute bg-secondary w-full h-full -z-[1]'></div>
				<img
					src={waveBottom}
					alt='Core values wave bottom'
					style={{ transform: 'translateY(85%)' }}
					className='absolute w-full bottom-0 -z-[10]'></img>
			</div>

			<div className='z-10 flex flex-col space-y-4 items-center justify-center null:py-8 md:py-4'>
				<div className='z-10 flex flex-col leading-tight w-full text-center'>
					<span className='sans text-sm'>{data.subtext.toUpperCase()}</span>
					<span className='serif text-xxl'>{data.header}</span>
				</div>

				<div className='null:w-full md:max-w-[80%] xl:max-w-[60%] flex flex-col space-y-4 justify-center items-center'>
					<div className='w-full grid grid-cols-3 gap-1 justify-items-center justify-center'>
						{data.values.map((value, index) => (
							<CoreValuesItem
								key={index}
								value={value}
								Icon={coreValues[index]}
								modalId={'coreValue' + index}
							/>
						))}
					</div>

					<p className='sans text-lg text-center flex'>{data.body}</p>
				</div>
			</div>
		</section>
	);
}
