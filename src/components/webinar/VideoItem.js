import { AnchorLink } from 'gatsby-plugin-anchor-links';
import React from 'react';

export default function VideoItem({ video }) {
	return (
		<div className='w-full h-full flex flex-col'>
			<div className='bg-dark/10 aspect-video w-84 '>
				<iframe
					className='w-full h-full'
					src='https://www.youtube.com/embed/jNQXAC9IVRw'
					title='Me at the zoo'
					frameBorder='0'
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
					allowFullScreen></iframe>
			</div>
			<AnchorLink
				to={video.slug}
				className='md:hover:opacity-70 bg-light/50 dark:bg-dark/50 transition-all duration-300 flex flex-col h-fit w-full p-2 rounded-b-md'>
				<div className='pb-2 w-full flex flex-col overflow-hidden border-b-2 border-dark/10 dark:border-light/10 text-dark/50 dark:text-light/50'>
					<span className='w-full sans text-sm xbold text-nowrap whitespace-nowrap'>
						PUBLISHED {video.date.toUpperCase()}
					</span>
					<div
						className={`dark:text-light/70 text-dark h-[50px] w-full sans text-lg xbold leading-tight line-clamp`}>
						<span>{video.title}</span>
					</div>
				</div>
				<span className='h-max pt-2 sans text-sm line-clamp text-dark/50 dark:text-light/50'>
					{video.description}
				</span>
			</AnchorLink>
		</div>
	);
}
