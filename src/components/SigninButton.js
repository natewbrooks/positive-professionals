import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import SigninModal from './SigninModal';

export default function SigninButton({}) {
	const [isModalOpen, setModalOpen] = useState(false);

	const openModal = () => setModalOpen(true);
	const closeModal = () => {
		setModalOpen(false);
	};

	return (
		<>
			<div
				onClick={() => openModal()}
				className='cursor-pointer active:scale-95 select-none flex items-center w-fit space-x-2'>
				<FaUserCircle size={22} />
				<h2 className='sans text-sm text-nowrap xbold'>SIGN IN</h2>
			</div>

			<SigninModal isModalOpen={isModalOpen} closeModal={closeModal} showSignin={true} />
		</>
	);
}
