import React, { useEffect } from 'react';
import { FaXmark } from 'react-icons/fa6';

export default function Modal({ isOpen, onClose, children }) {
	useEffect(() => {
		if (isOpen) {
			document.documentElement.style.overflow = 'hidden';
			document.body.style.overflow = 'hidden';
		}

		// Clean up function to reset overflow when component unmounts
		return () => {
			document.documentElement.style.overflow = '';
			document.body.style.overflow = '';
			document.body.style.marginRight = '';
		};
	}, [isOpen]);

	return (
		<>
			{isOpen && (
				<div className='z-50 m-0 drop-shadow-lg fixed w-screen h-screen top-0 right-0  bg-dark/40 flex justify-center items-center'>
					<div className='flex flex-col max-h-screen w-full h-full md:max-w-[60%] md:max-h-[60%] md:w-fit md:h-fit bg-light p-5 rounded-lg'>
						<div className='w-full justify-end text-end'>
							<button
								onClick={onClose}
								className='serif text-md md:hover:opacity-50'>
								<FaXmark size={22} />
							</button>
						</div>
						{children}
					</div>
				</div>
			)}
		</>
	);
}
