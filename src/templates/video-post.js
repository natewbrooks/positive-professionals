import React from 'react';
import PropTypes from 'prop-types';
import { kebabCase } from 'lodash';
import { Helmet } from 'react-helmet';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import ResourcesNav from '../components/resources/ResourcesNav';

export const VideoPostTemplate = ({ description, title, helmet, date, videofile }) => {
	const renderVideo = () => {
		if (videofile) {
			return (
				<video
					className={`w-full h-full`}
					src={videofile.publicURL}
					controls
				/>
			);
		}
		return null;
	};

	return (
		<>
			{helmet || ''}
			<section className='pt-4 w-full h-full'>
				<ResourcesNav
					pageTitle={'Return'}
					showTitle={false}
				/>
				<div className='flex flex-col  items-center justify-center'>
					<div className='p-4 null:w-full xl:w-[70%] xxl:w-[50%] h-full flex flex-col space-y-4 justify-center items-center'>
						<div className='outline rounded-sm outline-four outline-offset-8 bg-dark/10 border-b-2 border-dark/10 w-full h-full text-dark aspect-video'>
							{renderVideo()}
						</div>
						<div className='w-full h-full flex flex-col py-2'>
							<div className='w-full flex flex-col border-b-2 border-dark/10 dark:border-light/10 pb-1'>
								<div className='null:text-sm md:text-md sans xbold text-dark/50 dark:text-light/50'>
									PUBLISHED {date.toUpperCase()}
								</div>
								<div className='null:text-lg md:text-xl sans xbold text-dark leading-tight dark:text-light/80'>
									{title}
								</div>
							</div>
							<div className='null:text-sm md:text-md sans text-dark/50 py-2 dark:text-light/50'>
								{description}
							</div>
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
	videofile: PropTypes.object,
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
				videofile={post.frontmatter.videofile}
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
			html
			frontmatter {
				date(formatString: "DD MMM YYYY")
				title
				description
				videofile {
					publicURL
				}
			}
		}
	}
`;
