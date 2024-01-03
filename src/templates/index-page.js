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
		<div>
			<FullWidthImage img={heroImage} title={title} subheading={subheading} />
			<section className='section section--gradient'>
				<div className='container'>
					<div className='section'>
						<div className='columns'>
							<div className='column is-10 is-offset-1'>
								<div className='content'>
									<div className='flex flex-col space-y-4'>
										{/* {mainpitch.title} */}
										<div className='flex flex-col -space-y-1'>
											<span className='sans text-sm'>WHO WE ARE</span>
											<span className='serif text-zl'>Uncover our story</span>
										</div>
										<p className='sans text-lg'>
											By strengthening three fundamental mental fitness muscles, leaders enhance
											their resilience and perseverance, spend less time in anger, regret, or blame,
											and unleash their creativity and innovation. Mental fitness training helps
											alleviate the impact of setbacks so personnel can remain resilient, constantly
											evolving, and contributing to the overall progress of the business.{' '}
										</p>
									</div>
									<TeamSection />
									<div className='flex flex-col space-y-4 my-20'>
										{/* {mainpitch.title} */}
										<div className='flex flex-col -space-y-1'>
											<span className='sans text-sm'>WHAT WE BELIEVE IN</span>
											<span className='serif text-zl'>Explore our values</span>
										</div>
										<p className='sans text-lg'>
											Recognize and overcome self-sabotaging behaviors of self-doubt, worry,
											perfectionism, overachievement, micromanagement, and imposter syndrome.
											Embrace alternative perspectives, see new possibilities, and make
											value-centered decisions for yourself and your team. Reframe negative
											experiences into gifts and opportunities. Increase personal energy and
											resilience by aligning actions and values. Delight customers with exceptional
											listening, collaboration, and innovation skills.
										</p>
									</div>

									{/* WHO WE'VE WORKED WITH */}
									<div className='flex flex-col space-y-4 my-20'>
										{/* {mainpitch.title} */}
										<div className='flex flex-col -space-y-1 text-end'>
											<span className='sans text-sm'>WHO WE'VE WORKED WITH</span>
										</div>
										<div className='bg-dark/10 flex justify-center w-full h-full p-4 rounded-md'>
											<div className='grid grid-cols-5 justify-items-center gap-10 w-full'>
												<FaUser size={100} />
												<FaUser size={100} />
												<FaUser size={100} />
												<FaUser size={100} />
												<FaUser size={100} />
												<FaUser size={100} />
												<FaUser size={100} />
												<FaUser size={100} />
												<FaUser size={100} />
												<FaUser size={100} />
											</div>
										</div>
									</div>

									{/* TESTIMONIALS */}
									<div className='w-full h-full my-20'>
										<div className='relative items-center justify-between flex py-2 space-x-1 group cursor-pointer'>
											<span className='sans text-sm'>TESTIMONIALS</span>
											<div className='flex items-center'>
												<span className='sans text-four group-hover:text-four/50 '>See more</span>
												<MdOutlineKeyboardArrowRight
													size={16}
													className='text-four group-hover:text-four/50 absolute opacity-0 translate-x-14 group-hover:translate-x-16 group-hover:opacity-100 transition-all delay-75 duration-300'
												/>
											</div>
										</div>
										<div className='w-full h-full grid grid-cols-3 gap-4'>
											<div className='flex flex-col'>
												<div className='relative flex flex-col -space-y-1 bg-dark/10 w-fit border-l-4 p-4 rounded-r-md border-primary'>
													<span className='sans text-md'>
														I loved working with these beautiful gals. So incredibly knowledgeable
														about coaching and wise beyond their years. They solved my mental
														health, and manifested $50,000 from thin air!
													</span>
												</div>
												<div className='flex items-center space-x-2 py-2'>
													<FaUser size={24} />
													<div className='flex flex-col'>
														<span className='serif text-md'>Theresa Clark</span>
														<span className='sans text-sm '>CISCO CYBER OPERATIONS</span>
													</div>
												</div>
											</div>
											<div className='flex flex-col'>
												<div className='relative flex flex-col -space-y-1 bg-dark/10 w-fit border-l-4 p-4 rounded-r-md border-primary'>
													<span className='sans text-md'>
														I loved working with these beautiful gals. So incredibly knowledgeable
														about coaching and wise beyond their years. They solved my mental
														health, and manifested $50,000 from thin air!
													</span>
												</div>
												<div className='flex items-center space-x-2 py-2'>
													<FaUser size={24} />
													<div className='flex flex-col'>
														<span className='serif text-md'>Theresa Clark</span>
														<span className='sans text-sm '>CISCO CYBER OPERATIONS</span>
													</div>
												</div>
											</div>
											<div className='flex flex-col'>
												<div className='relative flex flex-col -space-y-1 bg-dark/10 w-fit border-l-4 p-4 rounded-r-md border-primary'>
													<span className='sans text-md'>
														I loved working with these beautiful gals. So incredibly knowledgeable
														about coaching and wise beyond their years. They solved my mental
														health, and manifested $50,000 from thin air!
													</span>
												</div>
												<div className='flex items-center space-x-2 py-2'>
													<FaUser size={24} />
													<div className='flex flex-col'>
														<span className='serif text-md'>Theresa Clark</span>
														<span className='sans text-sm '>CISCO CYBER OPERATIONS</span>
													</div>
												</div>
											</div>
										</div>
									</div>

									<ServicesSection />

									<div className='columns'>
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
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
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
