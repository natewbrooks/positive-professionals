import React, { useState } from 'react';
import pic from '../../img/bkg.png';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

export default function BlogPostItem({ post }) {
	const isNewPost = () => {
		if (post.date) {
			const postDate = new Date(post.date);
			const currentDate = new Date();
			const threeDaysAgo = new Date(currentDate.setDate(currentDate.getDate() - 3));

			return postDate >= threeDaysAgo;
		}
		return false;
	};

	return (
		<AnchorLink
			to={post.slug}
			className='group md:hover:opacity-80 w-full h-full relative transition-all duration-300  bg-dark/10 dark:bg-light/10 pb-2 rounded-b-md '>
			<div className='absolute -top-5 -left-0 flex space-x-1'>
				{isNewPost() && (
					<div className='bg-red-400 rounded-md px-2 py-1 text-sm sans xbold text-light dark:text-darkAccent'>
						NEW
					</div>
				)}
				{post.featuredpost && (
					<div className='bg-four rounded-md px-2 py-1 text-sm sans xbold text-light dark:text-darkAccent'>
						FEATURED
					</div>
				)}
			</div>
			<div className='w-full h-full flex flex-col'>
				<div className='w-full h-full flex flex-col px-4 pt-4 rounded-t-md'>
					<div className='h-fit cursor-pointer flex flex-col'>
						<div className='flex flex-col w-full overflow-hidden '>
							<div className='w-full flex flex-col text-dark/50 dark:text-light/50'>
								<span className='w-full sans text-sm xbold text-nowrap'>
									PUBLISHED {post.date.toUpperCase()}
								</span>
								{post.authors && (
									<span className='w-fit sans text-sm xbold text-nowrap '>
										{post.authors.join(', ').toUpperCase()}
									</span>
								)}
							</div>
							<span
								className={`h-[48px] overflow-hidden w-full sans text-lg xbold leading-tight xbold line-clamp-2`}>
								{post.title}
							</span>
						</div>

						<div className='px-4 py-2 drop-shadow-md cursor-pointer w-full '>
							<img
								src={pic}
								className='max-h-[320px]'></img>
						</div>
						<div
							className={`max-h-[200px] transform transition-all duration-300 py-1 px-2 text-dark dark:text-light/50 w-fit sans text-sm line-clamp-4`}>
							{post.description}
						</div>
					</div>
				</div>
			</div>
		</AnchorLink>
	);
}
