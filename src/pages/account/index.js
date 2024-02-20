import React from 'react';
import Layout from '../../components/Layout';
import { useUser } from '../../contexts/UserContext';
import { Link } from 'gatsby';

function Account() {
	const { user, userData } = useUser();
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
					className='py-24 flex w-full h-full items-center justify-center'>
					<div className='flex flex-col text-center leading-none'>
						<div className=' text-md sans xbold text-dark dark:text-light/70'>ACCOUNT</div>
						<div className=' text-xxxl serif xbold text-dark dark:text-light/70'>
							{userData.firstName + ' ' + userData.lastName}
						</div>

						<div className='flex flex-col space-y-4 pt-8 text-start'>
							<div className='flex flex-col w-fit'>
								<span className='sans text-secondary text-sm xbold '>ACCOUNT CREATED: </span>
								<span className='sans text-dark text-md'>{formattedDate}</span>
							</div>
							<div className='flex flex-col w-fit'>
								<span className='sans text-secondary text-sm xbold'>EMAIL: </span>
								<span className='sans text-dark text-md'>{userData.email}</span>
							</div>
							<div className='flex flex-col w-fit'>
								<span className='sans text-secondary text-sm xbold '>PHONE NUMBER: </span>
								<span className='sans text-dark text-md '>{userData.phoneNumber}</span>
							</div>
						</div>
					</div>
				</section>
			) : (
				<section
					id='account'
					className='py-24 flex w-full h-full items-center justify-center'>
					<div className='flex flex-col text-center leading-none'>
						<div className=' text-xxxl serif xbold text-dark dark:text-light/70'>
							SIGN IN TO VIEW YOUR ACCOUNT
						</div>
					</div>
				</section>
			)}
		</Layout>
	);
}

export default Account;
