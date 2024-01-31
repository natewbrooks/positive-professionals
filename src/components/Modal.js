import React, { useEffect } from 'react';
import { FaXmark } from 'react-icons/fa6';
import { useModal } from './ModalContext';

export default function Modal({ children, modalId }) {
	const { currentModal, closeModal } = useModal();

	useEffect(() => {
		if (currentModal === modalId) {
			document.documentElement.style.overflow = 'hidden';
			document.body.style.overflow = 'hidden';
		}

		// Clean up function to reset overflow when component unmounts
		return () => {
			if (currentModal === modalId) {
				document.documentElement.style.overflow = '';
				document.body.style.overflow = '';
			}
		};
	}, [currentModal]);

	if (currentModal !== modalId) return null;

	return (
		<>
			{currentModal === modalId && (
				<div
					id='modal'
					className='z-50 m-0 drop-shadow-lg fixed w-screen h-screen top-0 right-0 bg-dark/60 flex justify-center items-center'>
					<div className='z-50 flex flex-col max-h-screen w-full h-full md:max-w-[60%] md:max-h-[60%] md:w-fit md:h-fit bg-light dark:bg-darkAccent p-5 rounded-lg'>
						<div className='z-50 w-full justify-end text-end'>
							<button
								onClick={() => closeModal()}
								className='z-50 serif text-md md:hover:opacity-50'>
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
