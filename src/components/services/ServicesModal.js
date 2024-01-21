import React, { useState } from 'react';
import Modal from '../Modal';

export default function ServicesModal({ isModalOpen, closeModal, service }) {
	return (
		<Modal
			isOpen={isModalOpen}
			onClose={closeModal}>
			<div className='z-30 flex w-full h-full'>
				<div className='flex flex-col'>
					<span className='text-xl serif'>{service.title}</span>
				</div>
			</div>
		</Modal>
	);
}
