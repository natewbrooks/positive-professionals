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
			className='relative w-full h-full py-12 bg-dark/10 space-y-10 lg:space-y-0 flex flex-col justify-center items-center lg:flex-row'>
			<div className='border-b-2 lg:border-b-0 lg:border-r-2 pb-10 lg:pb-0 border-dark/10  flex flex-col justify-center items-center w-full lg:w-[50%] h-full space-y-2'>
				<div className='flex flex-col items-center text-center justify-center text-dark'>
					<span
						className={`null:text-lg xs:text-[24px] mobile:text-xl md:text-xxl text-nowrap serif`}>
						Start your journey to success
					</span>
					<span className={`sans null:text-sm sm:text-md null:w-[240px] sm:w-[320px] lg:w-[370px]`}>
						Interested in working with us? Fill in your information and we will reach out to
						schedule a free consultation!
					</span>
				</div>
				<form className='flex flex-col bg-transparent p-4 rounded-md justify-center items-center space-y-8'>
					<div className='flex flex-col space-y-2'>
						<div className='flex flex-col'>
							<span className='sans text-sm text-dark'>
								<span className='text-four'>* </span>Name
							</span>
							<input
								type='text'
								className='select-none bg-dark/10 rounded-md text-dark placeholder:text-dark py-1 px-2 sans'></input>
						</div>
						<div className='flex flex-col'>
							<span className='sans text-sm text-dark'>
								<span className='text-four'>* </span>Email
							</span>
							<input
								type='email'
								className='select-none bg-dark/10 rounded-md text-dark placeholder:text-dark py-1 px-2 sans'></input>
						</div>
						<div className='flex flex-col'>
							<span className='sans text-sm text-dark'>
								<span className='text-four'>* </span>Phone Number
							</span>
							<input
								type='tel'
								className='select-none bg-dark/10 rounded-md text-dark placeholder:text-dark py-1 px-2 sans'></input>
						</div>
					</div>
					<div className='null:text-md sm:text-lg hover:opacity-50 active:scale-95 cursor-pointer xbold text-center select-none bg-dark text-light p-1 items-center flex justify-center sans w-[50%] rounded-md'>
						SUBMIT
					</div>
				</form>
			</div>
			<UpcomingWebinars webinars={webinars} />
			{/* <div className='flex flex-col space-y-8 w-full h-full justify-center items-center '>
				<span className='serif text-xxl text-dark w-[480px] text-center'>
					Register now to save your seat for our free weekly webinar.
				</span>
				<div className='bg-dark select-none hover:opacity-50 active:scale-95 cursor-pointer text-light p-2 rounded-md w-fit sans'>
					Create Account
				</div>
			</div> */}
		</section>
	);
}
