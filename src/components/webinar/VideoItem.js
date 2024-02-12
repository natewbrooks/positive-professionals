import { AnchorLink } from 'gatsby-plugin-anchor-links';
import React from 'react';

const highlightSearchTerm = (text, searchTerm) => {
	if (!text || !searchTerm) return text;

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

export default function VideoItem({ video, searchTerm }) {
	const howManyDaysIsAVideoStillNew = 7;
	const isNewVideo = () => {
		if (video.date) {
			const postDate = new Date(video.date);
			const currentDate = new Date();
			const threeDaysAgo = new Date(
				currentDate.setDate(currentDate.getDate() - howManyDaysIsAVideoStillNew)
			);

			return postDate >= threeDaysAgo;
		}
		return false;
	};

	const titleHighlighted = highlightSearchTerm(video.title, searchTerm);
	const descriptionHighlighted = highlightSearchTerm(video.description, searchTerm);
	const dateHighlighted = highlightSearchTerm(video.date.toUpperCase(), searchTerm);
	const presentorsHighlighted = video.presentors
		? highlightSearchTerm(video.presentors.join(', ').toUpperCase(), searchTerm)
		: null;
	let embedURL;

	if (video.videoURL) {
		embedURL = video.videoURL.replace('watch?v=', 'embed/');
	}

	return (
		<div className='w-full h-full flex flex-col'>
			<AnchorLink
				to={video.slug}
				className='md:hover:opacity-70 flex flex-col h-fit w-full rounded-b-md'>
				<div className='pb-2 w-full flex flex-col text-dark/50 dark:text-light/50'>
					<div className='flex space-x-1 '>
						{isNewVideo() && (
							<div className='bg-secondary rounded-md px-2 mb-1 text-xs sans xbold text-light dark:text-dark'>
								NEW
							</div>
						)}

						<div
							className={`${
								video.featuredpost ? 'visible' : 'invisible'
							} bg-four rounded-md px-2 mb-1 text-xs sans xbold text-light dark:text-dark`}>
							FEATURED
						</div>
					</div>
					<span className='w-full sans text-sm xbold text-nowrap whitespace-nowrap'>
						PUBLISHED {dateHighlighted}
					</span>
					{video.presentors && (
						<span className='w-full sans text-sm xbold text-nowrap whitespace-nowrap'>
							BY {presentorsHighlighted}
						</span>
					)}
					<span
						className={`dark:text-light/70 text-dark h-[54px] sans text-lg xbold leading-snug line-clamp`}>
						{titleHighlighted}
					</span>
				</div>
			</AnchorLink>
			<div className='bg-dark/10 aspect-video w-full h-fit max-h-[320px]'>
				<iframe
					className='w-full h-full'
					src={embedURL}
					title={titleHighlighted}
					allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
					frameBorder='0'
					webkitallowfullscreen='true'
					mozallowfullscreen='true'
					allowFullScreen
				/>
			</div>
			<span className='pt-2 sans text-sm line-clamp text-dark dark:text-light/50 '>
				{descriptionHighlighted}
			</span>
		</div>
	);
}
