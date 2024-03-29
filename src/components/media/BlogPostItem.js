import React, { useState } from 'react';
import pic from '../../../static/img/bkg.png';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const highlightSearchTerm = (text, searchTerm) => {
	if (!searchTerm) return text;

	const parts = text.split(new RegExp(`(${searchTerm})`, 'gi'));
	return parts.map((part, index) =>
		part.toLowerCase() === searchTerm.toLowerCase() ? (
			<span
				key={index}
				className='bg-yellow-300 rounded-sm  text-dark dark:text-dark'>
				{part}
			</span>
		) : (
			part
		)
	);
};

export default function BlogPostItem({ post, searchTerm }) {
	const howManyDaysIsAPostStillNew = 7;
	const isNewPost = () => {
		if (post.date) {
			const postDate = new Date(post.date);
			const currentDate = new Date();
			const threeDaysAgo = new Date(
				currentDate.setDate(currentDate.getDate() - howManyDaysIsAPostStillNew)
			);

			return postDate >= threeDaysAgo;
		}
		return false;
	};

	const titleHighlighted = highlightSearchTerm(post.title, searchTerm);
	const authorsHighlighted = post.authors
		? highlightSearchTerm(post.authors.join(', ').toUpperCase(), searchTerm)
		: null;
	const descriptionHighlighted = highlightSearchTerm(post.description, searchTerm);
	const dateHighlighted = highlightSearchTerm(post.date.toUpperCase(), searchTerm);

	const imageData = getImage(post.image);

	return (
		<AnchorLink
			to={post.slug}
			className='group md:hover:opacity-80 w-full h-full justify-center items-center text-start relative  duration-300 transition-colors'>
			<div className='w-full h-full justify-center items-center flex flex-col'>
				<div className='leading-snug w-full h-full flex flex-col'>
					<div className='h-fit cursor-pointer flex flex-col'>
						<div className='flex space-x-1 pb-1 '>
							{isNewPost() && (
								<div className='bg-four dark:bg-light rounded-md px-2 mb-1 text-xs sans xbold text-light dark:text-dark'>
									NEW
								</div>
							)}

							<div
								className={`${
									post.featuredpost ? 'visible' : 'invisible'
								} bg-secondary dark:bg-primary rounded-md px-2 mb-1 text-xs sans xbold text-light dark:text-dark`}>
								FEATURED
							</div>
						</div>
						<div className='flex flex-col w-full overflow-hidden space-y-1'>
							<div className='w-full flex flex-col text-dark/50 dark:text-light/50'>
								<span className='w-full sans text-sm xbold text-nowrap'>
									PUBLISHED {dateHighlighted}
								</span>
								{post.authors && (
									<span className='w-fit sans text-sm xbold text-nowrap '>
										BY {authorsHighlighted}
									</span>
								)}
							</div>
							<span
								className={`h-[52px] text-dark dark:text-light/70 overflow-hidden w-full sans text-lg xbold leading-snug xbold line-clamp-2`}>
								{titleHighlighted}
							</span>
						</div>

						<div className='py-2 drop-shadow-md cursor-pointer flex justify-center w-fit '>
							{imageData && (
								<GatsbyImage
									image={imageData}
									alt={post.title}
									className='w-full null:h-[240px] lg:h-[280px]'
								/>
							)}
							{!imageData && (
								<img
									alt='no image'
									src={pic}
									className='h-[280px]'></img>
							)}
						</div>

						<div
							className={`max-h-[80px] transform transition-all duration-300 py-1  text-dark dark:text-light/50 w-fit sans text-sm line-clamp-4`}>
							{descriptionHighlighted}
						</div>
					</div>
				</div>
			</div>
		</AnchorLink>
	);
}
