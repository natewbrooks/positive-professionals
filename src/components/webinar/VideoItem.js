import { AnchorLink } from 'gatsby-plugin-anchor-links';
import React from 'react';

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

export default function VideoItem({ video, searchTerm }) {
	const titleHighlighted = highlightSearchTerm(video.title, searchTerm);
	const descriptionHighlighted = highlightSearchTerm(video.description, searchTerm);
	const dateHighlighted = highlightSearchTerm(video.date.toUpperCase(), searchTerm);

	return (
		<div className='sm:p-4 md:p-6 bg-light/30 dark:bg-dark/30 rounded-md w-full h-full flex flex-col'>
			<AnchorLink
				to={video.slug}
				className='md:hover:opacity-70 flex flex-col h-fit w-full rounded-b-md'>
				<div className='pb-2 w-full flex flex-col text-dark/50 dark:text-light/50'>
					<span className='w-full sans text-sm xbold text-nowrap whitespace-nowrap'>
						PUBLISHED {dateHighlighted}
					</span>
					<span
						className={`dark:text-light/70 text-dark h-[54px] sans text-lg xbold leading-snug line-clamp`}>
						{titleHighlighted}
					</span>
				</div>
			</AnchorLink>
			<div className='bg-dark/10 aspect-video w-full h-fit'>
				<iframe
					className='w-full h-full aspect-video'
					src='https://www.youtube.com/embed/jNQXAC9IVRw'
					title='Me at the zoo'
					frameBorder='0'
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
					allowFullScreen></iframe>
			</div>
			<span className='pt-2 sans text-sm line-clamp text-dark dark:text-light/50 '>
				{descriptionHighlighted}
			</span>
		</div>
	);
}
