import React, { useState } from 'react';
import { useModal } from '../ModalContext';
import Modal from '../Modal';

export default function ServicesItem({ service, modalId }) {
	const { openModal } = useModal();

	return (
		<>
			<div
				onClick={() => openModal(modalId)}
				className='md:group md:hover:opacity-80 transition-all duration-300 cursor-pointer select-none active:scale-95 flex flex-col space-y-2 text-center rounded-md'>
				<div className='relative group-md:hover:opacity-50 null:py-4 md:py-8 lg:py-12 h-full flex flex-col items-center justify-center space-y-2  group-hover:opacity-80 bg-light dark:bg-dark dark:text-light/60 px-8 rounded-md'>
					<span className='serif text-xl'>{service.title}</span>
					<service.Icon
						size={120}
						className='p-4 my-4 bg-secondary  text-light dark:text-dark group-hover:text-light rounded-md'
					/>
					<span className='sans text-md'>{service.description}</span>
				</div>
			</div>
			<Modal modalId={modalId}>
				<div className='z-50 flex w-full h-full text-dark dark:text-light/70 '>
					<div className='flex flex-col'>
						<span className='text-xl serif'>{service.title}</span>
					</div>
				</div>
			</Modal>
		</>
	);
}
