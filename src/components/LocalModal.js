import React, { useEffect } from 'react';
import { FaXmark } from 'react-icons/fa6';
import { useModal } from '../contexts/ModalContext';

export default function LocalModal({ children, modalId }) {
	const { currentModal, closeModal } = useModal();

	if (currentModal !== modalId) return null;

	return (
		<>
			{currentModal === modalId && (
				<div
					id='modal'
					onClick={(e) => {
						e.stopPropagation();
						closeModal();
					}}
					className='absolute z-50 flex justify-center items-center select-none'>
					<div
						onClick={(e) => e.stopPropagation()}
						className='flex flex-col max-h-screen w-fit h-fit bg-light dark:bg-darkAccent p-5 md:rounded-lg'>
						<div className='w-full justify-end text-end'>
							<button
								onClick={() => closeModal()}
								className='serif text-md md:hover:opacity-50'>
								<FaXmark
									size={22}
									className='text-dark dark:text-light/70'
								/>
							</button>
						</div>
						{children}
					</div>
				</div>
			)}
		</>
	);
}
