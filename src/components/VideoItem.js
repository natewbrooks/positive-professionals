import React from 'react';

export default function VideoItem({ title, date, description, colorClass }) {
	return (
		<div className='flex flex-col '>
			<div className='bg-dark/10 aspect-video w-84 border-b-2 border-light'>
				<iframe
					className='w-full h-full'
					src={'https://www.youtube.com/watch?v=jNQXAC9IVRw'}></iframe>
			</div>
			<div className='bg-dark/10 flex flex-col w-full h-fit p-2 rounded-b-md'>
				<div className='flex w-full items-center justify-between'>
					<span className={`sans text-md xbold `}>{title}</span>
					<span className='sans text-xs text-dark xbold'>{date}</span>
				</div>
				<span className='sans text-xs text-dark/50'>{description}</span>
			</div>
		</div>
	);
}
