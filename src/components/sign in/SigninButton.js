import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import SigninModal from './SigninModal';

export default function SigninButton({ isLoggedIn, userData, onLogin, onLogout }) {
	const [isModalOpen, setModalOpen] = useState(false);

	const handleLogin = () => {
		try {
			//
		} catch (error) {
			console.error('Error during login:', error);
		}
	};

	const handleLogout = () => {
		try {
			//
		} catch (error) {
			console.error('Error during logout:', error);
		}
	};

	const toggleModal = () => {
		setModalOpen(!isModalOpen);
	};

	return (
		<>
			<div
				onClick={() => {
					isLoggedIn ? handleLogout() : handleLogin();
				}}
				className='cursor-pointer active:scale-95 select-none flex items-center w-fit space-x-2'>
				<FaUserCircle
					size={22}
					className='text-dark dark:text-light/60'
				/>
				<h2 className='sans text-dark dark:text-light/60 hidden sm:block text-sm text-nowrap xbold'>
					{!isLoggedIn ? 'SIGN IN' : 'SIGN OUT'}
				</h2>
			</div>

			<SigninModal
				isModalOpen={isModalOpen}
				closeModal={toggleModal}
				showSignin={!isLoggedIn}
			/>
		</>
	);
}
