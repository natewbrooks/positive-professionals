import React from 'react';
import purpleMarkerStripe from '../../img/overlays/purple-marker-stripe.svg';

export default function Hero({ data }) {
	return (
		<header className='relative flex justify-center items-center w-full h-fit py-40'>
			<div className='pt-8 flex flex-col space-y-8 items-center justify-center h-full'>
				<div className='text-center flex flex-col space-y-2 px-4'>
					<div className='relative flex flex-col -space-y-8'>
						<span className='z-10 break-words null:w-fit sm:w-[500px] lg:w-[700px] leading-none serif null:text-xxxl lg:text-billboard text-center xbold text-dark dark:text-light/60  px-8 rounded-full'>
							{data.header}
						</span>
						<img
							className='absolute null:top-[10.75rem] null:right-[2.5rem] sm:top-[7.75rem] sm:right-[5rem] mobile:right-16 mobile:top-[4.75rem] lg:top-6 lg:right-12 opacity-40 h-[160px] lg:h-[215px]'
							src={purpleMarkerStripe}></img>
					</div>
					<p className='break-words sans null:text-md lg:text-lg text-dark dark:text-light/70'>
						{data.subtext}
					</p>
				</div>
				<div className='sans text-md xbold text-light dark:text-dark bg-dark dark:bg-four cursor-pointer select-none md:hover:opacity-50 active:scale-95 p-2 rounded-md'>
					GET STARTED
				</div>
			</div>
		</header>
	);
}
