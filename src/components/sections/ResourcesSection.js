import React from 'react';
import SeeMore from '../pieces/SeeMore';
import VideoItem from '../media/VideoItem';
import BlogPostItem from '../media/BlogPostItem';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import waveTop from '../../../static/img/bg-waves/resources-waves/wave-top.svg';
import waveBottom from '../../../static/img/bg-waves/resources-waves/wave-bottom.svg';
import BlogPostListItem from '../media/BlogPostListItem ';
import VideoListItem from '../media/VideoListItem';

export default function ResourcesSection({ data }) {
	if (!data) {
		return <div>Loading...</div>;
	}

	let blogPosts = [...data.blogs];

	blogPosts.sort((a, b) => {
		// Check the featured status
		if (a.frontmatter.featuredpost && !b.frontmatter.featuredpost) {
			return -1;
		}
		if (!a.frontmatter.featuredpost && b.frontmatter.featuredpost) {
			return 1;
		}
		// If both posts are either featured or not, then sort by date
		return new Date(b.frontmatter.date) - new Date(a.frontmatter.date);
	});

	const videoCatalog = data.videos;
	const previousWebinars = data.webinars;

	return (
		<section
			id='resources'
			className='w-full h-full pb-10'>
			<div className='z-0 absolute w-full h-full left-0'>
				<img
					src={waveTop}
					alt='Resources wave top bg'
					style={{ transform: 'translateY(-90%)' }}
					className='absolute w-full h-fit top-0'></img>
				<div className='absolute bg-four w-full h-full'></div>
				<img
					src={waveBottom}
					alt='Resources wave bottom bg'
					className='translate-y-[90%] absolute w-full h-fit bottom-0 z-[-1]'></img>
			</div>

			<div className='z-10 w-full h-full flex flex-col space-y-8 text-dark'>
				<div className='z-10 flex flex-col space-y-2 justify-center items-center'>
					<AnchorLink
						to='/resources/'
						className='group text-start flex flex-col -space-y-1 w-full '>
						<span className={`group-md:hover:opacity-50 text-xxl serif`}>Resources</span>
						<span className={`sans text-md w-full`}>
							Explore our collection of informative videos and previous webinars.
						</span>
					</AnchorLink>
					<span className='border-b-2 dark:border-dark/10 border-light/10 w-full'></span>
				</div>
				<div className='z-10 flex flex-col text-start justify-center'>
					<AnchorLink
						to='/resources/blog/'
						className='w-full group flex flex-col -space-y-1 my-4 text-end'>
						<span className={`sans text-sm `}>READ OUR STORIES</span>
						<span className={`group-md:hover:opacity-50 text-xl serif`}>Blog posts</span>
					</AnchorLink>
					<div className='w-full flex flex-col space-y-[3px]'>
						{blogPosts.map((post, index) => (
							<div
								key={index + 'blog'}
								className={`rounded-md p-2 md:p-4 bg-light/30 dark:bg-dark/50 w-full h-full`}>
								<BlogPostListItem
									post={{
										title: post.frontmatter.title,
										date: post.frontmatter.date,
										description: post.frontmatter.description,
										featuredpost: post.frontmatter.featuredpost,
										image: post.frontmatter.image,
										body: post.frontmatter.html,
										slug: post.fields.slug,
										authors: post.frontmatter.authors,
										isVideo: false,
										isWebinar: false,
									}}
								/>
							</div>
						))}
					</div>
					<AnchorLink
						title='Navigate to Blog'
						to='/resources/blog/'>
						<SeeMore />
					</AnchorLink>
				</div>
				{/* VIDEOS */}

				<div className='z-10 flex flex-col text-start justify-center'>
					<AnchorLink
						to='/resources/videos/'
						className='group flex flex-col -space-y-1 my-4 text-end'>
						<span className={`sans text-sm `}>SEE US IN ACTION</span>
						<span className={`group-md:hover:opacity-50 text-xl serif`}>Video catalog</span>
					</AnchorLink>
					<div className='w-full flex flex-col space-y-[3px]'>
						{videoCatalog.map((video, index) => (
							<div
								key={index + 'video'}
								className={`rounded-md p-2 md:p-4 bg-light/30 dark:bg-dark/50 w-full h-full`}>
								<VideoListItem
									video={{
										title: video.frontmatter.title,
										date: video.frontmatter.date,
										description: video.frontmatter.description,
										presentors: video.frontmatter.presentors,
										videoURL: video.frontmatter.videoURL,
										slug: video.fields.slug,
										isVideo: true,
										isWebinar: false,
									}}
									searchTerm={''}
								/>
							</div>
						))}
					</div>
					<AnchorLink
						title='Navigate to Videos'
						to='/resources/videos/'>
						<SeeMore />
					</AnchorLink>
				</div>
				{/* WEBINARS */}

				{/* <div className='z-10 flex flex-col text-start justify-center'>
					<AnchorLink
						to='/resources/webinars/'
						className='group flex flex-col -space-y-1 my-4 text-end'>
						<span className={`sans text-sm `}>REVIEW OUR EXPANSIVE LIBRARY</span>
						<span className={`group-md:hover:opacity-50 text-xl serif`}>Previous webinars</span>
					</AnchorLink>
					<div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-1 gap-y-1'>
						{previousWebinars.map((video, index) => (
							<div className={`rounded-sm p-4 bg-light/30 dark:bg-dark/50 w-full h-full`}>
								<VideoItem
									key={index}
									video={{
										title: video.frontmatter.title,
										date: video.frontmatter.date,
										description: video.frontmatter.description,
										presentors: video.frontmatter.presentors,
										videoURL: video.frontmatter.videoURL,
										slug: video.fields.slug,
										isVideo: true,
										isWebinar: true,
									}}
									searchTerm={''}
								/>
							</div>
						))}
					</div>
					<AnchorLink
						title='Navigate to Webinars'
						to='/resources/webinars/'>
						<SeeMore />
					</AnchorLink>
				</div> */}
			</div>
		</section>
	);
}
