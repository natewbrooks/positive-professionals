import React from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import SeeMore from '../pieces/SeeMore';
import newEmail from '../../img/first-steps/new-email.png';
import { BsMailbox2Flag, BsCalendar2WeekFill } from 'react-icons/bs';
import { IoChatbubbles } from 'react-icons/io5';

export default function FirstStepsSection({ data }) {
	const icons = [BsMailbox2Flag, IoChatbubbles, BsCalendar2WeekFill];

	return (
		<section
			id='firstSteps'
			className='w-full h-full'>
			<div className='flex flex-col -space-y-1 mb-8 items-center text-center justify-center text-dark dark:text-light/70'>
				<span className='serif text-xxxl dark:text-light/80 leading-none pb-4'>{data.header}</span>
				<span className='sans text-md'>{data.subtext}</span>
			</div>

			<div className='flex flex-col space-y-12 md:space-y-0 md:flex-row md:space-x-0 lg:space-x-8 justify-center items-center'>
				{data.steps.map((step, index) => {
					const IconComponent = icons[index];
					return (
						<div
							key={index}
							className='flex flex-row md:space-x-4 lg:space-x-8 items-center'>
							<div className='flex flex-col space-y-4 items-center justify-center text-dark dark:text-light/70'>
								<div className='bg-dark/10 dark:bg-light/10 rounded-full null:p-4 sm:p-6 lg:p-8'>
									{
										<IconComponent className='h-[36px] w-[36px] sm:w-[40px] sm:h-[40px] lg:w-[48px] lg:h-[48px]' />
									}
								</div>
								<div className='flex flex-col items-center justify-center text-center'>
									<span className='sans text-md xbold'>{step.name}</span>
									<span className='sans text-sm w-[240px] xl:w-[400px] text-center dark:text-light/50'>
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
					);
				})}
			</div>
		</section>
	);
}
