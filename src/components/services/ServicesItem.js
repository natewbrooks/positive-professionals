import React, { useState } from 'react';
import { useModal } from '../ModalContext';
import Modal from '../Modal';

export default function ServicesItem({ service, modalId }) {
	const { openModal } = useModal();

	return (
		<>
			<div
				onClick={() => openModal(modalId)}
				className='h-full md:group md:hover:opacity-80 transition-all duration-300 cursor-pointer select-none md:active:scale-95 flex flex-col space-y-2 text-center'>
				<div className='justify-between relative group-md:hover:opacity-50 null:py-4 md:py-8  h-full flex flex-col items-center space-y-2  group-hover:opacity-80 px-4'>
					<div className='relative w-full h-full flex flex-col items-end justify-center'>
						<span className='dark:text-light/70 serif text-xl text-center w-full'>
							{service.title}
						</span>
					</div>
					<div className='h-fit w-full flex flex-col items-center'>
						<service.Icon
							size={120}
							className='p-4 my-4 h-full bg-dark dark:bg-light/70 duration-300 transition-colors text-light dark:text-dark group-hover:text-light rounded-md'
						/>
						<span className='dark:text-light/70 sans text-md h-full'>{service.description}</span>
					</div>
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
