import React from 'react';
import PropTypes from 'prop-types';
import { kebabCase } from 'lodash';
import { Helmet } from 'react-helmet';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import ResourcesNav from '../components/resources/ResourcesNav';
import { PiMaskSadFill } from 'react-icons/pi';

export const WebinarPostTemplate = ({
	description,
	title,
	helmet,
	date,
	presentors,
	featuredpost,
	videoURL,
}) => {
	const embedURL = videoURL.replace('watch?v=', 'embed/');

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
				className='mt-4'>
				<ResourcesNav
					pageTitle={'Return'}
					showTitle={false}
				/>
				<div className='flex flex-col items-center justify-center'>
					<div className='p-4 null:w-full xl:w-[70%] xxl:w-[50%] h-full flex flex-col space-y-4 justify-center items-center'>
						{featuredpost && (
							<div className='w-full flex justify-center items-center'>
								<div className='w-fit px-2 rounded-md bg-dark dark:bg-light/70 text-lg sans xbold text-light dark:text-darkAccent'>
									★ <span className='px-1'>FEATURED WEBINAR</span> ★
								</div>
							</div>
						)}
						<div className='flex w-full h-full justify-between items-center'>
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
								<div className='text-center null:text-lg md:text-xl sans xbold text-dark leading-tight dark:text-light/80 pb-2'>
									{title}
								</div>
							</div>
							<div className='text-center null:text-sm md:text-md sans text-dark/50 py-2 dark:text-light/50'>
								{description}
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

WebinarPostTemplate.propTypes = {
	description: PropTypes.string,
	title: PropTypes.string,
	helmet: PropTypes.object,
	date: PropTypes.string,
	featuredpost: PropTypes.bool,
	presentors: PropTypes.object,
	videoURL: PropTypes.string,
};

const WebinarPost = ({ data }) => {
	const { markdownRemark: post } = data;

	return (
		<Layout>
			<WebinarPostTemplate
				helmet={
					<Helmet titleTemplate='%s | Webinar'>
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
				featuredpost={post.frontmatter.featuredpost}
				presentors={post.frontmatter.presentors}
				videoURL={post.frontmatter.videoURL}
			/>
		</Layout>
	);
};

WebinarPost.propTypes = {
	data: PropTypes.shape({
		markdownRemark: PropTypes.object,
	}),
};

export default WebinarPost;

export const pageQuery = graphql`
	query WebinarPostByID($id: String!) {
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
