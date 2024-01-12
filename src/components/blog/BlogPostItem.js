import React from 'react';
import groupIcon from '../../img/logo.svg';

export default function BlogPostItem({ post }) {
	return (
		<div className='w-full h-full relative bg-dark/10 aspect-video rounded-md'>
			<div className='flex flex-col p-2 rounded-t-md'>
				<div className='border-b-2 pb-2 border-dark/10 flex flex-col w-full justify-center'>
					<span
						className={`sans text-lg xbold overflow-hidden text-nowrap whitespace-nowrap overflow-ellipsis `}>
						{post.title}
					</span>
					<span className='sans text-md text-dark/50 xbold text-nowrap'>@ {post.date}</span>
				</div>
			</div>
			<div className='w-full h-fit p-8 flex flex-col space-y-2 items-center justify-center'>
				<div className='w-full h-full max-h-[33%] bg-dark/10 p-4 rounded-md'>
					<img src={groupIcon}></img>
				</div>
				<span className='sans text-md text-dark/50 h-full pb-6'>{post.excerpt}</span>
			</div>
			<div className='hidden md:block text-light absolute bottom-2 right-2 hover:opacity-50 active:scale-95 select-none cursor-pointer bg-dark px-2 py-1 xbold sans text-md lg:text-lg rounded-md'>
				READ POST
			</div>
		</div>
	);
}
