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
import bgTop from '../../img/bg-waves/blue-waves/blue-wave-top-2.svg';
import bgBottom from '../../img/bg-waves/blue-waves/blue-wave-bottom-2.svg';

const coreValues = [FaHammer, FaLightbulb, FaHandshake, FaTrophy, FaUsers, FaBalanceScale];
export default function CoreValuesSection({ data }) {
	return (
		<section
			id='values'
			className='w-full h-full relative flex justify-center items-center text-dark'>
			<div className='z-0 absolute w-full h-full left-0'>
				<img
					src={bgTop}
					alt='blue-wave-bg-top'
					style={{ transform: 'translateY(-80%)' }}
					className='absolute w-full top-0 -z-[10]'></img>
				<div className='absolute bg-secondary w-full h-full -z-[1]'></div>
				<img
					src={bgBottom}
					alt='blue-wave-bg-bottom'
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
								text={value.name.toUpperCase()}
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
