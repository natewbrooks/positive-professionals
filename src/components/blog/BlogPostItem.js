import React, { useState } from 'react';
import pic from '../../img/bkg.png';

export default function BlogPostItem({ post }) {
	const [showDescription, setShowDescription] = useState(false);
	return (
		<div className='w-full h-full relative aspect-video space-y-[0.15rem]'>
			<div className='transition-all duration-300 w-full bg-dark/10 flex flex-col rounded-b-md'>
				<div className='w-full flex flex-col px-2 pt-2 rounded-t-md overflow-hidden'>
					<div className='group cursor-pointer flex flex-col w-full '>
						<div className='w-full flex justify-between'>
							<span className='w-full sans text-sm text-dark/50 xbold text-nowrap'>
								PUBLISHED {post.date}
							</span>
							{post.authors && (
								<span className='w-fit sans text-sm text-dark/50 xbold text-nowrap '>
									{post.authors}
								</span>
							)}
						</div>
						<span
							className={`pb-2 w-full border-b-2 border-dark/10  sans text-md xbold leading-tight xbold`}>
							{post.title}
						</span>
					</div>

					<div className='hover:opacity-50 cursor-pointer w-full h-fit bg-dark/10'>
						<img src={pic}></img>
					</div>
					<div
						onClick={() => setShowDescription(!showDescription)}
						className='hover:opacity-50 active:scale-95 cursor-pointer w-full justify-center rounded-b-md flex bg-dark/10'>
						<span className='py-1 sans xbold text-sm text-dark'>
							{showDescription ? 'CLOSE EXCERPT' : 'OPEN EXCERPT'}
						</span>
					</div>
					<div
						style={{
							maxHeight: showDescription ? '600px' : '0px',
						}}
						className={`transform transition-all duration-300 py-1 px-2 text-dark/50 w-full sans text-sm `}>
						{post.excerpt}
					</div>
				</div>
			</div>
		</div>
	);
}
