import React from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import SeeMore from '../pieces/SeeMore';
import VideoItem from '../webinar/VideoItem';
import BlogPostItem from '../blog/BlogPostItem';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

export default function ResourcesSection({ content }) {
	const blogPosts = [
		{
			title: 'Navigating Career Transitions: Insights from a Professional Coach',
			date: '16 SEP 2024',
			excerpt:
				'Explore key strategies for successful career transitions and how professional coaching can guide you through these pivotal moments.',
			colorClass: 'text-tertiary',
			authors: 'Jennifer Anderson, Kim Harris',
		},
		{
			title: 'Maximizing Leadership Potential with Executive Coaching',
			date: 'AUG 2024',
			excerpt:
				'Discover how executive coaching can unlock your leadership abilities and drive organizational success. Discover how executive coaching can unlock your leadership abilities and drive organizational success. Discover how executive coaching can unlock your leadership abilities and drive organizational success.',
			colorClass: 'text-secondary',
			authors: 'Angela Satchell, Kim Harris',
		},
		{
			title: 'The Power of Mindset in Professional Development',
			date: '1 JUL 2024',
			excerpt:
				'Uncover the critical role of mindset in professional growth and how coaching can help in reshaping your thought patterns for success.',
			colorClass: 'text-primary',
			authors: 'Liz Brooks',
		},
	];

	const videoCatalog = [
		{
			title: 'Christmas came early',
			date: '17 FEB 2024',
			description:
				'This is a short and brief non descript description of the video. Should probably be no longer than two sentences.',
			colorClass: 'text-secondary',
		},
		{
			title: 'Adam Driver does it again',
			date: 'MAR 2024',
			description:
				'This is a short and brief non descript description of the video. Should probably be no longer than two sentences.',
			colorClass: 'text-four',
		},
		{
			title: 'Robin Williams best moments',
			date: 'OCT 2024',
			description:
				'This is a short and brief non descript description of the video. Should probably be no longer than two sentences.',
			colorClass: 'text-primary',
		},
		// Add more video items as needed
	];

	const previousWebinars = [
		{
			title: 'Superman sees the skies',
			date: '27 DEC 2023',
			description:
				'This is a short and brief non descript description of the video. Should probably be no longer than two sentences.',
			colorClass: 'text-primary',
		},
		{
			title: 'Me at the zoo',
			date: 'NOV 2023',
			description:
				'This is a short and brief non descript description of the video. Should probably be no longer than two sentences.',
			colorClass: 'text-secondary',
		},
		{
			title: 'Garfield eats lasagna Garfield eats lasagna Garfield eats lasagna',
			date: '13 SEP 2023',
			description:
				'This is a short and brief non descript description of the video. Should probably be no longer than two sentences.',
			colorClass: 'text-tertiary',
		},
		// Add more video items as needed
	];

	return (
		<section
			id='resources'
			className='w-full h-full flex flex-col space-y-8'>
			<div className='flex flex-col space-y-2 justify-center items-center'>
				<AnchorLink
					to='/resources/'
					className='group text-start flex flex-col -space-y-1 w-full'>
					<span className={`group-hover:opacity-50 text-xxl serif`}>Resources</span>
					<span className={`sans text-md w-full`}>
						Explore our collection of informative videos and previous webinars.
					</span>
				</AnchorLink>
				<span className='border-b-2 border-dark/10 w-full'></span>
			</div>
			<div className='flex flex-col text-start justify-center'>
				<AnchorLink
					to='/resources/blog/'
					className='group flex flex-col -space-y-1 my-4 text-end'>
					<span className={`sans text-sm `}>READ OUR STORIES</span>
					<span className={`group-hover:opacity-50 text-xl serif`}>Blog posts</span>
				</AnchorLink>
				<div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2'>
					{blogPosts.map((post, index) => (
						<BlogPostItem
							key={index}
							post={post}
						/>
					))}
				</div>
				<AnchorLink
					title='Blog'
					to='/resources/blog/'>
					<SeeMore />
				</AnchorLink>
			</div>
			<div className='flex flex-col text-start justify-center'>
				<AnchorLink
					to='/resources/videos/'
					className='group flex flex-col -space-y-1 my-4 text-end'>
					<span className={`sans text-sm `}>SEE US IN ACTION</span>
					<span className={`group-hover:opacity-50 text-xl serif`}>Video catalog</span>
				</AnchorLink>
				<div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2'>
					{videoCatalog.map((video, index) => (
						<VideoItem
							key={index}
							video={video}
						/>
					))}
				</div>
				<AnchorLink
					title='Videos'
					to='/resources/videos/'>
					<SeeMore />
				</AnchorLink>
			</div>
			<div className='w-full flex flex-col justify-center'>
				<AnchorLink
					to='/resources/webinars/'
					className='group flex flex-col -space-y-1 my-4 text-end'>
					<span className={`sans text-sm `}>FREE WEEKLY WEBINARS</span>
					<span className={`group-hover:opacity-50 text-xl serif`}>Previous webinars</span>
				</AnchorLink>

				<div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2'>
					{previousWebinars.map((video, index) => (
						<VideoItem
							key={index}
							video={video}
						/>
					))}
				</div>

				<AnchorLink
					title='Webinars'
					to='/resources/webinars/'>
					<SeeMore />
				</AnchorLink>
			</div>
		</section>
	);
}
