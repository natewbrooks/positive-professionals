import React from 'react';
import groupIcon from '../img/services/groupIcon.svg';
import oneononeIcon from '../img/services/oneononeIcon.svg';
import workshopIcon from '../img/services/workshopIcon.svg';

export default function ServicesSection({ content }) {
	return (
		<section id='services' className='w-full h-full my-20'>
			<div className='flex flex-col text-end my-4'>
				<span className='sans text-sm'>WHAT WE CAN DO FOR YOU</span>
				<span className='serif text-zl'>Our services</span>
			</div>
			<div className='grid grid-cols-3 gap-10 h-full'>
				<div className='flex flex-col space-y-2 text-center rounded-md'>
					<img src={oneononeIcon} alt='Workshops' className='bg-dark/10 p-4 rounded-md'></img>
					<div className='h-full flex flex-col items-center justify-center space-y-2 bg-dark/10 p-4 rounded-md'>
						<span className='serif text-lg'>Personal Sessions</span>
						<span className='sans text-sm'>
							Schedule a one-on-one intimate meeting catered to your needs.{' '}
						</span>
					</div>
				</div>
				<div className='flex flex-col h-full space-y-2 text-center rounded-md'>
					<img src={groupIcon} alt='Workshops' className='bg-dark/10 p-4 rounded-md'></img>
					<div className='h-full flex flex-col items-center justify-center space-y-2 bg-dark/10 p-4 rounded-md'>
						<span className='serif text-lg'>Group Sessions</span>
						<span className='sans text-sm'>
							Explore different avenues and engage with a group of people to stimulate your own
							personal growth.
						</span>
					</div>
				</div>
				<div className='flex flex-col h-full space-y-2 text-center rounded-md'>
					<img src={workshopIcon} alt='Workshops' className='bg-dark/10 p-4 rounded-md'></img>
					<div className='h-full flex flex-col items-center justify-center space-y-2 bg-dark/10 p-4 rounded-md'>
						<span className='serif text-lg'>In-person Workshops</span>
						<span className='sans text-sm'>
							Attend an in-person workshop to develop and find meaningful solutions among peers.
						</span>
					</div>
				</div>
			</div>

			<div className='w-full text-end my-4'>
				<span className='text-four sans text-md hover:cursor-pointer select-none'>
					Click a service to learn more!
				</span>
			</div>
		</section>
	);
}
