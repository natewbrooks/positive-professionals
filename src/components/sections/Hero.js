import React from 'react';
import { Helmet } from 'react-helmet';
import primaryBottomWave from '../../img/bg-waves/light-blue-waves/primary-wave-bottom.svg';
import bkg from '../../img/coral-reef-bg.webp';

export default function Hero({ data }) {
	return (
		<>
			<Helmet>
				<link
					rel='preload'
					href={bkg}
					as='image'
				/>
			</Helmet>
			<header className='z-10 relative flex justify-center items-center w-full h-fit pt-24 pb-12 null:mb-[4rem] mobile:mb-[8rem] bg-tertiary'>
				<img
					className='absolute bottom-0 w-full translate-y-[50%]'
					src={primaryBottomWave}></img>

				<div className='p-4 rounded-md -translate-y-[20px] flex flex-col space-y-4 items-center justify-center h-full w-fit'>
					<div className='w-full items-center text-center flex flex-col'>
						<div className='relative flex flex-col -space-y-8'>
							<span className='drop-shadow-md z-10 break-words null:w-fit sm:w-[500px] lg:w-[740px] leading-none serif null:text-xxxl mobile:text-billboard text-center xbold text-dark dark:text-light/80  px-8 rounded-full'>
								{data.header}{' '}
								<span className='relative w-fit h-fit inline-block'>
									together.
									{/* <img
									className='-z-10 absolute -bottom-1 right-3 opacity-80 dark:opacity-50 w-[105%] ' // Adjust these properties
									src={purpleMarkerStripe}
									alt='Marker Stripe Background'></img> */}
								</span>
							</span>
						</div>
					</div>
					<div className='w-full justify-center items-center flex flex-col space-y-12'>
						<p className='drop-shadow-md xbold break-words sans null:text-md mobile:text-lg text-light dark:text-dark'>
							{data.subtext}
						</p>
						<div className='sans null:text-md xbold text-light dark:bg-dark bg-dark cursor-pointer select-none md:hover:opacity-90 active:scale-95 py-2 px-6 rounded-md'>
							GET STARTED
						</div>
					</div>
				</div>
			</header>
		</>
	);
}
