import React, { useState, useEffect } from 'react';
import { useModal } from '../../contexts/ModalContext';
import { FaUserCircle } from 'react-icons/fa';
import { navigate } from 'gatsby';
import LocalModal from '../LocalModal';
import { useUser } from '../../contexts/UserContext';

export default function SigninButton({ hasScrolled }) {
	const { user, userData } = useUser();
	const { openModal, closeModal, currentModal } = useModal();

	const handleLogin = () => {
		openModal('logIn');
	};

	const handleLogout = () => {
		openModal('logOut');
	};

	const handleModalAction = (action) => {
		closeModal();
		switch (action) {
			case 'viewAccount':
				navigate('/account'); // Use Gatsby's navigate function
				break;
			case 'signOut':
				handleLogout();
				break;
			default:
				console.log('No action');
		}
	};

	return (
		<>
			<div
				onClick={() => {
					user
						? currentModal === 'accessAccountModal'
							? closeModal()
							: openModal('accessAccountModal')
						: handleLogin();
				}}
				className='relative cursor-pointer md:hover:opacity-50 md:active:scale-95 select-none flex items-center w-fit space-x-2'>
				<FaUserCircle
					size={18}
					className='text-dark dark:text-light/60'
				/>
				<h2 className='sans text-dark dark:text-light/60 hidden sm:block text-sm text-nowrap xbold'>
					{user && userData
						? userData.firstName[0].toUpperCase() + '. ' + userData.lastName.toUpperCase()
						: 'SIGN IN'}
				</h2>
			</div>
			<div
				className={`absolute transition-all duration-300 ${
					hasScrolled ? '-bottom-7' : '-bottom-10'
				}  null:-left-12 mobile:-left-10 sm:left-8  lg:-left-4`}>
				<LocalModal modalId={'accessAccountModal'}>
					<div className='flex flex-col w-fit text-center'>
						{[
							{ label: 'View Account', action: 'viewAccount' },
							{ label: 'Sign out', action: 'signOut' },
						].map((x, index) => (
							<span
								key={x.action + index}
								onClick={() => handleModalAction(x.action)}
								className={`border-b-[3px] border-transparent hover:border-primary py-2 px-1 sans xbold text-md text-light dark:text-dark cursor-pointer whitespace-nowrap md:hover:opacity-50 md:active:scale-95`}>
								{x.label.toUpperCase()}
							</span>
						))}
					</div>
				</LocalModal>
			</div>
		</>
	);
}
