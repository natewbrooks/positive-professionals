import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import ResourcesNav from '../components/resources/ResourcesNav';
import '../styles/blog-post.css';
import { useModal } from '../contexts/ModalContext';
import TeamMemberModal from '../components/sections/team/TeamMemberModal';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import pic from '../../static/img/bkg.png';

export const BlogPostTemplate = ({
	description,
	title,
	helmet,
	date,
	featuredpost,
	image,
	body,
	authors,
	membersInfo,
}) => {
	const daet = () => {
		if (typeof date === 'string') {
			return date.toUpperCase();
		}
		return '';
	};

	const { openModal } = useModal();

	const imageData = getImage(image);

	return (
		<>
			{helmet || ''}
			<div
				id='blog-post'
				className='null:px-2 sm:px-8 md:px-20 lg:px-40 xxl:px-80 leading-snug mt-[4rem] mb-[14rem]'>
				<ResourcesNav pageTitle={'Return'} />
				<div className='justify-center items-center text-center flex w-full flex-col bg-dark/10 dark:bg-darkAccent rounded-md null:py-10 md:px-20'>
					<div className='dark:text-light/80 max-w-[80%] w-full null:text-xxl md:text-xxxl serif xbold text-dark leading-snug'>
						<div className='flex flex-col w-full px-8 text-dark/40 dark:text-light/70 '>
							{featuredpost && (
								<div className='w-full flex pb-4 justify-center items-center'>
									<div className='w-fit px-2 rounded-md bg-dark whitespace-nowrap text-nowrap dark:bg-light/70 text-lg sans xbold text-light dark:text-darkAccent'>
										★ <span className='px-1'>FEATURED POST</span> ★
									</div>
								</div>
							)}
							<div className='text-center w-full null:text-md sm:text-lg sans xbold'>
								PUBLISHED {daet()}
							</div>
							<div className='text-center w-full null:text-md sm:text-lg sans xbold text-secondary '>
								{authors.map((author, index) => {
									let memberIndex = membersInfo.findIndex((member) => member.name === author);
									let infoExists = memberIndex != -1;
									return (
										<>
											<span
												key={index + author}
												onClick={() => {
													if (infoExists) {
														openModal(author);
													}
												}}
												className={`${
													infoExists ? 'hover:opacity-80 cursor-pointer active:scale-95' : ''
												}`}>
												{author.toUpperCase() + (authors.length - 1 === index ? '' : ', ')}
											</span>
											{infoExists && (
												<TeamMemberModal
													key={'teamMemberModal' + index}
													member={membersInfo[memberIndex]}
												/>
											)}
										</>
									);
								})}
							</div>
						</div>
						{title}
					</div>
				</div>
				<div className='pt-4 null:mb-20 lg:mb-40 w-full h-full flex flex-col text-start'>
					{imageData && (
						<GatsbyImage
							image={imageData}
							alt={title}
							className='max-h-[30%] aspect-video mb-4'
						/>
					)}
					{!imageData && (
						<img
							alt='no image'
							src={pic}
							className='max-h-[30%] aspect-video mb-4'></img>
					)}
					<article
						className='blog-post-container  text-dark dark:text-light/70 px-2'
						dangerouslySetInnerHTML={{ __html: body }}
					/>
				</div>
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
	const { markdownRemark: post, team } = data; // Assuming 'team' contains 'membersInfo'
	const membersInfo = team.frontmatter.team.members;

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
				membersInfo={membersInfo}
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
		team: markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
			frontmatter {
				team {
					header
					subtext
					members {
						pic {
							childImageSharp {
								gatsbyImageData(width: 600, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
							}
						}
						name
						position
						careerBackground
						specialities
						industryExperience
						certifications
						education
					}
				}
			}
		}
	}
`;
