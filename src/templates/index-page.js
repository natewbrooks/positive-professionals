import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';

import Layout from '../components/Layout';
import Features from '../components/Features';
import BlogRoll from '../components/BlogRoll';
import FullWidthImage from '../components/FullWidthImage';
import TeamSection from '../components/TeamSection';
import ServicesSection from '../components/ServicesSection';
import { FaUser } from 'react-icons/fa';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import ResourcesSection from '../components/ResourcesSection';
import TestimonialsSection from '../components/TestimonialSection';
import WorkedWithSection from '../components/WorkedWithSection';
import SeeMore from '../components/SeeMore';

import bkg from '../img/bkg.png';

// eslint-disable-next-line
export const IndexPageTemplate = ({
	image,
	title,
	heading,
	subheading,
	mainpitch,
	description,
	intro,
}) => {
	const heroImage = getImage(image) || image;

	return (
		<div className='canvas w-full h-full'>
			{/* <FullWidthImage img={heroImg} title={title} subheading={subheading} /> */}
			<div className='relative flex justify-center items-center w-full h-[400px] bg-custom-gradient'>
				<div className='pt-8 flex flex-col items-center justify-center h-full'>
					<span className='serif text-billboard text-light bg-light/20 px-8 rounded-full'>
						Transform Potential into Performance
					</span>
				</div>
			</div>

			<div className='w-full h-full justify-center items-center py-[9rem] px-[2rem] md:px-[6rem] lg:px-[8rem] xl:px-[12rem] xxl:px-[20rem] xxxl:px-[36rem] flex flex-col space-y-[10rem]'>
				<div className='flex flex-col space-y-4'>
					{/* {mainpitch.title} */}
					<div className='flex flex-col -space-y-1'>
						<span className='sans text-sm'>WHO WE ARE</span>
						<span className='serif text-xxl'>Uncover our story</span>
					</div>
					<p className='sans text-lg'>
						Mental fitness is our capacity to handle life’s greatest challenges with a positive
						mindset rather than getting stressed or upset. When it comes to physical fitness, we are
						unlikely to be able to climb a mountain if we have not strengthened our muscles and
						built our stamina in advance. Mental fitness is similar; if we want to overcome
						stressful situations and view life through a positive mindset, we need to learn and
						practice the skills that will enable us to do so. In other words, we need to build our
						mental fitness.
						<br></br>
						<br></br>
						By strengthening three fundamental mental fitness muscles, leaders enhance their
						resilience and perseverance, spend less time in anger, regret, or blame, and unleash
						their creativity and innovation. Mental fitness training helps alleviate the impact of
						setbacks so personnel can remain resilient, constantly evolving, and contributing to the
						overall progress of the business.{' '}
					</p>
					<SeeMore text={'Learn more'} colorClass={'text-primary'} />
				</div>
				<TeamSection />
				<div className='flex flex-col space-y-4 my-20'>
					{/* {mainpitch.title} */}
					<div className='flex flex-col -space-y-1 w-full justify-end text-end'>
						<span className='sans text-sm'>WHAT WE BELIEVE IN</span>
						<span className='serif text-xxl'>Explore our values</span>
					</div>
					<p className='sans text-lg'>
						Mental fitness is our capacity to handle life’s greatest challenges with a positive
						mindset rather than getting stressed or upset. When it comes to physical fitness, we are
						unlikely to be able to climb a mountain if we have not strengthened our muscles and
						built our stamina in advance. Mental fitness is similar; if we want to overcome
						stressful situations and view life through a positive mindset, we need to learn and
						practice the skills that will enable us to do so. In other words, we need to build our
						mental fitness.
						<br></br>
						<br></br>
						By strengthening three fundamental mental fitness muscles, leaders enhance their
						resilience and perseverance, spend less time in anger, regret, or blame, and unleash
						their creativity and innovation. Mental fitness training helps alleviate the impact of
						setbacks so personnel can remain resilient, constantly evolving, and contributing to the
						overall progress of the business.
					</p>
				</div>

				{/* WHO WE'VE WORKED WITH */}
				<div className='flex flex-col space-y-4'>
					<WorkedWithSection />
					<TestimonialsSection />
				</div>

				<ServicesSection />
				<ResourcesSection />

				{/* <div className='columns'>
					<div className='column is-12'>
						<h3 className='has-text-weight-semibold is-size-2'>{heading}</h3>
						<p>{description}</p>
					</div>
				</div>

				<Features gridItems={intro.blurbs} />
				<div className='columns' id='team'>
					<div className='column is-12 has-text-centered'>
						<Link className='btn' to='/products'>
							See all products
						</Link>
					</div>
				</div>
				<div className='column is-12'>
					<h3 className='has-text-weight-semibold is-size-2'>Latest stories</h3>
					<BlogRoll />
					<div className='column is-12 has-text-centered'>
						<Link className='btn' to='/blog'>
							Read more
						</Link>
					</div>
				</div> */}
			</div>
		</div>
	);
};

IndexPageTemplate.propTypes = {
	image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
	title: PropTypes.string,
	heading: PropTypes.string,
	subheading: PropTypes.string,
	mainpitch: PropTypes.object,
	description: PropTypes.string,
	intro: PropTypes.shape({
		blurbs: PropTypes.array,
	}),
};

const IndexPage = ({ data }) => {
	const { frontmatter } = data.markdownRemark;

	return (
		<Layout>
			<IndexPageTemplate
				image={frontmatter.image}
				title={frontmatter.title}
				heading={frontmatter.heading}
				subheading={frontmatter.subheading}
				mainpitch={frontmatter.mainpitch}
				description={frontmatter.description}
				intro={frontmatter.intro}
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
				image {
					childImageSharp {
						gatsbyImageData(quality: 100, layout: FULL_WIDTH)
					}
				}
				heading
				subheading
				mainpitch {
					title
					description
				}
				description
				intro {
					blurbs {
						image {
							childImageSharp {
								gatsbyImageData(width: 240, quality: 64, layout: CONSTRAINED)
							}
						}
						text
					}
					heading
					description
				}
			}
		}
	}
`;
