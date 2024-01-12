import React from 'react';

export default function VideoItem({ video }) {
	return (
		<div className='flex flex-col'>
			<div className='bg-dark/10 aspect-video w-84 '>
				<iframe
					className='w-full h-full'
					src='https://www.youtube.com/embed/jNQXAC9IVRw'
					title='Me at the zoo'
					frameBorder='0'
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
					allowFullScreen></iframe>
			</div>
			<div className='bg-dark/10 flex flex-col w-full h-fit p-2 rounded-b-md'>
				<div className='flex w-full items-center justify-between py-1 border-b-2 border-dark/10 '>
					<span
						className={`sans text-md xbold overflow-hidden whitespace-nowrap overflow-ellipsis pr-4`}>
						{video.title}
					</span>
					<span className='sans text-md text-dark/50 xbold text-nowrap'>@ {video.date}</span>
				</div>
				<span className='py-2 sans text-sm text-dark/50'>{video.description}</span>
			</div>
		</div>
	);
}
