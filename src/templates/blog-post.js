import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import ResourcesNav from '../components/resources/ResourcesNav';
import '../styles/blog-post.css';

export const BlogPostTemplate = ({
	description,
	title,
	helmet,
	date,
	featuredpost,
	image,
	body,
}) => {
	return (
		<>
			{helmet || ''}
			<div className='pt-10 null:px-2 mobile:px-6 sm:px-8 md:px-10 lg:px-20 xl:px-60 2xl:px-80 w-full h-full'>
				<div className='hidden sm:flex justify-center items-center text-center w-full flex-col pb-2'>
					<div className='w-full text-md sans xbold text-dark/50'>
						PUBLISHED {date.toUpperCase()}
					</div>
					<div className='w-full text-xxl serif xbold text-dark leading-tight'>{title}</div>
				</div>
				<ResourcesNav
					pageTitle={'Return'}
					showTitle={false}
				/>
				<div className='flex sm:hidden justify-center items-center text-center w-full flex-col'>
					<div className='w-full text-md sans xbold text-dark/50'>
						PUBLISHED {date.toUpperCase()}
					</div>
					<div className='w-full text-xxl serif xbold text-dark leading-tight'>{title}</div>
				</div>
				<section className='w-full h-full mb-20 flex flex-col  items-center justify-center'>
					<div className='p-4 w-full h-full flex flex-col space-y-4 justify-center items-center'>
						<div className='w-full h-full flex flex-col'>
							<article
								className='blog-post-container xl:px-[4rem] xxl:px-[24rem]'
								dangerouslySetInnerHTML={{ __html: body }}
							/>
						</div>
					</div>
				</section>
			</div>
		</>
	);
};

BlogPostTemplate.propTypes = {
	description: PropTypes.string,
	title: PropTypes.string,
	helmet: PropTypes.object,
	featuredpost: PropTypes.bool,
	image: PropTypes.object,
	authors: PropTypes.object,
};

const BlogPost = ({ data }) => {
	const { markdownRemark: post } = data;

	return (
		<Layout>
			<BlogPostTemplate
				helmet={
					<Helmet titleTemplate='%s | Blog'>
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
				image={post.frontmatter.image}
				authors={post.frontmatter.authors}
				body={post.html}
			/>
		</Layout>
	);
};

BlogPost.propTypes = {
	data: PropTypes.shape({
		markdownRemark: PropTypes.object,
	}),
};

export default BlogPost;

export const pageQuery = graphql`
	query VideoPostByID($id: String!) {
		markdownRemark(id: { eq: $id }) {
			id
			html
			frontmatter {
				title
				date(formatString: "DD MMM YYYY")
				description
				featuredpost
				authors
				image {
					childImageSharp {
						gatsbyImageData(width: 600, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
					}
				}
			}
		}
	}
`;
