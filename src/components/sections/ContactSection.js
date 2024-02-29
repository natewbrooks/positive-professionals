import React, { useState } from 'react';
import { useModal } from '../../contexts/ModalContext';
import { FaUserPlus } from 'react-icons/fa';
import waveTop from '../../img/bg-waves/contact-waves/wave-top.svg';

export default function ContactSection({ content }) {
	const { openModal, closeModal, currentModal } = useModal();

	return (
		<section
			id='contact'
			className='relative w-full h-fit flex flex-col mt-8 pb-10 bg-secondary'>
			{/* Container for the First Steps Section and Journey to Success, displayed as a row */}
			<div className='h-full w-full pb-10 flex flex-col xxl:flex-row justify-evenly items-center xxl:items-center space-y-10 xxl:space-y-0 xxl:space-x-10 px-20'>
				<div className='z-[1] absolute w-full h-full left-0'>
					<img
						src={waveTop}
						alt='Services wave top bg'
						style={{ transform: 'translateY(-80%)' }}
						className='absolute w-full h-fit top-0 '></img>
					<div className='absolute w-full h-full dark:bg-secondary bg-secondary z-0'></div>
				</div>

				{/* Journey to Success */}
				<div className='z-10 flex items-center null:flex-col md:flex-row space-y-14 md:space-y-0 justify-center w-full h-full'>
					<div className='flex flex-col justify-between items-center w-full h-full'>
						<div className='flex flex-col items-center text-center text-dark space-y-2'>
							<span className='null:w-[280px] sm:w-[400px] md:w-[400px] xxl:w-fit xxl:text-nowrap text-xxl sm:text-xxxl serif leading-none'>
								Start your journey to success
							</span>
							<span className='sans null:text-sm sm:text-md null:w-[240px] sm:w-[320px] xl:w-[300px] xxl:w-[420px]'>
								Interested in working with us? Fill in your information and we will reach out to
								schedule a free consultation!
							</span>
						</div>
						<form className='flex flex-col bg-transparent pt-6 rounded-md justify-center items-center space-y-8'>
							<div className='flex flex-col space-y-2'>
								<div className='flex flex-col'>
									<span className='sans text-sm text-dark xbold'>
										<span className='text-primary'>* </span>Name
									</span>
									<input
										type='text'
										aria-label='Name Input'
										className='select-none bg-dark rounded-md text-light placeholder:text-light py-1 px-2 sans'></input>
								</div>
								<div className='flex flex-col'>
									<span className='sans text-sm text-dark xbold'>
										<span className='text-primary'>* </span>Email
									</span>
									<input
										type='email'
										aria-label='Email Input'
										className='select-none bg-dark rounded-md text-light placeholder:text-light py-1 px-2 sans'></input>
								</div>
								<div className='flex flex-col'>
									<span className='sans text-sm text-dark xbold'>
										<span className='text-primary'>* </span>Phone Number
									</span>
									<input
										type='tel'
										aria-label='Phone Number Input'
										className='select-none bg-dark rounded-md text-light placeholder:text-light py-1 px-2 sans'></input>
								</div>
							</div>
							<button
								type='submit'
								onClick={(e) => e.preventDefault()}
								className='null:text-md sm:text-lg md:hover:opacity-50 active:scale-95 cursor-pointer xbold text-center select-none bg-[#aa89f5] text-dark p-1 items-center flex justify-center sans w-[50%] rounded-md'>
								SUBMIT
							</button>
						</form>
					</div>
					<div className='w-full h-full flex justify-center items-center'>
						<div className='null:border-y-[3px] null:border-light/30 xxl:border-none w-full text-center'>
							<span className='text-dark serif text-xxl xxl:border-y-[3px] border-light/30'>
								OR
							</span>
						</div>
					</div>
					<div className='flex flex-col space-y-8 justify-between items-center w-full h-full'>
						<div className='flex flex-col items-center text-center text-dark space-y-2'>
							<span className='null:w-[280px] sm:w-[400px] md:w-[400px] text-xxl sm:text-xxxl leading-none serif'>
								Join our team
							</span>
							<span className='sans null:text-sm sm:text-md null:w-[240px] sm:w-[320px] xl:w-[370px] xxl:w-[420px]'>
								Do you want to get involved? Register to save your seat for our free webinars and to
								book an appointment ahead!
							</span>
						</div>
						<div className='p-8 rounded-full bg-dark '>
							<FaUserPlus
								size={100}
								className='text-four '
							/>
						</div>
						<div
							onClick={() => openModal('register')}
							className='null:text-md sm:text-lg bg-[#aa89f5] text-dark xbold select-none md:hover:opacity-50 active:scale-95 cursor-pointer py-1 px-2 rounded-md w-fit sans'>
							REGISTER NOW
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
