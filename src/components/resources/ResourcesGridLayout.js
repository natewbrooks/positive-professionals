import React, { useState } from 'react';
import BlogPostItem from '../blog/BlogPostItem';
import VideoItem from '../webinar/VideoItem';
import SeeMore from '../pieces/SeeMore';
import { FaSearch } from 'react-icons/fa';

const ResourcesGridLayout = ({ mediaItems }) => {
	const [itemsToShow, setItemsToShow] = useState(8); // Adjust this to 4 if each row should contain 2 items
	const [searchTerm, setSearchTerm] = useState('');
	const itemsPerRow = 4; // Adjust based on your row definition

	const handleLoadMore = () => {
		setItemsToShow((prevItemsToShow) => prevItemsToShow + itemsPerRow * 2); // Load 2 more rows each time
	};

	const filteredItems = mediaItems.filter(
		(item) =>
			(item.date && item.date.toLowerCase().includes(searchTerm.toLowerCase())) ||
			(item.authors && item.authors.join(', ').toLowerCase().includes(searchTerm.toLowerCase())) ||
			(item.presentors &&
				item.presentors.join(', ').toLowerCase().includes(searchTerm.toLowerCase())) ||
			(item.title && item.title.toLowerCase().includes(searchTerm.toLowerCase())) ||
			(item.description && item.description.toLowerCase().includes(searchTerm.toLowerCase()))
	);

	const hasMoreItems = itemsToShow < filteredItems.length;
	const showingCount = Math.min(itemsToShow, filteredItems.length);

	return (
		<div className='w-full h-full mb-20'>
			<div className='w-full h-fit flex null:justify-center sm:justify-end  mb-2 items-center'>
				<div className='relative -space-x-1 flex w-fit h-fit'>
					<div className='bg-dark dark:bg-light/70 w-fit h-full flex justify-center items-center py-3 lg:py-2 px-3 rounded-l-full'>
						<FaSearch
							size={14}
							className='text-light dark:text-darkAccent'
						/>
					</div>
					<input
						type='text'
						placeholder='SEARCH KEYWORDS...'
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
						className='w-[180px] text-md placeholder:text-md lg:text-sm lg:placeholder:text-sm xbold sans px-2 border-2 border-l-0 border-dark dark:border-light/70 rounded-r-full outline-none bg-light dark:bg-dark text-dark placeholder:text-dark/50 dark:placeholder:text-light/50 dark:text-light/70'
					/>
				</div>
			</div>
			<div className='w-full null:text-center sm:text-end text-dark/50 dark:text-light/50 sans xbold text-md pb-4 sm:pb-2'>
				SHOWING {showingCount} OF {mediaItems.length}
			</div>
			<div className='w-full h-full justify-items-center grid null:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xxl:grid-cols-4 null:gap-y-6 gap-x-4 '>
				{filteredItems.slice(0, itemsToShow).map((item, index) => {
					return item.isVideo ? (
						<VideoItem
							key={`video-${index}`}
							video={item}
							searchTerm={searchTerm}
						/>
					) : (
						<BlogPostItem
							key={`blog-${index}`}
							post={item}
							searchTerm={searchTerm}
						/>
					);
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
