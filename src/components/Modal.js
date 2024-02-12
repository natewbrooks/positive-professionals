import React, { useEffect } from 'react';
import { FaXmark } from 'react-icons/fa6';
import { useModal } from './ModalContext';

export default function Modal({ children, modalId }) {
	const { currentModal, closeModal } = useModal();

	useEffect(() => {
		// Function to calculate the width of the scrollbar
		const getScrollbarWidth = () => window.innerWidth - document.documentElement.clientWidth;
		const scrollbarWidth = getScrollbarWidth();

		if (currentModal === modalId) {
			const modalElement = document.getElementById('modal');

			// Increase body's padding right by the scrollbar width to prevent layout shift
			document.body.style.paddingRight = `${scrollbarWidth}px`;
			if (modalElement) {
				modalElement.style.transform = `translateX(-${scrollbarWidth}px)`;
			}
			document.documentElement.style.overflow = 'hidden';
			document.body.style.overflow = 'hidden';

			// Clean up function to reset overflow and padding when component unmounts or modal closes
			return () => {
				if (currentModal === modalId) {
					document.body.style.paddingRight = '0px';
					document.body.classList.remove('modalOpen');

					document.documentElement.style.overflow = '';
					document.body.style.overflow = '';
				}
			};
		}
	}, [currentModal, modalId]); // Re-run effect only if currentModal or modalId changes

	if (currentModal !== modalId) return null;

	if (currentModal !== modalId) return null;

	return (
		<>
			{currentModal === modalId && (
				<div
					id='modal'
					className='z-20 m-0 drop-shadow-lg fixed w-screen h-screen top-0 right-0 bg-dark/60 flex justify-center items-center select-none'>
					<div className='flex flex-col max-h-screen w-full h-full md:max-w-[60%] md:max-h-[60%] md:w-fit md:h-fit bg-light dark:bg-darkAccent p-5 md:rounded-lg'>
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
					<div className='absolute -right-2 h-full px-1 bg-dark/60'></div>
				</div>
			)}
		</>
	);
}
