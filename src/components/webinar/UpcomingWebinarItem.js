import React, { useState } from 'react';
import { FaCalendar } from 'react-icons/fa';

export default function UpcomingWebinarItem({ webinar }) {
	return (
		<div className='flex flex-col space-y-4 bg-dark/10 dark:bg-light/10 p-4 rounded-md'>
			<div className='w-full flex justify-between'>
				<FaCalendar
					size={14}
					className='text-dark dark:text-light/20'
				/>
				<span className='sans xbold text-sm text-dark dark:text-light/20'>{webinar.date}</span>
			</div>
			<div className='flex flex-col text-center space-y-1 text-dark dark:text-light/70'>
				<span className='sans text-md xbold'>{webinar.title}</span>
				<span className='sans text-sm w-[200px] sm:w-[300px]'>{webinar.description}</span>
			</div>
		</div>
	);
}
