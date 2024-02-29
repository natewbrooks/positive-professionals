import React from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import SeeMore from '../pieces/SeeMore';
import newEmail from '../../img/first-steps/new-email.png';
import { BsMailbox2Flag, BsCalendar2WeekFill } from 'react-icons/bs';
import { IoChatbubbles } from 'react-icons/io5';

export default function MissionStatementSection({ data }) {
	return (
		<section
			id='missionStatement'
			className='w-full h-full'>
			<div className='flex flex-col -space-y-1 mb-4 items-center text-center justify-center text-dark dark:text-light/70'>
				<span className='w-[280px] mobile:w-full sans text-sm leading-none'>
					WHAT WE WANT TO ACHIEVE
				</span>
				{/* <span className='serif null:text-xxl dark:text-light/80 leading-none pb-4'>
					Our mission
				</span> */}
			</div>

			<div className='flex flex-col justify-center items-center text-center'>
				<span className='sans null:text-xl md:text-xxl w-full text-dark dark:text-light/70'>
					Our <span className='xbold dark:text-light/80'>mission</span> is to cultivate a generation
					of authentic, resilient leaders who are equipped to navigate life's complexities,
					inspiring a ripple effect of positive change in communities and organizations worldwide.
				</span>
			</div>
		</section>
	);
}
