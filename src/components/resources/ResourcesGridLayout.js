import React, { useState } from 'react';
import BlogPostItem from '../blog/BlogPostItem';
import VideoItem from '../webinar/VideoItem';
import SeeMore from '../pieces/SeeMore';

const ResourcesGridLayout = ({ mediaItems }) => {
	const [itemsToShow, setItemsToShow] = useState(4); // Starting with 4 items (2 rows)
	const itemsPerRow = 2;

	const handleLoadMore = () => {
		setItemsToShow((prevItemsToShow) => prevItemsToShow + itemsPerRow * 2); // Load 2 more rows each time
	};

	const hasMoreItems = itemsToShow < mediaItems.length;

	return (
		<div className='w-full h-full mb-20'>
			<div className='w-full null:text-center sm:text-end text-dark/50 dark:text-light/50 sans xbold text-md pb-2'>
				SHOWING {hasMoreItems ? itemsToShow : mediaItems.length} OF {mediaItems.length}
			</div>
			<div className='w-full h-full justify-items-center grid null:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xxl:grid-cols-4 gap-x-3 null:gap-y-8 md:gap-y-6 '>
				{mediaItems.slice(0, itemsToShow).map((item, index) => {
					return item.isVideo === false ? (
						<BlogPostItem
							key={`blog-${index}`}
							post={item}
						/>
					) : item.isVideo === true ? (
						<VideoItem
							key={`video-${index}`}
							video={item}
						/>
					) : null;
				})}
			</div>
			{hasMoreItems && (
				<SeeMore
					colorClass={`text-secondary`}
					text={'Load More'}
					onClick={handleLoadMore}
				/>
			)}
			{!hasMoreItems && (
				<div className='w-full null:text-center sm:text-end pt-4'>
					<span className={`text-secondary xbold sans text-nowrap`}>END OF RESULTS</span>
				</div>
			)}
		</div>
	);
};

export default ResourcesGridLayout;
