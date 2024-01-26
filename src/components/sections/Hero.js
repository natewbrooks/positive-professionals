import React from 'react';
import purpleMarkerStripe from '../../img/overlays/purple-marker-stripe.svg';

export default function Hero({ data }) {
	return (
		<header className='relative flex justify-center items-center w-full h-fit py-20 lg:py-40'>
			<div className='pt-8 flex flex-col space-y-16 items-center justify-center h-full'>
				<div className='text-center flex flex-col space-y-2 px-4'>
					<div className='relative flex flex-col -space-y-8'>
						<span className='z-10 break-words null:w-fit sm:w-[500px] lg:w-[740px] leading-none serif null:text-xxxl mobile:text-billboard text-center xbold text-dark dark:text-light/80  px-8 rounded-full'>
							{data.header}{' '}
							<span className='relative w-fit h-fit inline-block'>
								together.
								<img
									className='-z-10 absolute -bottom-1 right-3 opacity-80 dark:opacity-50 w-[105%] ' // Adjust these properties
									src={purpleMarkerStripe}
									alt='Marker Stripe Background'></img>
							</span>
						</span>
					</div>
					<p className='break-words sans null:text-md mobile:text-lg text-dark dark:text-light/70'>
						{data.subtext}
					</p>
				</div>
				<div className='sans null:text-md mobile:text-lg  xbold text-light dark:text-dark bg-dark dark:bg-four cursor-pointer select-none md:hover:opacity-50 active:scale-95 py-2 px-4 rounded-md'>
					GET STARTED
				</div>
			</div>
		</header>
	);
}
