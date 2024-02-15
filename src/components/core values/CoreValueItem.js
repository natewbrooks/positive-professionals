import React, { useState } from 'react';
import Modal from '../Modal';
import { useModal } from '../ModalContext';

export default function CoreValuesItem({ value, Icon, modalId }) {
	const { openModal } = useModal();

	return (
		<>
			<div
				onClick={() => {
					openModal(modalId);
				}}
				className='rounded-sm transition-all duration-300 bg-light/30 dark:bg-dark/50 w-full select-none active:scale-95 md:hover:opacity-50 cursor-pointer p-2 flex flex-col space-y-2 items-center justify-center'>
				<Icon
					size={42}
					className='text-dark dark:text-light/70'
				/>
				<span className='sans xbold null:text-xs md:text-sm text-dark dark:text-light/80'>
					{value.name.toUpperCase()}
				</span>
			</div>
			<Modal modalId={modalId}>
				<div className='z-30 w-full xxl:max-w-[600px] max-h-[90vh] h-full flex flex-col md:flex-row xxl:flex-col xxl:space-x-0 sm:space-x-4 justify-center items-center text-dark dark:text-light/70 py-4 overflow-hidden'>
					<div className='flex flex-col w-full h-fit'>
						<div className='flex flex-col leading-tight pb-2'>
							<span className='sans text-sm sm:text-md text-dark/50 dark:text-light/80 xbold text-center'>
								CORE VALUE
							</span>
							<span className='serif text-xl sm:text-xxl text-center'>
								{value.name.toUpperCase()}
							</span>
						</div>
						<div className='pb-2 sans text-sm sm:text-md text-center '>{value.about}</div>
					</div>
					<div className='max-h-[50vh] py-2 w-fit xxl:w-full bg-dark/10 dark:bg-dark sm:px-2 rounded-md rounded-b-md sans text-sm sm:text-md overflow-y-auto'>
						<div className='h-full px-4 flex flex-col'>
							{value.reasons.map((reason, index) => (
								<React.Fragment key={value.name + reason + index}>
									<span className='xbold dark:text-light/80 '>
										{index + 1}. {reason.reason}:
									</span>
									<span>{reason.explanation}</span>
									<br />
								</React.Fragment>
							))}
						</div>
					</div>
				</div>
			</Modal>
		</>
	);
}
