import React, { useEffect, useState } from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../../../components/Layout';
import ResourcesNav from '../../../components/resources/ResourcesNav';
import ResourcesGridLayout from '../../../components/resources/ResourcesGridLayout';

const Webinars = ({ data }) => {
	const webinars = data.allMarkdownRemark.nodes.map((node) => ({
		title: node.frontmatter.title,
		date: node.frontmatter.date,
		description: node.frontmatter.description,
		featuredpost: node.frontmatter.featuredpost,
		presentors: node.frontmatter.presentors,
		videoURL: node.frontmatter.videoURL,
		slug: node.fields.slug,
		isVideo: true,
		isWebinar: true,
	}));
	const [sortedWebinars, setSortedWebinars] = useState(webinars);

	useEffect(() => {
		const featured = webinars
			.filter((post) => post.featuredpost)
			.sort((a, b) => new Date(b.date) - new Date(a.date));
		const nonfeatured = webinars
			.filter((post) => !post.featuredpost)
			.sort((a, b) => new Date(b.date) - new Date(a.date));

		setSortedWebinars([...featured, ...nonfeatured]);
	}, [data]);

	return (
		<>
			<Layout>
				<div className='pt-[4rem] null:px-4 mobile:px-6 sm:px-8 md:px-10 lg:px-20 xl:px-60 2xl:px-80 w-full h-full'>
					<ResourcesNav
						pageTitle={'Previous Webinars'}
						showTitle={true}
					/>
					<ResourcesGridLayout mediaItems={sortedWebinars} />
				</div>
			</Layout>
		</>
	);
};

export default Webinars;

export const query = graphql`
	query WebinarQuery {
		allMarkdownRemark(
			sort: { order: DESC, fields: [frontmatter___date] }
			filter: { frontmatter: { templateKey: { eq: "webinar-post" } } }
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
