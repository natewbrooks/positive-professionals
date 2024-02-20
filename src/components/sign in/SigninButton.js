import React, { useState, useEffect } from 'react';
import { useModal } from '../ModalContext';
import { FaUserCircle } from 'react-icons/fa';
import useUserData from './useUserData';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export default function SigninButton() {
	const { userData } = useUserData();
	const { openModal } = useModal();
	const [user, setUser] = useState(null);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(getAuth(), (currentUser) => {
			setUser(currentUser);
		});

		return () => unsubscribe();
	}, []);

	console.log(userData);
	console.log(user);

	const handleLogin = () => {
		openModal('logIn');
	};

	const handleLogout = () => {
		openModal('logOut');
	};

	return (
		<>
			<div
				onClick={() => {
					user ? handleLogout() : handleLogin();
				}}
				className='cursor-pointer active:scale-95 select-none flex items-center w-fit space-x-2'>
				<FaUserCircle
					size={18}
					className='text-dark dark:text-light/60'
				/>
				<h2 className='sans text-dark dark:text-light/60 hidden sm:block text-xs text-nowrap xbold'>
					{user && userData
						? userData.firstName[0].toUpperCase() + '. ' + userData.lastName.toUpperCase()
						: 'SIGN IN'}
				</h2>
			</div>
		</>
	);
}
