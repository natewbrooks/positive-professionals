import React, { useState } from 'react';
import Modal from './Modal';

export default function ServicesModal({ isModalOpen, closeModal, service }) {
	return (
		<Modal isOpen={isModalOpen} onClose={closeModal}>
			<div className='flex w-full h-full'>
				<div className='flex flex-col'>
					<span className='text-sm sans'>SERVICE</span>
					<span className='text-xl serif'>Personal Sessions</span>
				</div>
			</div>
		</Modal>
	);
}
