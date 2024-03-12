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
		featuredpost: node.frontmatter.featuredpost,
		presentors: node.frontmatter.presentors,
		videoURL: node.frontmatter.videoURL,
		slug: node.fields.slug,
		isVideo: true,
		isWebinar: false,
	}));

	const [sortedVideos, setSortedVideos] = useState(videoCatalog);

	useEffect(() => {
		const featured = videoCatalog
			.filter((post) => post.featuredpost)
			.sort((a, b) => new Date(b.date) - new Date(a.date));
		const nonfeatured = videoCatalog
			.filter((post) => !post.featuredpost)
			.sort((a, b) => new Date(b.date) - new Date(a.date));

		setSortedVideos([...featured, ...nonfeatured]);
	}, [data]);

	return (
		<>
			<Layout>
				<div className='pt-[6rem] pb-[18rem] null:px-4 mobile:px-6 sm:px-8 md:px-10 lg:px-20 xl:px-60 2xl:px-80 w-full h-full text-center dark:text-light/70'>
					<ResourcesNav
						pageTitle={'Video Catalog'}
						showTitle={true}
					/>
					<ResourcesGridLayout mediaItems={sortedVideos} />
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
					featuredpost
					videoURL
					presentors
				}
				fields {
					slug
				}
			}
		}
	}
`;
