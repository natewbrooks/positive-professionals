import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import SigninModal from './SigninModal';
import { useAuth0 } from '@auth0/auth0-react';

export default function SigninButton({ isLoggedIn, userData }) {
	const [isModalOpen, setModalOpen] = useState(false);
	const { loginWithPopup, isAuthenticated, logout } = useAuth0();

	const openModal = () => {
		try {
			loginWithPopup(); // Call the loginWithPopup method from Auth0
			// You can add additional actions after successful login here
		} catch (error) {
			console.error('Error during login:', error);
		}
	};
	const closeModal = () => {
		setModalOpen(false);
	};

	return (
		<>
			<div
				onClick={() => {
					if (isAuthenticated) {
						logout({
							logoutParams: {
								returnTo: window.location.origin,
							},
						});
					} else {
						loginWithPopup();
					}
				}}
				className='cursor-pointer active:scale-95 select-none flex items-center w-fit space-x-2'>
				<FaUserCircle size={22} />
				<h2 className='sans hidden sm:block text-sm text-nowrap xbold'>
					{!isAuthenticated && <>SIGN IN</>}
					{isAuthenticated && <>SIGN OUT</>}
				</h2>
			</div>

			<SigninModal
				isModalOpen={isModalOpen}
				closeModal={closeModal}
				showSignin={true}
			/>
		</>
	);
}
