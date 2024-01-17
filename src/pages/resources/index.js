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
		}));

		const videos = data.allMarkdownRemarkVideo.nodes.map((node) => ({
			title: node.frontmatter.title,
			date: node.frontmatter.date,
			description: node.frontmatter.description,
			// Assuming you want to link to a video file that was uploaded
			videofile: node.frontmatter.videofile ? node.frontmatter.videofile.publicURL : null,
			slug: node.fields.slug,
			isVideo: true,
		}));

		const combinedMedia = [...blogPosts, ...videos].sort(
			(a, b) => new Date(b.date) - new Date(a.date)
		);

		setRecentMedia(combinedMedia);
	}, [data]);
	return (
		<>
			<Layout>
				<div className='pt-10 null:px-2 mobile:px-6 sm:px-8 md:px-10 lg:px-20 xl:px-60 2xl:px-80 w-full h-full'>
					<ResourcesNav
						pageTitle={'Recent Feed'}
						showTitle={true}
					/>
					<ResourcesGridLayout mediaItems={recentMedia} />
				</div>
			</Layout>
		</>
	);
};

export default Resources;
