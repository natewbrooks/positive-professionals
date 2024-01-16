import React, { useEffect, useState } from 'react';
import { Link, graphql } from 'gatsby';
import { useLocation } from '@reach/router';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

const ResourcesNav = ({ pageTitle }) => {
	const categories = ['Blog', 'Videos', 'Webinars'];
	const location = useLocation();

	return (
		<section
			id='resourcesNav'
			className='pt-10 null:px-2 mobile:px-6 sm:px-8 md:px-10 lg:px-20 xl:px-60  2xl:px-80 h-full w-full'>
			<div className='border-b-2 border-dark/10 pb-4 flex flex-col -space-y-2 justify-center w-full items-center'>
				<span className='text-xxxl serif text-dark'>Resources</span>
				<span className={`px-2 hidden xs:block sans text-md text-center`}>
					Explore our collection of informative videos and previous webinars.
				</span>
			</div>
			<div className='py-2 flex null:flex-col md:flex-row md:justify-between items-center'>
				<span className='null:hidden md:block text-xxl serif text-dark'>{pageTitle}</span>
				<div className='sans text-md p-2 flex flex-row h-full border-y-2 border-light/10 text-dark w-fit justify-evenly items-center text-center rounded-full'>
					<AnchorLink
						title={'Recent'}
						to={'/resources/'}
						className={`w-full px-2 flex justify-center select-none items-center text-center `}>
						<span
							className={`text-dark xbold cursor-pointer border-b-2 transition-colors duration-500 ${
								location.pathname === '/resources/' ? 'border-four' : 'border-transparent'
							}`}>
							RECENT
						</span>
					</AnchorLink>
					{categories.map((category, index) => (
						<AnchorLink
							key={index + category}
							title={category}
							to={'/resources/' + category.toLowerCase() + '/'}
							className={`w-full px-2 flex justify-center select-none items-center text-center ${
								index !== 0 ? 'border-l-2 border-light/10' : ''
							} `}>
							<span
								key={index}
								className={`text-dark xbold cursor-pointer border-b-2 transition-colors duration-500 ${
									location.pathname.includes(category.toLowerCase())
										? 'border-four'
										: 'border-transparent'
								}`}>
								{category.toUpperCase()}
							</span>
						</AnchorLink>
					))}
				</div>
			</div>
		</section>
	);
};

export default ResourcesNav;
