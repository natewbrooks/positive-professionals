import React, { useEffect, useState } from 'react';
import { kebabCase } from 'lodash';
import { Helmet } from 'react-helmet';
import { Link, graphql } from 'gatsby';
import Layout from '../../components/Layout';
import BlogPostItem from '../../components/blog/BlogPostItem';
import VideoItem from '../../components/webinar/VideoItem';
import SeeMore from '../../components/pieces/SeeMore';

const Resources = ({}) => {
	const categories = ['Recent', 'Blog', 'Videos', 'Webinars'];
	const [activeFilter, setActiveFilter] = useState(categories[1]);
	const [itemsToShow, setItemsToShow] = useState(4); // Starting with 4 items (2 rows)
	const itemsPerRow = 2;

	const blogPosts = [
		{
			title: 'Navigating Career Transitions: Insights from a Professional Coach',
			date: 'Sep 2024',
			excerpt:
				'Explore key strategies for successful career transitions and how professional coaching can guide you through these pivotal moments.',
			colorClass: 'text-tertiary',
		},
		{
			title: 'Maximizing Leadership Potential with Executive Coaching',
			date: 'Aug 2024',
			excerpt:
				'Discover how executive coaching can unlock your leadership abilities and drive organizational success. Discover how executive coaching can unlock your leadership abilities and drive organizational success. Discover how executive coaching can unlock your leadership abilities and drive organizational success.',
			colorClass: 'text-secondary',
		},
		{
			title: 'The Power of Mindset in Professional Development',
			date: 'Jul 2024',
			excerpt:
				'Uncover the critical role of mindset in professional growth and how coaching can help in reshaping your thought patterns for success.',
			colorClass: 'text-primary',
		},
		{
			title: 'Navigating Career Transitions: Insights from a Professional Coach',
			date: 'Sep 2024',
			excerpt:
				'Explore key strategies for successful career transitions and how professional coaching can guide you through these pivotal moments.',
			colorClass: 'text-tertiary',
		},
		{
			title: 'Maximizing Leadership Potential with Executive Coaching',
			date: 'Aug 2024',
			excerpt:
				'Discover how executive coaching can unlock your leadership abilities and drive organizational success. Discover how executive coaching can unlock your leadership abilities and drive organizational success. Discover how executive coaching can unlock your leadership abilities and drive organizational success.',
			colorClass: 'text-secondary',
		},
		{
			title: 'The Power of Mindset in Professional Development',
			date: 'Jul 2024',
			excerpt:
				'Uncover the critical role of mindset in professional growth and how coaching can help in reshaping your thought patterns for success.',
			colorClass: 'text-primary',
		},
		{
			title: 'Navigating Career Transitions: Insights from a Professional Coach',
			date: 'Sep 2024',
			excerpt:
				'Explore key strategies for successful career transitions and how professional coaching can guide you through these pivotal moments.',
			colorClass: 'text-tertiary',
		},
		{
			title: 'Maximizing Leadership Potential with Executive Coaching',
			date: 'Aug 2024',
			excerpt:
				'Discover how executive coaching can unlock your leadership abilities and drive organizational success. Discover how executive coaching can unlock your leadership abilities and drive organizational success. Discover how executive coaching can unlock your leadership abilities and drive organizational success.',
			colorClass: 'text-secondary',
		},
		{
			title: 'The Power of Mindset in Professional Development',
			date: 'Jul 2024',
			excerpt:
				'Uncover the critical role of mindset in professional growth and how coaching can help in reshaping your thought patterns for success.',
			colorClass: 'text-primary',
		},
		{
			title: 'Navigating Career Transitions: Insights from a Professional Coach',
			date: 'Sep 2024',
			excerpt:
				'Explore key strategies for successful career transitions and how professional coaching can guide you through these pivotal moments.',
			colorClass: 'text-tertiary',
		},
		{
			title: 'Maximizing Leadership Potential with Executive Coaching',
			date: 'Aug 2024',
			excerpt:
				'Discover how executive coaching can unlock your leadership abilities and drive organizational success. Discover how executive coaching can unlock your leadership abilities and drive organizational success. Discover how executive coaching can unlock your leadership abilities and drive organizational success.',
			colorClass: 'text-secondary',
		},
		{
			title: 'The Power of Mindset in Professional Development',
			date: 'Jul 2024',
			excerpt:
				'Uncover the critical role of mindset in professional growth and how coaching can help in reshaping your thought patterns for success.',
			colorClass: 'text-primary',
		},
	];

	const videoCatalog = [
		{
			title: 'Christmas came early',
			date: 'Jun 2024',
			description:
				'This is a short and brief non descript description of the video. Should probably be no longer than two sentences.',
			colorClass: 'text-secondary',
		},
		{
			title: 'Adam Driver does it again',
			date: 'Mar 2024',
			description:
				'This is a short and brief non descript description of the video. Should probably be no longer than two sentences.',
			colorClass: 'text-four',
		},
		{
			title: 'Robin Williams best moments',
			date: 'Jan 2024',
			description:
				'This is a short and brief non descript description of the video. Should probably be no longer than two sentences.',
			colorClass: 'text-primary',
		},
		// Add more video items as needed
	];

	const previousWebinars = [
		{
			title: 'Superman sees the skies',
			date: 'Dec 2023',
			description:
				'This is a short and brief non descript description of the video. Should probably be no longer than two sentences.',
			colorClass: 'text-primary',
		},
		{
			title: 'Me at the zoo',
			date: 'Oct 2023',
			description:
				'This is a short and brief non descript description of the video. Should probably be no longer than two sentences.',
			colorClass: 'text-secondary',
		},
		{
			title: 'Garfield eats lasagna Garfield eats lasagna Garfield eats lasagna',
			date: 'Sep 2023',
			description:
				'This is a short and brief non descript description of the video. Should probably be no longer than two sentences.',
			colorClass: 'text-tertiary',
		},
		// Add more video items as needed
	];

	useEffect(() => {
		// Function to check if the current hash matches any of the categories
		const updateActiveFilterBasedOnHash = () => {
			const currentHash = window.location.hash;

			categories.forEach((category) => {
				if (currentHash === `/resources#${category.toLowerCase()}`) {
					setActiveFilter(category);
				}
			});
		};

		// Call the function when the component mounts
		updateActiveFilterBasedOnHash();

		// Add event listener for hash change
		window.addEventListener('hashchange', updateActiveFilterBasedOnHash, false);

		// Cleanup
		return () => {
			window.removeEventListener('hashchange', updateActiveFilterBasedOnHash, false);
		};
	}, [categories]);

	const handleLoadMore = () => {
		setItemsToShow((prevItemsToShow) => prevItemsToShow + itemsPerRow * 2); // Load 2 more rows each time
	};

	const getFilteredItems = () => {
		let items;
		switch (activeFilter) {
			case 'Blog':
				items = blogPosts;
				break;
			case 'Videos':
				items = videoCatalog;
				break;
			case 'Webinars':
				items = previousWebinars;
				break;
			default:
				items = [];
		}
		return items.slice(0, itemsToShow);
	};

	const hasMoreItems = getFilteredItems().length < blogPosts.length;

	return (
		<>
			<Layout>
				<section className='null:px-2 mobile:px-6 sm:px-8 md:px-10 lg:px-20 xl:px-60  2xl:px-80 h-full w-full'>
					<div
						id={activeFilter}
						className='w-full h-full p-8 pb-40 space-y-4'>
						<div className='flex null:flex-col md:flex-row md:justify-between items-center'>
							<span className='text-xxl serif text-dark'>{activeFilter}</span>
							<div className='sans text-md px-2 flex flex-row h-full border-y-2 border-light/10 text-dark w-fit justify-evenly items-center text-center rounded-full'>
								{categories.map((category, index) => (
									<div
										className={`w-full px-2 flex justify-center select-none items-center text-center ${
											index !== 0 ? 'border-l-2 border-light/10' : ''
										} `}>
										<span
											key={index}
											onClick={() => setActiveFilter(category)}
											className={`text-dark xbold cursor-pointer border-b-2 transition-colors duration-500 ${
												activeFilter === category ? 'border-dark/10' : 'border-transparent'
											}`}>
											{category.toUpperCase()}
										</span>
									</div>
								))}
							</div>
						</div>
						<div className='w-fit h-fit grid null:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
							{getFilteredItems().map((item, index) => {
								return activeFilter === 'Blog' ? (
									<BlogPostItem
										key={`blog-${index}`}
										post={item}
									/>
								) : activeFilter === 'Videos' || activeFilter === 'Webinars' ? (
									<VideoItem
										key={`video-${index}`}
										video={item}
									/>
								) : null;
							})}
						</div>
						{hasMoreItems && (
							<SeeMore
								text={'Load More'}
								onClick={handleLoadMore}></SeeMore>
						)}
					</div>
				</section>
			</Layout>
			<div className='z-50 w-full flex justify-center fixed bottom-10 left-0 rounded-full'></div>
		</>
	);
};

export default Resources;
