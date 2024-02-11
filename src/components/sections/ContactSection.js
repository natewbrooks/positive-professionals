import React, { useState } from 'react';
import UpcomingWebinars from '../webinar/UpcomingWebinars';

export default function ContactSection({ content }) {
	const webinars = [
		{
			date: 'JAN 8, 2024 @ 12:30 PM EST',
			title: 'Learning About Our Infinite Universe',
			description: 'Exploring possibilities surrounding how we ended up here.',
		},
		{
			date: 'JAN 15, 2024 @ 1:00 PM EST',
			title: 'The Secrets of Effective Leadership',
			description: 'Discover key strategies to improve your leadership skills.',
		},
		{
			date: 'JAN 22, 2024 @ 2:00 PM EST',
			title: 'Innovations in Technology',
			description: 'A look at the latest technological advancements and their impact.',
		},
		// Add more webinar objects as needed
	];

	return (
		<section
			id='contact'
			className='overflow-hidden relative w-full h-full py-12 bg-lightAccent dark:bg-darkAccent xl:space-y-0 xl:justify-evenly flex flex-col items-center xl:flex-row'>
			<div className='border-b-2 xl:border-b-0 xl:border-r-2 pb-10 xl:pb-0 xl:pr-20 border-dark/10 dark:border-light/10 flex flex-col justify-center items-center w-full xl:w-1/2 h-full space-y-2'>
				<div className='flex flex-col items-center text-center justify-center text-dark dark:text-light/70 '>
					<span
						className={`null:text-lg xs:text-[24px] mobile:text-xl md:text-xxl text-nowrap serif`}>
						Start your journey to success
					</span>
					<span className={`sans null:text-sm sm:text-md null:w-[240px] sm:w-[320px] xl:w-[370px]`}>
						Interested in working with us? Fill in your information and we will reach out to
						schedule a free consultation!
					</span>
				</div>
				<form className='flex flex-col bg-transparent p-4 rounded-md justify-center items-center space-y-8'>
					<div className='flex flex-col space-y-2'>
						<div className='flex flex-col'>
							<span className='sans text-sm text-dark dark:text-light/70'>
								<span className='text-four'>* </span>Name
							</span>
							<input
								type='text'
								aria-label='Name Input'
								className='select-none bg-dark/10 dark:bg-light/10 rounded-md text-dark dark:text-light/70 placeholder:text-dark py-1 px-2 sans'></input>
						</div>
						<div className='flex flex-col'>
							<span className='sans text-sm text-dark dark:text-light/70'>
								<span className='text-four'>* </span>Email
							</span>
							<input
								type='email'
								aria-label='Email Input'
								className='select-none bg-dark/10 dark:bg-light/10 rounded-md text-dark dark:text-light/70 placeholder:text-dark py-1 px-2 sans'></input>
						</div>
						<div className='flex flex-col'>
							<span className='sans text-sm text-dark dark:text-light/70'>
								<span className='text-four'>* </span>Phone Number
							</span>
							<input
								type='tel'
								aria-label='Phone Number Input'
								className='select-none bg-dark/10 dark:bg-light/10 rounded-md text-dark dark:text-light/70 placeholder:text-dark py-1 px-2 sans'></input>
						</div>
					</div>
					<div className='null:text-md sm:text-lg md:hover:opacity-50 active:scale-95 cursor-pointer xbold text-center select-none bg-dark text-light dark:bg-light/70 dark:text-darkAccent p-1 items-center flex justify-center sans w-[50%] rounded-md'>
						SUBMIT
					</div>
				</form>
			</div>
			<UpcomingWebinars webinars={webinars} />
		</section>
	);
}
