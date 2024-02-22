import React from 'react';
import { useModal } from '../../contexts/ModalContext';
import UpcomingWebinarItem from './UpcomingWebinarItem';
import SeeMore from '../pieces/SeeMore';

export default function UpcomingWebinars({ webinars }) {
	const { openModal, closeModal, currentModal } = useModal();

	return (
		<>
			<div className='flex flex-col w-full h-full pt-10 xl:pt-0 xl:px-20 space-y-4 items-center justify-center'>
				<div className='flex w-full h-full items-center justify-center'>
					<div className='flex w-full justify-between items-end border-b-2 border-dark/10 dark:border-light/10'>
						<span className='sans xbold text-md text-nowrap text-dark dark:text-light/70'>
							UPCOMING WEBINARS
						</span>
						<SeeMore
							text='See all'
							colorClass='text-four'
						/>
					</div>
				</div>
				<div className='overflow-x-auto flex w-full h-full space-x-4 pb-4 justify-start'>
					{webinars.map((webinar, index) => (
						<UpcomingWebinarItem
							key={index}
							webinar={webinar}
						/>
					))}
				</div>
			</div>
		</>
	);
}
