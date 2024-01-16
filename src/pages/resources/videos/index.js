import React, { useEffect, useState } from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../../../components/Layout';
import ResourcesNav from '../../../components/resources/ResourcesNav';
import ResourcesGridLayout from '../../../components/resources/ResourcesGridLayout';

const Videos = ({ data }) => {
	const videoCatalog = data.allMarkdownRemark.nodes.map((node) => ({
		title: node.frontmatter.title,
		date: node.frontmatter.date,
		description: node.frontmatter.description,
		// Assuming you want to link to a video file that was uploaded
		videofile: node.frontmatter.videofile ? node.frontmatter.videofile.publicURL : null,
		slug: node.fields.slug,
		isVideo: true,
	}));

	return (
		<>
			<Layout>
				<ResourcesNav pageTitle={'Video Catalog'} />
				<ResourcesGridLayout mediaItems={videoCatalog} />
			</Layout>
		</>
	);
};

export default Videos;

export const query = graphql`
	query VideoQuery {
		allMarkdownRemark(
			sort: { order: DESC, fields: [frontmatter___date] }
			filter: { frontmatter: { templateKey: { eq: "video-post" } } }
		) {
			nodes {
				frontmatter {
					title
					date(formatString: "DD MMM YYYY")
					description
					videofile {
						publicURL
					}
				}
				fields {
					slug
				}
			}
		}
	}
`;
