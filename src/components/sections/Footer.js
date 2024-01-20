import React from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { FaLinkedin } from 'react-icons/fa';
import logo from '../../img/logo/pp-outline.svg';

export default function Footer({}) {
	return (
		<footer className='bg-dark w-full h-full p-12 flex-col sm:flex-row  flex justify-around'>
			<div className='flex flex-col space-y-4 items-center justify-center'>
				<div className='flex items-center justify-center'>
					<AnchorLink
						to='/#canvas'
						className=''
						title={'Home'}>
						<img
							src={logo}
							alt='logo'
							style={{ width: '100px', height: '100px' }}
						/>
						{/* <div className='relative flex z-10'>
							<div className='z-50 bg-primary p-4 rotate-45'></div>
							<div className='z-20 absolute -left-2 top-0 bg-secondary p-4 rotate-45'></div>
							<div className='z-40 absolute -right-2 bg-tertiary p-4 rotate-45'></div>
							<div className='z-10 absolute -right-4 bg-four p-4 rotate-45'></div>
						</div> */}
					</AnchorLink>
				</div>
				<span className='sans text-sm text-center text-light/40'>
					COPYRIGHT @ 2024 <br></br>POSITIVE PROFESSIONALS LLC.
				</span>
			</div>
			<div className='flex space-x-10 justify-center py-8 sm:justify-normal sm:py-0'>
				<div className='flex flex-col space-y-4'>
					<span className='text-light sans xbold text-md'>NAVIGATION</span>
					<div className='flex flex-col space-y-2 justify-center items-center'>
						<AnchorLink
							to='/#team'
							className='sans text-sm text-light/40'
							title={'Team'}>
							Team
						</AnchorLink>
						<AnchorLink
							to='/#testimonials'
							className='sans text-sm text-light/40'
							title={'Testimonials'}>
							Testimonials
						</AnchorLink>
						<AnchorLink
							to='/#services'
							className='sans text-sm text-light/40'
							title={'Resources'}>
							Services
						</AnchorLink>
						<AnchorLink
							to='/resources'
							className='sans text-sm text-light/40'
							title={'Resources'}>
							Resources
						</AnchorLink>
					</div>
				</div>
				<div className='flex flex-col space-y-2'>
					<span className='text-light sans xbold text-md'>LINKS</span>
					<div className='flex flex-col space-y-2 justify-center items-center'>
						<FaLinkedin
							size={24}
							className='text-light/40 hover:text-light cursor-pointer'
						/>
					</div>
				</div>
			</div>
			<div className='flex items-end justify-center'>
				<a
					href='https://www.natewbrooks.com'
					target='_blank'
					className='text-light/20 sans text-md'>
					site created @ nwb.co
				</a>
			</div>
		</footer>
	);
}
