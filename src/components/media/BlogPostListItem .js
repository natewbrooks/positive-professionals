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

export default function BlogPostListItem({ post, searchTerm }) {
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
			className='group md:hover:opacity-80 w-full max-h-[150px] h-full justify-center items-center relative duration-300 transition-colors'>
			<div className='relative w-full h-full justify-center items-center flex flex-col sm:flex-row'>
				<div className='hidden sm:flex drop-shadow-md cursor-pointer justify-center items-center w-full h-full md:w-fit null:pb-4 sm:pb-0'>
					{imageData && (
						<GatsbyImage
							image={imageData}
							alt={post.title}
							className='w-full md:w-[200px] h-full'
						/>
					)}
					{!imageData && (
						<img
							alt='no image'
							src={pic}
							className='h-[100px]'></img>
					)}
				</div>
				<div className={`sm:pl-2 md:pl-4 flex flex-col w-full h-full relative top-0`}>
					<div className='relative flex flex-col w-full overflow-hidden space-y-1'>
						<div className='flex space-x-1 '>
							{isNewPost() && (
								<div className='bg-four dark:bg-light rounded-md px-2 mb-1 text-xs sans xbold text-light dark:text-dark'>
									NEW
								</div>
							)}

							<div
								className={`${
									post.featuredpost ? '' : 'hidden'
								} bg-secondary dark:bg-primary rounded-md px-2 mb-1 text-xs sans xbold text-light dark:text-dark`}>
								FEATURED
							</div>
						</div>
						<div className='relative top-0 h-full w-full flex null:flex-col md:flex-row text-dark/50 dark:text-light/50'>
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
							className={`text-dark dark:text-light/70 overflow-hidden w-full sans null:text-lg sm:text-2xl xbold leading-snug xbold md:line-clamp-2`}>
							{titleHighlighted}
						</span>
					</div>
				</div>
			</div>
		</AnchorLink>
	);
}
