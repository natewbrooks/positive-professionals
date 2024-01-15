import React from 'react';
import pic from '../../img/bkg.png';

export default function BlogPostItem({ post }) {
	return (
		<div className='hover:opacity-50 active:scale-95 cursor-pointer w-full h-full relative bg-dark/10 aspect-video rounded-md'>
			<div className='w-full h-fit bg-dark/10'>
				<img src={pic}></img>
			</div>
			<div className='flex flex-col p-2 rounded-t-md'>
				<div className='border-b-2 pb-2 border-dark/10 flex flex-col w-full justify-center'>
					<span
						className={`sans text-lg xbold overflow-hidden text-nowrap whitespace-nowrap overflow-ellipsis `}>
						{post.title}
					</span>
					<div className='flex justify-between'>
						<span className='sans text-md text-dark/50 xbold text-nowrap'>{post.authors}</span>
						<span className='sans text-md text-dark/50 xbold text-nowrap'>{post.date}</span>
					</div>
				</div>
			</div>
			<div className='w-full h-fit p-4 flex flex-col space-y-2 items-center justify-center '>
				<span className='sans text-md text-dark/50 h-full pb-6'>{post.excerpt}</span>
			</div>
		</div>
	);
}
