import React from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { FaLinkedin } from 'react-icons/fa';
import logo from '../../../static/img/logo/pp-logo-outline.svg';
import waveTop from '../../../static/img/bg-waves/upcoming-webinar-waves/wave-top.svg';

export default function Footer({}) {
	return (
		<footer className='relative mt-2 w-full h-full'>
			<div
				className='select-none z-0 absolute w-full h-full left-0'
				style={{ position: 'relative' }}>
				<img
					src={waveTop}
					alt='Footer wave top bg'
					style={{ transform: 'translateY(-90%)', position: 'absolute', zIndex: -1 }} // Ensure this is behind everything else
					className='w-full h-[50px] top-0'
				/>
			</div>
			<div
				className='z-20 bg-dark w-full h-full px-12 pb-6 pt-2 flex-col sm:flex-row flex justify-around'
				style={{ position: 'relative' }}>
				<div className='flex flex-col space-y-4 items-center justify-center'>
					<div className='flex items-center justify-center'>
						<div
							onClick={() => window.scrollTo(0, 0)}
							className=''
							title={'Home'}>
							<img
								src={logo}
								alt='logo'
								style={{ width: '84px', height: '84px' }}
								loading='lazy'
								className='aspect-auto cursor-pointer'
							/>
						</div>
					</div>
					<span className='sans text-sm text-center text-light/50 xbold'>
						COPYRIGHT @ 2024 <br></br>POSITIVE PROFESSIONALS
					</span>
					<AnchorLink
						to='/privacy-policy'
						className='sans text-center text-[10px] text-light/30 xbold'
						title='View the privacy policy'>
						PRIVACY POLICY
					</AnchorLink>
				</div>
				<div className='flex space-x-10 justify-center py-8 sm:justify-normal sm:py-0'>
					<div className='flex flex-col space-y-4'>
						<span className='text-light sans xbold text-md'>NAVIGATION</span>
						<div className='flex flex-col space-y-2 justify-center items-center'>
							<AnchorLink
								to='/#team'
								className='sans text-md text-light/40'
								title='Navigate to the Team section'>
								Team
							</AnchorLink>
							<AnchorLink
								to='/#testimonials'
								className='sans text-md text-light/40'
								title='Navigate to the Testimonials section'>
								Testimonials
							</AnchorLink>
							<AnchorLink
								to='/#services'
								className='sans text-md	 text-light/40'
								title='Navigate to the Services section'>
								Services
							</AnchorLink>
							<AnchorLink
								to='/resources'
								className='sans text-md text-light/40'
								title='Access Resources page'>
								Resources
							</AnchorLink>
						</div>
					</div>
					{/* <div className='flex flex-col space-y-2'>
						<span className='text-light sans xbold text-md'>LINKS</span>
						<div className='flex flex-col space-y-2 justify-center items-center'>
							<FaLinkedin
								size={24}
								className='text-light/40 hover:text-light cursor-pointer'
							/>
						</div>
					</div> */}
				</div>
				<div className='flex items-end justify-center '>
					<a
						href='https://www.natewbrooks.com'
						target='_blank'
						className='text-light/20 sans text-md'>
						site created @ nwb co.
					</a>
				</div>
			</div>
		</footer>
	);
}
