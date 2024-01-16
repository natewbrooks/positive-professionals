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
			<div className='bg-dark/10 flex flex-col h-fit w-full p-2 rounded-b-md'>
				<AnchorLink
					to={video.slug}
					className='hover:opacity-50 pb-2 w-full flex flex-col overflow-hidden border-b-2 border-dark/10'>
					<span className='w-full sans text-sm text-dark/50 xbold text-nowrap whitespace-nowrap'>
						PUBLISHED {video.date.toUpperCase()}
					</span>
					<div className={`w-full sans text-md xbold leading-tight`}>
						<span>{video.title}</span>
					</div>
				</AnchorLink>
				<span className='pt-2 sans text-sm text-dark/50'>{video.description}</span>
			</div>
		</div>
	);
}
