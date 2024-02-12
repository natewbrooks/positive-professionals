import React, { useEffect, useState } from 'react';
import { Link, graphql } from 'gatsby';
import { useLocation } from '@reach/router';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import { navigate } from 'gatsby';

const ResourcesNav = ({ pageTitle, showTitle }) => {
	const categories = ['Blog', 'Videos', 'Webinars'];
	const location = useLocation();

	const goBack = () => {
		navigate(-1); // One step back in the browser's history stack
	};

	return (
		<nav
			id='resourcesNav'
			className=' h-full w-full mb-8'>
			<div className='border-b-2 border-dark/10 dark:border-light/10 pb-4 flex flex-col -space-y-2 justify-center w-full items-center'>
				{showTitle && (
					<span className='text-xxxl serif text-dark dark:text-light/70'>Resources</span>
				)}
				{/* <span className={`px-2 hidden md:block sans text-md text-center`}>
					Explore our collection of informative videos and previous webinars.
				</span> */}
				{pageTitle === 'Return' && (
					<button
						onClick={() => goBack()}
						title='Go back to the previous page'
						className='flex sm:hidden md:hover:opacity-50 items-center justify-center sm:justify-start w-full text-center'>
						<span className='relative text-lg xbold sans text-dark dark:text-light/70'>
							BACK
							<MdOutlineKeyboardArrowLeft
								size={24}
								className='absolute -left-6 top-[3px] text-dark dark:text-light/70'
							/>
						</span>
					</button>
				)}
			</div>
			<div className='px-2 flex null:flex-col sm:flex-row null:justify-center md:justify-between items-center border-b-2 border-dark/10 dark:border-light/10'>
				{pageTitle === 'Return' ? (
					<div className='w-full'>
						<button
							onClick={() => goBack()}
							className='hidden sm:flex md:hover:opacity-50 items-center justify-center sm:justify-start w-fit text-center'>
							<MdOutlineKeyboardArrowLeft
								size={24}
								className='text-dark dark:text-light/70'
							/>
							<span className='text-lg xbold sans text-dark dark:text-light/70'>BACK</span>
						</button>
					</div>
				) : (
					<span className='null:hidden md:block text-xxl serif text-dark dark:text-light/70'>
						{pageTitle}
					</span>
				)}
				<div className='sans text-md p-2 flex flex-row h-full text-dark dark:text-light/70 w-fit justify-evenly items-center text-center'>
					<AnchorLink
						title={'Timeline'}
						to={'/resources/'}
						className={`group w-full px-2 flex justify-center select-none items-center text-center `}>
						<span
							className={` text-dark dark:text-light/70 border-b-2 xbold cursor-pointer transition-colors duration-500 ${
								location.pathname === '/resources/'
									? 'border-four'
									: 'border-transparent group-md:hover:opacity-50'
							}`}>
							TIMELINE
						</span>
					</AnchorLink>
					{categories.map((category, index) => (
						<AnchorLink
							key={index + category}
							title={category}
							to={'/resources/' + category.toLowerCase() + '/'}
							className={`group w-full px-2 flex justify-center select-none items-center text-center `}>
							<span
								key={index}
								className={` text-dark dark:text-light/70 xbold cursor-pointer border-b-2 transition-colors duration-500 ${
									location.pathname.includes(category.toLowerCase())
										? 'border-four'
										: 'border-transparent group-md:hover:opacity-50'
								}`}>
								{category.toUpperCase()}
							</span>
						</AnchorLink>
					))}
				</div>
			</div>
		</nav>
	);
};

export default ResourcesNav;
