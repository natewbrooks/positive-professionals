import React from 'react';
import { useModal } from '../../contexts/ModalContext';
import UpcomingWebinarItem from '../webinar/UpcomingWebinarItem';
import SeeMore from '../pieces/SeeMore';
import waveTop from '../../img/bg-waves/upcoming-webinar-waves/wave-top.svg';

export default function UpcomingWebinarsSection({ webinars }) {
	const { openModal, closeModal, currentModal } = useModal();

	return (
		<>
			<div className='relative mt-[1rem] z-10 bg-dark flex flex-col null:px-4 w-full h-fit pt-4 xl:px-20 space-y-4 items-center justify-center'>
				<div className='z-0 absolute w-full h-full left-0'>
					<img
						src={waveTop}
						alt='Resources wave top bg'
						style={{ transform: 'translateY(-90%)' }}
						className='absolute w-full h-[50px] top-0'></img>
					<div className='absolute bg-dark w-full h-full'></div>
				</div>
				<div className='z-10 flex w-full h-full items-center justify-center'>
					<div className='flex h-fit w-full justify-between items-end border-b-2 border-light/10'>
						<span className='sans xbold text-md text-nowrap text-light dark:text-light/70'>
							UPCOMING WEBINARS
						</span>
					</div>
				</div>
				<div className='z-10 overflow-x-auto flex w-full h-full space-x-4 pb-4 justify-start'>
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
