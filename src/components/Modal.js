import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { FaXmark } from 'react-icons/fa6';

export default function Modal({ isOpen, onClose, children }) {
	useEffect(() => {
		console.log('NO SCROLL ELSEWHERE!');
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
				<div className='fixed inset-0 bg-dark/20 z-50 flex justify-center items-center'>
					<div className='flex flex-col w-[50%] h-[50%] bg-white p-5 rounded-lg'>
						<div className='w-full justify-end text-end'>
							<button onClick={onClose} className='serif text-md hover:opacity-50'>
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
