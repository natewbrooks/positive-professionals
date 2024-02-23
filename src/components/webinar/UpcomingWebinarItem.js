import React, { useState } from 'react';
import { FaCalendar } from 'react-icons/fa';

export default function UpcomingWebinarItem({ webinar }) {
	return (
		<div className='flex flex-col space-y-4 bg-light/10 p-4 rounded-md'>
			<div className='w-full flex justify-between'>
				<FaCalendar
					size={14}
					className='text-light dark:text-light/70'
				/>
				<span className='sans xbold text-sm text-light dark:text-light/50'>{webinar.date}</span>
			</div>
			<div className='h-full w-full justify-between flex flex-col text-center space-y-4 text-dark dark:text-light/70'>
				<span className='bg-light/10 p-4 rounded-md sans text-lg xbold text-lightAccent'>
					{webinar.title}
				</span>
				<span className=' text-center sans text-sm max-w-[600px] text-light dark:text-light/80'>
					{webinar.description}
				</span>
			</div>
		</div>
	);
}
