import React, { useState } from 'react';
import SeeMore from './SeeMore';
import { FaCalendar } from 'react-icons/fa';
import SigninModal from './SigninModal';

export default function ContactSection({ content }) {
	const [isModalOpen, setModalOpen] = useState(false);

	const openModal = () => setModalOpen(true);
	const closeModal = () => {
		setModalOpen(false);
	};

	return (
		<section
			id='contact'
			className='relative w-full h-full py-12 bg-dark/10 flex flex-col lg:flex-row'>
			<div className='border-r-2 border-dark/10  flex flex-col justify-center items-center w-[50%] h-full space-y-2'>
				<div className='flex flex-col items-center justify-center text-dark'>
					<span className={`text-xxl serif`}>Start your journey to success</span>
					<span className={`sans text-md w-[370px]`}>
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
					<div className='text-lg hover:opacity-50 active:scale-95 cursor-pointer xbold text-center select-none bg-dark text-light p-1 items-center flex justify-center sans w-[50%] rounded-md'>
						SUBMIT
					</div>
				</form>
			</div>
			<div className='flex flex-col w-[50%] h-full space-y-4 items-center px-20 justify-center'>
				<div className='flex flex-col -space-y-4'>
					<span className='serif text-xxl text-dark w-[480px] text-center'>
						Register to save your seat in our
					</span>
					<span className='serif text-xxl text-dark w-[480px] text-center'>
						next free weekly webinar.
					</span>
				</div>
				<div
					onClick={() => openModal()}
					className='text-lg bg-dark xbold select-none hover:opacity-50 active:scale-95 cursor-pointer text-light mt-20 p-2 rounded-md w-fit sans'>
					REGISTER NOW
				</div>
				<div className='flex w-full h-full items-center justify-center'>
					<div className='flex w-full justify-between items-end border-b-2 border-dark/10'>
						<span className='sans xbold text-md text-nowrap text-dark'>UPCOMING WEBINARS</span>
						<SeeMore text='See all' colorClass='text-four' />
					</div>
				</div>
				<div className='flex w-full h-full space-x-4 justify-center'>
					<div className='flex flex-col space-y-4 bg-dark/10 p-4 rounded-md'>
						<div className='w-full flex justify-between'>
							<FaCalendar size={14} className='text-dark' />
							<span className='sans xbold text-sm'>JAN 8, 2024 @ 12:30 PM EST</span>
						</div>
						<div className='flex flex-col text-center space-y-1'>
							<span className='sans text-md xbold'>Learning About Our Infinite Universe</span>
							<span className='sans text-sm w-[300px]'>
								Exploring possibilities surrounding how we ended up here up here up here.
							</span>
						</div>
					</div>
					<div className='flex flex-col space-y-4 bg-dark/10 p-4 rounded-md'>
						<div className='w-full flex justify-between'>
							<FaCalendar size={14} className='text-dark' />
							<span className='sans xbold text-sm'>JAN 8, 2024</span>
						</div>
						<div className='flex flex-col text-center space-y-1'>
							<span className='sans text-md xbold'>Learning About Our Infinite Universe</span>
							<span className='sans text-sm w-[300px]'>
								Exploring possibilities surrounding how we ended up here up here up here.
							</span>
						</div>
					</div>
					<div className='flex flex-col space-y-4 bg-dark/10 p-4 rounded-md'>
						<div className='w-full flex justify-between'>
							<FaCalendar size={14} className='text-dark' />
							<span className='sans xbold text-sm'>JAN 8, 2024</span>
						</div>
						<div className='flex flex-col text-center space-y-1'>
							<span className='sans text-md xbold'>Learning About Our Infinite Universe</span>
							<span className='sans text-sm w-[300px]'>
								Exploring possibilities surrounding how we ended up here up here up here.
							</span>
						</div>
					</div>
				</div>
			</div>
			{/* <div className='flex flex-col space-y-8 w-full h-full justify-center items-center '>
				<span className='serif text-xxl text-dark w-[480px] text-center'>
					Register now to save your seat for our free weekly webinar.
				</span>
				<div className='bg-dark select-none hover:opacity-50 active:scale-95 cursor-pointer text-light p-2 rounded-md w-fit sans'>
					Create Account
				</div>
			</div> */}
			<SigninModal isModalOpen={isModalOpen} closeModal={closeModal} showSignin={false} />
		</section>
	);
}
