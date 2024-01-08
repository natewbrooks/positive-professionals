import React from 'react';

export default function VideoItem({ video }) {
	return (
		<div className='flex flex-col space-y-1'>
			<div className='bg-dark/10 aspect-video w-84 '>
				<iframe
					className='w-full h-full'
					src='https://www.youtube.com/embed/jNQXAC9IVRw'
					title='Me at the zoo'
					frameborder='0'
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
					allowfullscreen></iframe>
			</div>
			<div className='bg-dark/10 flex flex-col w-full h-fit p-2 rounded-b-md'>
				<div className='flex w-full items-center justify-between'>
					<span className={`sans text-md xbold `}>{video.title}</span>
					<span className='sans text-xs text-dark xbold'>{video.date}</span>
				</div>
				<span className='sans text-xs text-dark/50'>{video.description}</span>
			</div>
		</div>
	);
}
