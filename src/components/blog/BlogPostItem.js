import React, { useState } from 'react';
import pic from '../../img/bkg.png';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

const highlightSearchTerm = (text, searchTerm) => {
	if (!searchTerm) return text;

	const parts = text.split(new RegExp(`(${searchTerm})`, 'gi'));
	return parts.map((part, index) =>
		part.toLowerCase() === searchTerm.toLowerCase() ? (
			<span
				key={index}
				className='bg-four rounded-md px-1 text-light dark:text-dark'>
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

	return (
		<AnchorLink
			to={post.slug}
			className='group md:hover:opacity-80 w-full h-full justify-center items-center relative  duration-300 transition-colors pb-2 rounded-md '>
			<div className='bg-light/30 dark:bg-dark/30 rounded-md w-full h-full justify-center items-center flex flex-col'>
				<div className='w-full h-full flex flex-col sm:p-4 md:p-6 rounded-t-md'>
					<div className='h-fit cursor-pointer flex flex-col'>
						<div className='flex space-x-1 '>
							{isNewPost() && (
								<div className='bg-secondary rounded-md px-2 mb-1 text-xs sans xbold text-light dark:text-dark'>
									NEW
								</div>
							)}
							{post.featuredpost && (
								<div className='bg-tertiary rounded-md px-2 mb-1 text-xs sans xbold text-light dark:text-dark'>
									FEATURED
								</div>
							)}
						</div>
						<div className='flex flex-col w-full overflow-hidden '>
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
								className={`h-[54px] text-dark dark:text-light/70 overflow-hidden w-full sans text-lg xbold leading-snug xbold line-clamp-2`}>
								{titleHighlighted}
							</span>
						</div>

						<div className='py-2 drop-shadow-md cursor-pointer flex justify-center w-fit '>
							<img
								src={pic}
								alt={post.title + ' picture'}
								className='max-h-[320px]'></img>
						</div>

						<div
							className={`max-h-[200px] transform transition-all duration-300 py-1 px-2 text-dark dark:text-light/50 w-fit sans text-sm line-clamp-4`}>
							{descriptionHighlighted}
						</div>
					</div>
				</div>
			</div>
		</AnchorLink>
	);
}
