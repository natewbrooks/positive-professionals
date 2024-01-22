import React, { useState } from 'react';
import ServicesModal from './ServicesModal';

export default function ServicesItem({ service }) {
	const [isModalOpen, setModalOpen] = useState(false);

	const openModal = () => setModalOpen(true);
	const closeModal = () => {
		setModalOpen(false);
	};

	return (
		<>
			<div
				onClick={() => openModal()}
				className='md:group md:hover:opacity-80 transition-all duration-300 cursor-pointer select-none active:scale-95 flex flex-col space-y-2 text-center rounded-md'>
				<div className='relative w-full flex justify-center z-10'>
					<div
						className={`py-2 px-14 rounded-md bg-light dark:bg-dark  transition-all duration-300 relative top-5`}></div>
				</div>
				<div className='relative group-md:hover:opacity-50 py-12 h-full flex flex-col items-center justify-center space-y-2  group-hover:opacity-80 bg-light/50 dark:bg-dark/50 dark:text-light/60 px-8 rounded-md'>
					<span className='serif text-xl'>{service.title}</span>
					<service.Icon
						size={120}
						className='p-4 my-4 bg-dark/10 dark:bg-light/10 text-light dark:text-dark group-hover:text-light rounded-md'
					/>
					<span className='sans text-md'>{service.description}</span>
				</div>
			</div>
			<ServicesModal
				isModalOpen={isModalOpen}
				closeModal={closeModal}
				service={service}
			/>
		</>
	);
}
