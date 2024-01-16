import React, { useState } from 'react';
import pic from '../../img/bkg.png';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

export default function BlogPostItem({ post }) {
	const [showDescription, setShowDescription] = useState(false);
	const isNewPost = () => {
		const postDate = new Date(post.date);
		const currentDate = new Date();
		const threeDaysAgo = new Date(currentDate.setDate(currentDate.getDate() - 3));

		return postDate >= threeDaysAgo;
	};

	return (
		<div className='w-full h-full relative aspect-video space-y-[0.15rem]'>
			<div className='absolute -top-4 -left-0 flex space-x-1'>
				{isNewPost() && (
					<div className='bg-red-400 rounded-md px-2 text-sm sans xbold text-light'>NEW</div>
				)}
				{post.featuredpost && (
					<div className='bg-four rounded-md px-2 text-sm sans xbold text-light'>FEATURED</div>
				)}
			</div>
			<div className='transition-all duration-300 w-full bg-dark/10 flex flex-col rounded-b-md'>
				<div className='w-full flex flex-col px-2 pt-2 rounded-t-md overflow-hidden'>
					<AnchorLink
						to={post.slug}
						className='group cursor-pointer flex flex-col'>
						<div className='flex flex-col w-full '>
							<div className='w-full flex null:flex-col md:flex-row justify-between'>
								<span className='w-full sans text-sm text-dark/50 xbold text-nowrap'>
									PUBLISHED {post.date.toUpperCase()}
								</span>
								{post.authors && (
									<span className='w-fit sans text-sm text-dark/50 xbold text-nowrap '>
										{post.authors.join(', ').toUpperCase()}
									</span>
								)}
							</div>
							<span className={`pb-2 w-full sans text-md xbold leading-tight xbold`}>
								{post.title}
							</span>
						</div>

						<div className='group-hover:opacity-80 cursor-pointer w-full h-fit bg-dark/10'>
							<img src={pic}></img>
						</div>
					</AnchorLink>
					<div
						onClick={() => setShowDescription(!showDescription)}
						className='hover:opacity-50 active:scale-95 cursor-pointer w-full justify-center rounded-b-md flex bg-dark/10'>
						<span className='py-1 sans xbold text-sm text-dark'>
							{showDescription ? 'CLOSE EXCERPT' : 'OPEN EXCERPT'}
						</span>
					</div>
					<div
						style={{
							maxHeight: showDescription ? '600px' : '0px',
						}}
						className={`transform transition-all duration-300 py-1 px-2 text-dark/50 w-full sans text-sm `}>
						{post.description}
					</div>
				</div>
			</div>
		</div>
	);
}
