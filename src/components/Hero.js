import React from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { FaLinkedin } from 'react-icons/fa';

export default function Hero({}) {
	return (
		<div className='relative flex justify-center items-center w-full h-fit py-40 bg-custom-gradient'>
			<div className='pt-8 flex flex-col space-y-8 items-center justify-center h-full'>
				<div className='text-center flex flex-col space-y-2'>
					<div className='flex flex-col -space-y-8'>
						<span className='serif text-billboard text-center xbold text-dark px-8 rounded-full'>
							Transform potential
						</span>
						<span className='serif text-billboard text-center xbold text-dark px-8 rounded-full'>
							into performance.
						</span>
					</div>
					<p className='sans text-lg text-dark'>Cultivate your imagination from home.</p>
				</div>
				<div className='sans text-md xbold text-dark bg-light cursor-pointer select-none hover:opacity-50 active:scale-95 p-2 rounded-md'>
					GET STARTED
				</div>
			</div>
		</div>
	);
}
