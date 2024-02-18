import React, { useState } from 'react';
import SigninModal from '../sign in/SigninModal';
import { useModal } from '../ModalContext';
import { FaUserCircle } from 'react-icons/fa';

export default function SigninButton({ isLoggedIn, userData, onLogin, onLogout }) {
	const [isModalOpen, setModalOpen] = useState(false);
	const { openModal } = useModal();

	const handleLogin = () => {
		try {
			//
			openModal('signIn');
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

	return (
		<>
			<div
				onClick={() => {
					isLoggedIn ? handleLogout() : handleLogin();
				}}
				className='cursor-pointer active:scale-95 select-none flex items-center w-fit space-x-2'>
				<FaUserCircle
					size={18}
					className='text-dark dark:text-light/60'
				/>
				<h2 className='sans text-dark dark:text-light/60 hidden sm:block text-xs text-nowrap xbold'>
					{!isLoggedIn ? 'SIGN IN' : 'SIGN OUT'}
				</h2>
			</div>
		</>
	);
}
