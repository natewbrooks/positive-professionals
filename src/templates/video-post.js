import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { kebabCase } from 'lodash';
import { Helmet } from 'react-helmet';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import ResourcesNav from '../components/resources/ResourcesNav';
import { PiMaskSadFill } from 'react-icons/pi';

export const VideoPostTemplate = ({
	description,
	title,
	helmet,
	date,
	presentors,
	featuredpost,
	videoURL,
}) => {
	const [isExpanded, setIsExpanded] = useState(false);
	const embedURL = videoURL.replace('watch?v=', 'embed/');

	const toggleDescription = () => setIsExpanded(!isExpanded);

	// CSS for truncating text to 3 lines
	const truncateStyle = {
		display: '-webkit-box',
		WebkitLineClamp: 3,
		WebkitBoxOrient: 'vertical',
		overflow: 'hidden',
		textOverflow: 'ellipsis',
	};

	const renderVideo = () => {
		if (embedURL) {
			return (
				<iframe
					className='w-full h-full aspect-video'
					src={embedURL}
					title={title}
					allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
					frameBorder='0'
					webkitallowfullscreen='true'
					mozallowfullscreen='true'
					allowFullScreen
				/>
			);
		}
		return (
			<div className='flex flex-col w-full justify-center'>
				<PiMaskSadFill
					size={48}
					className='text-dark dark:text-light/70'
				/>
				<span className='text-xxl sans xbold'>SOMETHING WENT WRONG...</span>
				{!videoURL && <span className='text-sm sans xbold'>(there is no video linked!)</span>}
			</div>
		);
	};

	return (
		<>
			{helmet || ''}
			<section
				id='video-post'
				className='leading-snug mt-[4rem]'>
				<ResourcesNav
					pageTitle={'Return'}
					showTitle={false}
				/>
				<div className='flex flex-col items-center justify-center'>
					<div className='p-4 null:w-full xl:w-[70%] xxl:w-[50%] h-full flex flex-col space-y-4 justify-center items-center'>
						{featuredpost && (
							<div className='w-full flex justify-center items-center'>
								<div className='w-fit px-2 whitespace-nowrap text-nowrap rounded-md bg-dark dark:bg-light/70 text-lg sans xbold text-light dark:text-darkAccent'>
									★ <span className='px-1'>FEATURED VIDEO</span> ★
								</div>
							</div>
						)}
						<div className='flex null:flex-col sm:flex-row w-full h-full justify-between sm:items-center'>
							<div className='null:text-sm md:text-md sans xbold text-dark/50 dark:text-light/50'>
								PUBLISHED {date.toUpperCase()}
							</div>
							{presentors && (
								<div className='null:text-sm md:text-md sans xbold text-dark/50 dark:text-light/50'>
									BY {presentors.join(', ').toUpperCase()}
								</div>
							)}
						</div>
						<div className='outline rounded-sm outline-four outline-offset-8 bg-dark/10 border-b-2 border-dark/10 w-full h-full text-dark aspect-video'>
							{renderVideo()}
						</div>
						<div className='w-full h-full flex flex-col py-2'>
							<div className='w-full flex flex-col border-b-2 border-dark/10 dark:border-light/10 pb-1'>
								<div className='text-center null:text-lg md:text-xl sans xbold text-dark leading-snug dark:text-light/80 pb-2'>
									{title}
								</div>
							</div>
							<div
								className='text-center null:text-sm md:text-md sans text-dark/50 pt-2 dark:text-light/50'
								style={isExpanded ? {} : truncateStyle}>
								{description}
							</div>
							<button
								onClick={toggleDescription}
								className='text-end mt-2 xbold text-secondary md:hover:opacity-90 sans text-md'>
								{isExpanded ? 'View Less' : 'View More'}
							</button>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

VideoPostTemplate.propTypes = {
	description: PropTypes.string,
	title: PropTypes.string,
	helmet: PropTypes.object,
	date: PropTypes.string,
	featuredpost: PropTypes.bool,
	presentors: PropTypes.object,
	videoURL: PropTypes.string,
};

const VideoPost = ({ data }) => {
	const { markdownRemark: post } = data;

	return (
		<Layout>
			<VideoPostTemplate
				helmet={
					<Helmet titleTemplate='%s | Video'>
						<title>{`${post.frontmatter.title}`}</title>
						<meta
							name='description'
							content={`${post.frontmatter.description}`}
						/>
					</Helmet>
				}
				description={post.frontmatter.description}
				date={post.frontmatter.date}
				title={post.frontmatter.title}
				presentors={post.frontmatter.presentors}
				featuredpost={post.frontmatter.featuredpost}
				videoURL={post.frontmatter.videoURL}
			/>
		</Layout>
	);
};

VideoPost.propTypes = {
	data: PropTypes.shape({
		markdownRemark: PropTypes.object,
	}),
};

export default VideoPost;

export const pageQuery = graphql`
	query VideoPostByID($id: String!) {
		markdownRemark(id: { eq: $id }) {
			id
			frontmatter {
				date(formatString: "DD MMM YYYY")
				title
				description
				featuredpost
				presentors
				videoURL
			}
		}
	}
`;
