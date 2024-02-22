import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import ResourcesNav from '../../components/resources/ResourcesNav';
import ResourcesGridLayout from '../../components/resources/ResourcesGridLayout';
import { graphql, useStaticQuery } from 'gatsby';

const Resources = ({}) => {
	const [recentMedia, setRecentMedia] = useState([]);

	const data = useStaticQuery(graphql`
		query CombinedQuery {
			allMarkdownRemarkBlog: allMarkdownRemark(
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
			allMarkdownRemarkVideo: allMarkdownRemark(
				filter: { frontmatter: { templateKey: { eq: "video-post" } } }
			) {
				nodes {
					frontmatter {
						title
						date(formatString: "DD MMM YYYY")
						description
						featuredpost
						presentors
						videoURL
					}
					fields {
						slug
					}
				}
			}
			allMarkdownRemarkWebinar: allMarkdownRemark(
				filter: { frontmatter: { templateKey: { eq: "webinar-post" } } }
			) {
				nodes {
					frontmatter {
						title
						date(formatString: "DD MMM YYYY")
						description
						featuredpost
						presentors
						videoURL
					}
					fields {
						slug
					}
				}
			}
		}
	`);

	useEffect(() => {
		const blogPosts = data.allMarkdownRemarkBlog.nodes.map((node) => ({
			title: node.frontmatter.title,
			date: node.frontmatter.date,
			description: node.frontmatter.description,
			featuredpost: node.frontmatter.featuredpost,
			image: node.frontmatter.image,
			body: node.frontmatter.html,
			slug: node.fields.slug,
			authors: node.frontmatter.authors,
			isVideo: false,
			isWebinar: false,
		}));

		const videos = data.allMarkdownRemarkVideo.nodes.map((node) => ({
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

		const webinars = data.allMarkdownRemarkWebinar.nodes.map((node) => ({
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

		const combinedMedia = [...blogPosts, ...videos, ...webinars];

		const featured = combinedMedia
			.filter((post) => post.featuredpost)
			.sort((a, b) => new Date(b.date) - new Date(a.date));
		const nonfeatured = combinedMedia
			.filter((post) => !post.featuredpost)
			.sort((a, b) => new Date(b.date) - new Date(a.date));

		setRecentMedia([...featured, ...nonfeatured]);
	}, [data]);

	return (
		<>
			<Layout>
				<div className='pt-[4rem] null:px-4 mobile:px-6 sm:px-8 md:px-10 lg:px-20 xl:px-60 2xl:px-80 w-full h-full'>
					<ResourcesNav
						pageTitle={'All Media'}
						showTitle={true}
					/>
					<ResourcesGridLayout mediaItems={recentMedia} />
				</div>
			</Layout>
		</>
	);
};

export default Resources;
