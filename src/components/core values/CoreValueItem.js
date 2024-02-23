import React, { useState } from 'react';
import { useModal } from '../../contexts/ModalContext';

export default function CoreValuesItem({ value, Icon, modalId }) {
	const { openModal } = useModal();

	return (
		<>
			<div
				onClick={() => {
					openModal(modalId);
				}}
				className='leading-snug rounded-sm transition-all duration-300 bg-light/30 dark:bg-dark/50 h-fit w-full select-none active:scale-95 md:hover:opacity-50 cursor-pointer p-2 flex flex-col space-y-2 items-center justify-center'>
				<Icon
					size={42}
					className='text-dark dark:text-light/70'
				/>
				<span className='sans xbold null:text-xs md:text-sm text-dark dark:text-light/80'>
					{value.name.toUpperCase()}
				</span>
			</div>
		</>
	);
}
