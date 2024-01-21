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
				className='group cursor-pointer select-none active:scale-95 flex flex-col space-y-2 text-center rounded-md'>
				<div className='z-10 relative w-full flex justify-center'>
					<div
						className={`group-hover:bg-dark bg-opacity-100 py-2 px-14 rounded-md bg-secondary dark:bg-darkAccent  transition-all duration-300 relative top-5`}>
						<service.Icon
							size={40}
							className='text-light group-hover:text-light rounded-md'
						/>
					</div>
				</div>
				<div className='relative group-md:hover:opacity-50 py-12 h-full flex flex-col items-center justify-center space-y-2  dark:group-hover:opacity-90 bg-light dark:bg-dark dark:text-light/60 px-8 rounded-md'>
					<span className='serif text-xl'>{service.title}</span>
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
