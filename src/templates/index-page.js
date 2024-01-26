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

			<div className='w-full h-full flex flex-col null:space-y-[8rem] sm:space-y-[10rem] md:space-y-[12rem] lg:space-y-[14rem] xl:space-y-[22rem]'>
				<section
					id='team'
					className='w-full h-full flex flex-col space-y-40 justify-center items-center xxl:items-start xxl:flex-row xxl:space-x-20'>
					<WhoWeAreSection data={whoWeAre} />
					<TeamSection data={team} />
				</section>

				<CoreValuesSection data={coreValues} />

				<section
					id='testimonials'
					className='flex flex-col'>
					<WorkedWithSection />
					<TestimonialsSection data={workedWith} />
					{/* <img
					src={purpleWavesBg}
					className='absolute w-full'></img> */}
				</section>

				<ServicesSection data={services} />
				<FirstStepsSection data={getStarted} />
				<ResourcesSection data={resources} />
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
	const { markdownRemark, blogs, videos } = data;
	const frontmatter = markdownRemark.frontmatter;

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
				resources={{ blogs: blogs.nodes, videos: videos.nodes }}
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
						name
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
