import React, { useState } from 'react';
import Layout from '../../components/Layout';
import { useUser } from '../../contexts/UserContext';
import { Link } from 'gatsby';
import { FaEdit, FaVideo, FaEye, FaEyeSlash } from 'react-icons/fa';

function Account() {
	const { user, userData } = useUser();
	const [infoShown, setInfoShown] = useState(false);
	let formattedDate;

	if (userData && userData.creationDate) {
		// Convert Firestore Timestamp to JavaScript Date object
		const date = new Date(userData.creationDate.seconds * 1000); // If using Firestore Timestamp
		// const date = new Date(userData.creationDate); // Use this line if creationDate is already a Date object

		formattedDate = date.toLocaleDateString('en-GB', {
			day: 'numeric',
			month: 'long',
			year: 'numeric',
		});
	}

	return (
		<Layout>
			{user && userData ? (
				<section
					id='account'
					className='mt-[4rem] mb-[14rem] flex w-full h-full items-center justify-center'>
					<div className='space-y-8 w-full items-center justify-center flex flex-col text-center leading-none'>
						<div className='pb-2 w-full flex flex-col border-b-[3px] border-dark/10 dark:border-light/10'>
							<div className=' text-md sans xbold text-dark/50 dark:text-light/50'>ACCOUNT</div>
							<div className=' text-xxxl serif xbold text-dark dark:text-light/90'>
								{userData.firstName + ' ' + userData.lastName}
							</div>
						</div>

						<div className='null:w-fit sm:w-full sm:px-10 md:px-20 h-full flex flex-col space-y-4'>
							<div className='relative null:space-y-2 md:space-y-0 md:space-x-4 w-full h-full items-center justify-between flex null:flex-col md:flex-row bg-dark/10 dark:bg-light/10 rounded-md'>
								<div className='flex flex-col items-center justify-center space-y-2 null:px-4 null:pb-2 null:pt-4 md:p-4 null:border-b-[3px] md:border-b-0 md:border-r-[3px] border-dark/10 dark:border-light/10 sans xbold text-xl text-dark dark:text-light/70 w-fit h-full'>
									<span className=''>ACCOUNT INFORMATION</span>
									<div className='block md:hidden'>
										{infoShown ? (
											<FaEye
												onClick={() => setInfoShown(!infoShown)}
												size={32}
												className='text-dark cursor-pointer dark:text-light/70 hover:opacity-50 active:scale-95'
											/>
										) : (
											<FaEyeSlash
												onClick={() => setInfoShown(!infoShown)}
												size={32}
												className='text-dark cursor-pointer dark:text-light/70 hover:opacity-50 active:scale-95'
											/>
										)}
									</div>
								</div>
								<div className='p-4 flex flex-col space-y-4 h-full w-full rounded-md'>
									<div className='flex space-x-2 items-center'>
										<span className='sans text-four text-sm xbold '>CREATION DATE: </span>
										<span className='sans text-dark dark:text-light/70  text-md'>
											{formattedDate}
										</span>
									</div>
									<div className='flex space-x-2 items-center'>
										<span className='sans text-four text-sm xbold'>EMAIL: </span>
										<span className='sans text-dark dark:text-light/70 whitespace-normal text-wrap  text-md'>
											{infoShown ? userData.email : userData.email.split('').map((letter) => '*')}
										</span>
									</div>
									<div className='flex space-x-2 items-center'>
										<span className='sans text-four text-sm xbold '>PHONE NUMBER: </span>
										<span className='sans text-dark dark:text-light/70 text-md '>
											{infoShown
												? userData.phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3')
												: userData.phoneNumber.split('').map((letter) => '*')}
										</span>
									</div>
								</div>
								<div className='hidden md:block absolute right-10 select-none'>
									{infoShown ? (
										<FaEye
											onClick={() => setInfoShown(!infoShown)}
											size={32}
											className='text-dark cursor-pointer dark:text-light/70 md:hover:opacity-50 md:active:scale-95'
										/>
									) : (
										<FaEyeSlash
											onClick={() => setInfoShown(!infoShown)}
											size={32}
											className='text-dark cursor-pointer dark:text-light/70 md:hover:opacity-50 md:active:scale-95'
										/>
									)}
								</div>
							</div>

							<div className='select-none w-full null:justify-center md:justify-end flex space-x-2 text-dark dark:text-light/70'>
								<div className='cursor-pointer md:hover:opacity-50 md:active:scale-95 null:w-full md:w-fit items-center flex space-x-2 bg-dark/10 dark:bg-light/10 p-2 rounded-md'>
									<FaVideo size={20} />
									<span className='sans text-sm xbold'>ACCESS WEBINARS</span>
								</div>
								<div className='cursor-pointer md:hover:opacity-50 md:active:scale-95 null:w-full md:w-fit items-center flex space-x-2 bg-dark/10 dark:bg-light/10 p-2 rounded-md'>
									<FaEdit size={20} />
									<span className='sans text-sm xbold'>EDIT ACCOUNT</span>
								</div>
							</div>
						</div>
					</div>
				</section>
			) : (
				<section
					id='account'
					className='py-24 flex w-full h-full items-center justify-center'>
					<div className='flex flex-col text-center leading-none'>
						<div className=' text-xxl sans xbold text-dark dark:text-light/70'>
							SIGN IN TO VIEW YOUR ACCOUNT
						</div>
					</div>
				</section>
			)}
		</Layout>
	);
}

export default Account;
