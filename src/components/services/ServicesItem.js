import React, { useState } from 'react';
import { useModal } from '../ModalContext';
import Modal from '../Modal';

export default function ServicesItem({ service, modalId }) {
	const { openModal } = useModal();

	return (
		<>
			<div
				onClick={() => openModal(modalId)}
				className='md:group md:hover:opacity-80 transition-all duration-300 cursor-pointer select-none md:active:scale-95 flex flex-col space-y-2 text-center rounded-md'>
				<div className='relative group-md:hover:opacity-50 null:py-4 md:py-8  h-full flex flex-col items-center justify-center space-y-2  group-hover:opacity-80 bg-light/30 px-4 rounded-md'>
					<div className='relative h-full w-full flex items-center'>
						<span className='serif text-xl w-full text-center'>{service.title}</span>
					</div>
					<service.Icon
						size={120}
						className='p-4 my-4 h-full bg-dark duration-300 transition-colors text-light dark:text-lightAccent group-hover:text-light rounded-md'
					/>
					<span className='sans text-md h-full'>{service.description}</span>
				</div>
			</div>
			<Modal modalId={modalId}>
				<div className='flex w-full h-full text-dark dark:text-light/70 '>
					<div className='flex flex-col'>
						<span className='text-xl serif'>{service.title}</span>
					</div>
				</div>
			</Modal>
		</>
	);
}
