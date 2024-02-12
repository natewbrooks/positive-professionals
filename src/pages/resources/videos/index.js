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
		videoURL: node.frontmatter.videoURL,
		slug: node.fields.slug,
		isVideo: true,
	}));

	return (
		<>
			<Layout>
				<div className='pt-10 null:px-2 mobile:px-6 sm:px-8 md:px-10 lg:px-20 xl:px-60 2xl:px-80 w-full h-full'>
					<ResourcesNav
						pageTitle={'Video Catalog'}
						showTitle={true}
					/>
					<ResourcesGridLayout mediaItems={videoCatalog} />
				</div>
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
					videoURL
				}
				fields {
					slug
				}
			}
		}
	}
`;
