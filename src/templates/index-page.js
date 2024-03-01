import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';

import Layout from '../components/Layout';
import TeamSection from '../components/sections/team/TeamSection';
import ServicesSection from '../components/sections/ServicesSection';
import ResourcesSection from '../components/sections/ResourcesSection';
import TestimonialsSection from '../components/sections/testimonials/TestimonialSection';
import WorkedWithSection from '../components/sections/testimonials/WorkedWithSection';
import CoreValuesSection from '../components/sections/CoreValuesSection';
import FirstStepsSection from '../components/sections/FirstStepsSection';
import Hero from '../components/sections/Hero';
import WhoWeAreSection from '../components/sections/team/WhoWeAreSection';
import MissionStatementSection from '../components/sections/MissionStatementSection';

// eslint-disable-next-line
export const IndexPageTemplate = ({
	hero,
	whoWeAre,
	team,
	coreValues,
	workedWith,
	services,
	getStarted,
	resources,
}) => {
	return (
		<div
			id='canvas'
			className='relative w-full h-full'>
			<Hero data={hero} />

			<div className='w-full h-full flex flex-col null:pb-[10rem] sm:pb-[10rem] md:pb-[12rem] lg:pb-[14rem] xxl:pb-[16rem] null:space-y-[10rem] sm:space-y-[10rem] md:space-y-[12rem] lg:space-y-[14rem] xxl:space-y-[18rem]'>
				<section
					id='team'
					className='w-full h-full flex flex-col null:space-y-20 justify-center items-center xxl:space-y-0 xxl:items-start xxl:flex-row xxl:space-x-20'>
					<WhoWeAreSection data={whoWeAre} />
					<TeamSection data={team} />
				</section>

				<CoreValuesSection data={coreValues} />

				<MissionStatementSection />

				<ServicesSection data={services} />
				<section
					id='testimonials'
					className='flex flex-col'>
					<WorkedWithSection />
					<TestimonialsSection data={workedWith} />
				</section>
				<ResourcesSection data={resources} />
				<FirstStepsSection data={getStarted} />
			</div>
		</div>
	);
};

IndexPageTemplate.propTypes = {
	hero: PropTypes.shape({
		header: PropTypes.string,
		subtext: PropTypes.string,
	}),
	whoWeAre: PropTypes.shape({
		header: PropTypes.string,
		subtext: PropTypes.string,
		body: PropTypes.string,
	}),
	team: PropTypes.shape({
		header: PropTypes.string,
		subtext: PropTypes.string,
		members: PropTypes.arrayOf(
			PropTypes.shape({
				name: PropTypes.string,
				linkedIn: PropTypes.string,
				email: PropTypes.string,
				position: PropTypes.string,
				careerBackground: PropTypes.string,
				specialities: PropTypes.string,
				industryExperience: PropTypes.string,
				certifications: PropTypes.string,
				education: PropTypes.string,
			})
		),
	}),
	coreValues: PropTypes.shape({
		header: PropTypes.string,
		subtext: PropTypes.string,
		body: PropTypes.string,
		values: PropTypes.arrayOf(
			PropTypes.shape({
				name: PropTypes.string,
				about: PropTypes.string,
				reasons: PropTypes.arrayOf(
					PropTypes.shape({
						reason: PropTypes.string,
						explanation: PropTypes.string,
					})
				),
			})
		),
	}),
	workedWith: PropTypes.shape({
		header: PropTypes.string,
		subtext: PropTypes.string,
		testimonials: PropTypes.arrayOf(
			PropTypes.shape({
				quote: PropTypes.string,
				name: PropTypes.string,
				company: PropTypes.string,
			})
		),
	}),
	services: PropTypes.shape({
		header: PropTypes.string,
		subtext: PropTypes.string,
		body: PropTypes.string,
		services: PropTypes.arrayOf(
			PropTypes.shape({
				name: PropTypes.string,
				pitch: PropTypes.string,
				description: PropTypes.string,
			})
		),
	}),
	getStarted: PropTypes.shape({
		header: PropTypes.string,
		subtext: PropTypes.string,
		steps: PropTypes.arrayOf(
			PropTypes.shape({
				name: PropTypes.string,
				explanation: PropTypes.string,
			})
		),
	}),
	// Include other sections as needed
};

const IndexPage = ({ data }) => {
	const { markdownRemark, blogs, videos, webinars } = data;
	const frontmatter = markdownRemark.frontmatter;

	console.log('VIDEOS: ' + videos.nodes);

	return (
		<Layout>
			<IndexPageTemplate
				hero={frontmatter.hero}
				whoWeAre={frontmatter.whoWeAre}
				team={frontmatter.team}
				coreValues={frontmatter.coreValues}
				workedWith={frontmatter.workedWith}
				services={frontmatter.services}
				getStarted={frontmatter.getStarted}
				resources={{ blogs: blogs.nodes, videos: videos.nodes, webinars: webinars.nodes }}
			/>
		</Layout>
	);
};

IndexPage.propTypes = {
	data: PropTypes.shape({
		markdownRemark: PropTypes.shape({
			frontmatter: PropTypes.object,
		}),
	}),
};

export default IndexPage;

export const pageQuery = graphql`
	query IndexPageTemplate {
		markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
			frontmatter {
				title
				hero {
					header
					subtext
				}
				whoWeAre {
					header
					subtext
					body
				}
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
						linkedIn
						email
						position
						careerBackground
						specialities
						industryExperience
						certifications
						education
					}
				}
				coreValues {
					header
					subtext
					body
					values {
						name
						about
					}
				}
				workedWith {
					header
					subtext
					testimonials {
						quote
						name
						company
					}
				}
				services {
					header
					subtext
					body
					services {
						name
						pitch
						description
					}
				}
				getStarted {
					header
					subtext
					steps {
						name
						explanation
					}
				}
			}
		}
		blogs: allMarkdownRemark(
			filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
			sort: { fields: [frontmatter___date], order: DESC }
			limit: 3
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
			}
		}
		videos: allMarkdownRemark(
			filter: { frontmatter: { templateKey: { eq: "video-post" } } }
			sort: { fields: [frontmatter___date], order: DESC }
			limit: 3
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
		webinars: allMarkdownRemark(
			filter: { frontmatter: { templateKey: { eq: "webinar-post" } } }
			sort: { fields: [frontmatter___date], order: DESC }
			limit: 3
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
`;
