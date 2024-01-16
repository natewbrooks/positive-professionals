import React, { useEffect, useState } from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../../../components/Layout';
import ResourcesNav from '../../../components/resources/ResourcesNav';
import ResourcesGridLayout from '../../../components/resources/ResourcesGridLayout';

const Blog = ({ data }) => {
	const blogs = data.allMarkdownRemark.nodes.map((node) => ({
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

	return (
		<>
			<Layout>
				<ResourcesNav pageTitle={'Blog Posts'} />
				<ResourcesGridLayout mediaItems={blogs} />
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
