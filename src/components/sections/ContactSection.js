import React, { useState } from 'react';
import UpcomingWebinars from '../webinar/UpcomingWebinars';
import FirstStepsSection from './FirstStepsSection';
import { useModal } from '../../contexts/ModalContext';
import { FaUserPlus } from 'react-icons/fa';

export default function ContactSection({ content }) {
	const { openModal, closeModal, currentModal } = useModal();
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
		<div
			id='contact'
			className='w-full h-fit flex flex-col py-10 bg-lightAccent dark:bg-darkAccent'>
			{/* Container for the First Steps Section and Journey to Success, displayed as a row */}
			<div className='h-full w-full pb-10 flex flex-col xxl:flex-row justify-evenly items-center xxl:items-center space-y-10 xxl:space-y-0 xxl:space-x-10 px-20'>
				{/* First Steps Section */}
				<div className='flex flex-col justify-center items-center w-full xl:w-auto'>
					<FirstStepsSection
						data={{
							header: "Let's get started",
							subtext: 'Follow these simple steps to quickly get up and running.',
							steps: [
								{
									name: 'Set Up Your Account',
									explanation: 'Register a new account to join us for our free webinars!',
								},
								{
									name: 'Customize Your Profile',
									explanation:
										'Personalize your profile to make it stand out. Add a profile picture, write a short bio, and set your preferences.',
								},
								{
									name: 'Explore Features',
									explanation:
										'Discover the various features our platform offers. Learn how to make the most out of our tools and resources.',
								},
							],
						}}
					/>
				</div>
				{/* Journey to Success */}
				<div className='justify-start items-center h-fit bg-dark/10 rounded-md xxl:bg-dark/0 null:p-6 xxl:p-0 xxl:border-l-[3px] border-dark/10 dark:border-light/10 xxl:pl-10 flex null:flex-col md:flex-row w-fit null:space-y-8 md:space-x-8'>
					<div className='flex flex-col justify-center items-center w-full h-full'>
						<div className='h-full flex flex-col items-center text-center text-dark dark:text-light/70'>
							<span className='null:text-lg xs:text-[24px] mobile:text-xl md:text-xxl text-nowrap serif'>
								Start your journey to success
							</span>
							<span className='sans null:text-sm sm:text-md null:w-[240px] sm:w-[320px] xl:w-[370px]'>
								Interested in working with us? Fill in your information and we will reach out to
								schedule a free consultation!
							</span>
						</div>
						<form className='h-full flex flex-col bg-transparent pt-8 rounded-md justify-center items-center space-y-8'>
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

					<div className='flex items-center justify-center'>
						<span className='text-dark dark:text-light/70 serif text-xxl border-y-[3px] border-four'>
							OR
						</span>
					</div>
					<div className='flex flex-col space-y-8 items-center h-full'>
						<div className='null:pb-4 md:pb-0 flex flex-col items-center text-center justify-center text-dark dark:text-light/70'>
							<span className='null:text-lg xs:text-[24px] mobile:text-xl md:text-xxl text-nowrap serif'>
								Join our team
							</span>
							<span className='sans null:text-sm sm:text-md null:w-[240px] sm:w-[320px] xl:w-[370px]'>
								Eager to get involved? Register a new account to join us for our free webinars!
							</span>
						</div>
						<div className='p-8 rounded-full bg-dark/10 dark:bg-light/10'>
							<FaUserPlus
								size={100}
								className='text-dark dark:text-light/70'
							/>
						</div>
						<div
							onClick={() => openModal('register')}
							className='null:text-md sm:text-lg  bg-dark dark:bg-light/70 dark:text-darkAccent xbold select-none md:hover:opacity-50 active:scale-95 cursor-pointer text-light py-1 px-2 rounded-md w-fit sans'>
							REGISTER NOW
						</div>
					</div>
				</div>
			</div>
			{/* Upcoming Webinars Section */}
			<UpcomingWebinars webinars={webinars} />
		</div>
	);
}
