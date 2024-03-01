import React from 'react';
import { FaCalendar } from 'react-icons/fa';

export default function UpcomingWebinarItem({ webinar }) {
	return (
		<div className='flex flex-col space-y-4 bg-light/10 p-4 rounded-md'>
			<div className='flex justify-between'>
				<FaCalendar
					size={14}
					className='text-light dark:text-light/70'
				/>
				<span className='sans xbold text-sm text-light dark:text-light/50'>{webinar.date}</span>
			</div>
			<div className='flex flex-col text-center space-y-4 text-dark dark:text-light/70'>
				<span className='null:w-[240px] md:w-[300px] lg:w-[320px] xxl:w-full bg-light/10 p-4 rounded-md sans text-lg xbold text-lightAccent'>
					{webinar.title}
				</span>
				<span className='sans text-sm text-light dark:text-light/80'>{webinar.description}</span>
			</div>
		</div>
	);
}
