import React, { useState } from 'react';
import { FaCalendar } from 'react-icons/fa';

export default function UpcomingWebinarItem({ webinar }) {
	return (
		<div className='flex flex-col space-y-4 bg-dark/10 p-4 rounded-md'>
			<div className='w-full flex justify-between'>
				<FaCalendar size={14} className='text-dark' />
				<span className='sans xbold text-sm'>{webinar.date}</span>
			</div>
			<div className='flex flex-col text-center space-y-1'>
				<span className='sans text-md xbold'>{webinar.title}</span>
				<span className='sans text-sm w-[300px]'>{webinar.description}</span>
			</div>
		</div>
	);
}
