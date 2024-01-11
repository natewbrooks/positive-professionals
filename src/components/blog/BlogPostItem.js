import React from 'react';
import groupIcon from '../../img/logo.svg';

export default function BlogPostItem({ post }) {
	return (
		<div className='w-full h-full relative bg-dark/10 aspect-video rounded-md'>
			<div className='bg-dark/10 flex flex-col p-2 rounded-t-md'>
				<div className='flex flex-col w-full justify-center'>
					<span
						className={`border-b-2 border-dark/10 sans text-lg xbold overflow-hidden text-nowrap whitespace-nowrap overflow-ellipsis `}>
						{post.title}
					</span>
					<span className='sans text-md pt-2 text-dark/50 xbold text-nowrap'>
						Published: {post.date}
					</span>
				</div>
			</div>
			<div className='w-full h-fit p-8 flex flex-col space-y-2 items-center justify-center'>
				<img
					src={groupIcon}
					className='w-full h-full max-h-[33%]'></img>
				<span className='sans text-md text-dark/50 h-full pb-6'>{post.excerpt}</span>
			</div>
			<div className='text-light absolute bottom-2 right-2 hover:opacity-50 active:scale-95 select-none cursor-pointer bg-dark px-2 py-1 xbold sans text-sm rounded-md'>
				READ POST
			</div>
		</div>
	);
}