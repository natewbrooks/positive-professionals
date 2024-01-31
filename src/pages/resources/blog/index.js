import React, { useEffect, useState } from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../../../components/Layout';
import ResourcesNav from '../../../components/resources/ResourcesNav';
import ResourcesGridLayout from '../../../components/resources/ResourcesGridLayout';

const Blog = ({ data }) => {
	let blogs = data.allMarkdownRemark.nodes.map((node) => ({
		title: node.frontmatter.title,
		date: node.frontmatter.date,
		description: node.frontmatter.description,
		featuredpost: node.frontmatter.featuredpost,
		image: node.frontmatter.image,
		body: node.frontmatter.html,
		slug: node.fields.slug,
		authors: node.frontmatter.authors,
		isVideo: false,
	}));

	blogs = blogs.sort((a, b) => {
		// Featured posts sort
		if (a.featuredpost && !b.featuredpost) {
			return -1;
		}
		if (!a.featuredpost && b.featuredpost) {
			return 1;
		}
		// If both posts have the same featured status, then sort by date
		return new Date(b.date) - new Date(a.date);
	});

	return (
		<>
			<Layout>
				<div className='pt-10 null:px-2 mobile:px-6 sm:px-8 md:px-10 lg:px-20 xl:px-60 2xl:px-80 w-full h-full'>
					<ResourcesNav
						pageTitle={'Blog Posts'}
						showTitle={true}
					/>
					<ResourcesGridLayout mediaItems={blogs} />
				</div>
			</Layout>
		</>
	);
};

export default Blog;

export const query = graphql`
	query BlogQuery {
		allMarkdownRemark(
			sort: { order: DESC, fields: [frontmatter___date] }
			filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
		) {
			nodes {
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
				fields {
					slug
				}
				html
			}
		}
	}
`;
