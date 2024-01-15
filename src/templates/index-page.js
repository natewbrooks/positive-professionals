import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';

import Layout from '../components/Layout';
import TeamSection from '../components/sections/TeamSection';
import ServicesSection from '../components/sections/ServicesSection';
import ResourcesSection from '../components/sections/ResourcesSection';
import TestimonialsSection from '../components/sections/TestimonialSection';
import WorkedWithSection from '../components/sections/WorkedWithSection';
import CoreValuesSection from '../components/sections/CoreValuesSection';
import FirstStepsSection from '../components/sections/FirstStepsSection';
import Hero from '../components/sections/Hero';
import ScrollingLogoSection from '../components/sections/ScrollingLogoSection';
import WhoWeAreSection from '../components/sections/WhoWeAreSection';

// eslint-disable-next-line
export const IndexPageTemplate = ({
	hero,
	whoWeAre,
	team,
	coreValues,
	workedWith,
	services,
	getStarted,
}) => {
	return (
		<div
			id='canvas'
			className='relative w-full h-full overflow-x-hidden'>
			<Hero data={hero} />

			<div className='overflow-x-hidden w-full h-full justify-center items-center py-[4rem] lg:py-[6rem] px-[2rem] md:mx-auto lg:px-[8rem] xl:px-[16rem] xxl:px-[20rem] xxxl:px-[36rem] flex flex-col space-y-[10rem]'>
				<div className='w-full h-full flex flex-col space-y-40 justify-center items-center xxl:items-start xxl:flex-row xl:space-x-20'>
					<WhoWeAreSection data={whoWeAre} />
					<TeamSection data={team} />
				</div>
				<CoreValuesSection data={coreValues} />
				<div className='flex flex-col space-y-4'>
					<WorkedWithSection />
					<TestimonialsSection data={workedWith} />
				</div>
				<ServicesSection data={services} />
				<FirstStepsSection data={getStarted} />
				<ResourcesSection />
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
	const { frontmatter } = data.markdownRemark;

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
	}
`;
