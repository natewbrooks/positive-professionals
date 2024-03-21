import React, { useState, useRef, useEffect } from 'react';

import Modal from '../../Modal';
import {
	FaUserTie,
	FaUsersCog,
	FaChalkboardTeacher,
	FaLightbulb,
	FaBrain,
	FaHourglassStart,
	FaCheck,
} from 'react-icons/fa';
import ServicesItem from '../services/ServicesItem';
import waveTop from '../../../../static/img/bg-waves/services-waves/wave-top.svg';
import waveBottom from '../../../../static/img/bg-waves/services-waves/wave-bottom.svg';

export default function ServicesSection({ content }) {
	const [openWorkshopTitle, setOpenWorkshopTitle] = useState(null);
	const contentRefs = useRef({});

	const toggleWorkshopInfo = (title) => {
		setOpenWorkshopTitle((prevOpenWorkshopTitle) =>
			prevOpenWorkshopTitle === title ? null : title
		);
	};

	useEffect(() => {
		// Transition for opening/closing sections
		Object.keys(contentRefs.current).forEach((key) => {
			const element = contentRefs.current[key];
			if (element) {
				element.style.transition = 'height 0.5s ease-in-out';
				element.style.overflow = 'hidden';
				if (key === openWorkshopTitle) {
					element.style.height = `${element.scrollHeight}px`;
				} else {
					element.style.height = '0px';
				}
			}
		});
	}, [openWorkshopTitle]);

	const services = [
		{
			Icon: FaUserTie,
			title: 'Individual Coaching',
			description:
				'Personalized, one-on-one sessions to help you navigate your career and personal growth objectives.',
			overview:
				'Individual coaching is a personalized and focused approach to personal and professional development. It is tailored to the unique needs, aspirations, and circumstances of each client, providing them with dedicated support and guidance on their journey of growth and improvement.',
			benefits: ['Tailored to your needs', 'One-on-one coaching', 'Flexible scheduling'],
			pricing: '4-session packages - $600. Additional options available',
			colorClass: 'bg-tertiary',
		},
		{
			Icon: FaUsersCog,
			title: 'Individual & Team Assessments',
			description:
				'Valuable insights into traits, behaviors, and styles that impact personal and team performance.',
			overview:
				'Individual and Team Assessments provide valuable insights into traits, behaviors, and styles that impact how we view ourselves and how others view us. They can reveal blindspots, highlight strengths, and identify areas for improvement and growth. They provide a platform for transformational coaching and fulfillment.',
			assessments: [
				{
					title: 'EQi-2.0® and EQi 360® ',
					descriptionHTML: `<p>The Emotional Quotient Inventory is the leading measure of emotional intelligence. The EQi-2.0® is an on-line assessment that identifies areas of strength and potential development. It can be taken as a self-assessment only (EQi-2.0®) or expanded to provide a multi-rater perspective (EQi-360®).</p>`,
				},
				{
					title: 'Global DiSC™',
					descriptionHTML: `
					<p>This is an on-line assessment that measures individual preferences based on cultural orientation and personality type. It provides a great platform for individuals or groups to help build connections and work effectively with others across differences.</p>`,
				},
				{
					title: 'Hogan',
					descriptionHTML: `
					<p>This 3-part on-line comprehensive personality assessment provides valuable insights into:</p>
					<br>
					<div style="list-style-position: outside; width: fit-content; text-align: left; padding: 0px 4px; display: flex; flex-direction: column; justify-content: left; align-items: left;">
						<li margin-bottom: 0.15rem;"><strong>Our Bright Side</strong> - How we relate to others when we are at our best (Hogan Personality Inventory)</li>
						<li style="" margin-bottom: 0.15rem;"><strong>Our Dark Side</strong> – How we engage with and relate to others when under stress (Hogan Development Survey)</li>
						<li style=""><strong>Our Inside</strong> – What motivates and guides us (Motives, Values, and Preferences Inventory)</li>
					</div>
					`,
				},
				{
					title: 'Leadership Versatility Index©',
					descriptionHTML: `
					<p>The LVI© is a 360-degree assessment of the behaviors required for effective leadership today. It characterizes the versatility you demonstrate in both how you lead (forceful/enabling) and what you lead (strategic/operational). It is a great way to identify opportunities for more effective leadership.</p>`,
				},
			],
			pricing:
				'Includes assessment + 3 hours of coaching: EQi-2.0® - $1,000/person, EQi 360® - $1,200/person, Global DiSC™ - $600/person, Hogan - $750/person, LVI© - $1,000/person',
			colorClass: 'bg-four',
		},
		{
			Icon: FaChalkboardTeacher,
			title: 'Team Coaching',
			description:
				'A collaborative process that helps teams reach peak performance by clarifying their purpose, values, goals, and roles.',
			overview:
				'Team Coaching is a collaborative process that helps new and existing teams reach peak performance by clarifying their purpose, values, goals, and individual roles. It helps resolve challenges, foster innovation, and achieve ambitious goals. Working with the Team Leader we co-design an approach tailored to meet your team’s unique needs.',
			benefits: [
				'Tailored approach to team’s needs',
				'Clarifies team values, purpose, and goals',
				'Captures team norms and expectations',
				'Boosts engagement and team performance',
				'Enhances problem-solving',
				'Builds conflict resolution abilities',
				'Teaches sustainable team skills',
				'Improves communication, collaboration, and cohesion',
			],
			pricing:
				'Starting at $3000 – includes intake and set-up with Team Leader, informal team assessment, 4 team coaching engagements, and final check-in. Formal team assessments available as well for a fee.',
			colorClass: 'bg-primary',
		},
		{
			Icon: FaLightbulb,
			title: 'Workshops',
			description:
				'Interactive, skill-building sessions focused on professional development and innovative thinking.',
			overview:
				'All workshops are designed to increase attendee understanding, build skills, and lead to positive application of insights, knowledge, and tools. On-line workshops are designed for up to 15 participants; in-person workshops are designed for up to 25 participants. Greater numbers may be accommodated.',
			workshops: [
				{
					title: 'Achieving Excellence: Harnessing the Power of DEI',
					description:
						"In this highly interactive workshop attendees will explore how diverse perspectives and inclusive practices can spark creativity and drive business growth, while also understanding the critical role Diversity, Equity, and Inclusion (DEI) plays in enhancing motivation, productivity, and retention. Through practical exercises and discussions, participants will begin creating a DEI plan tailored to their organization's specific needs, learning how to create opportunities for underrepresented groups and foster a culture that champions diversity as a key to success. Attendees will leave equipped with knowledge and tools to leverage DEI initiatives within the organization to boost innovation, employee engagement, and overall company performance.",
				},
				{
					title: 'Adaptability and Resilience',
					description:
						'Join us for our "Thrive Through Change: Building Adaptability and Resilience Workshop" and equip yourself with the tools to navigate challenges with confidence and resilience. Register now to secure your spot and unlock the secrets to thriving and bouncing back stronger in the face of change and adversity.',
				},
				{
					title: 'Assertive Communications',
					description:
						'Join us for our "Assertive Communication Mastery for Female Leaders Workshop" and take your leadership skills to the next level. Register now to secure your spot and unlock the secrets to confident and impactful communication in the workplace.',
				},
				{
					title: 'Elevate Influence',
					description:
						'Join us for our "Strategies for Enhancing Workplace Impact Workshop" and elevate your influence within the workplace. Register now to secure your spot and learn practical strategies for increasing visibility, adapting communication styles, and positioning yourself as a leader. Don\'t miss this opportunity to enhance your professional impact and achieve your career goals.',
				},
				{
					title: 'EmpowerHER',
					description:
						'Join us for our "EmpowerHER: Building Confidence and Resilience for Women Leaders Workshop" and unlock your full potential as a leader. Register now to secure your spot and discover the strategies for boosting confidence, overcoming self-doubt, and leading with resilience and authenticity.',
				},
				{
					title: 'Leading Across Generations',
					description:
						'In this workshop, participants will dive into the complex world of managing a team comprised of multiple generations, including Baby Boomers, Gen X, Millennials, and Gen Z. Through discussions and activities, attendees will explore the unique characteristics, values, and work styles typical of each generation, challenge stereotypes, and identify commonalities that can unite their team. Participants will gain valuable insights and learn practical tools and strategies to improve communication and collaboration across diverse age groups and create an inclusive work environment in which everyone feels valued and fully able to contribute.',
				},
				{
					title: 'Leading with Inclusion: A Workshop on Cultivating a Diversity Mindset',
					description:
						'This transformative workshop will equip leaders with essential tools and strategies for leading with a diversity mindset. Participants will delve into the fundamentals of Diversity, Equity, and Inclusion (DEI) and explore how to create inclusive environments that celebrate diversity and promote belonging. Through interactive discussions, case studies, and experiential exercises, attendees will gain insights into recognizing and addressing bias, fostering empathy, and leading inclusively. Leaders will learn to leverage their influence to create a workplace that enjoys the success that comes with embracing differences and unleashing the power of a highly engaged workforce.',
				},
			],
			pricing:
				'2-hour workshop $500, 4-hour workshop $1500, 8-hour workshop $3000. Prices may vary depending on special requests.',
			colorClass: 'bg-four',
		},
		{
			Icon: FaBrain,
			title: 'Positive Intelligence™ Bootcamp',
			description: 'A 7-week program to boost your mental fitness and resilience.',
			overview:
				'Most of us are introduced to the importance of physical fitness as early as elementary school. Few of us learn about the equally important practice of mental fitness. Our 7-week Positive Intelligence (PQ) bootcamp will introduce key mental fitness concepts and practices, and help you start building your mental fitness “muscles” right away. Ideal for groups (‘pods’) of 3-5 people.',
			benefits: [
				'Provides clarity on what’s holding you back',
				'Enables daily growth through mobile app',
				'Improves relationships',
				'Reduces fear, anxiety, guilt, regret',
				'Builds positivity',
				'Unleashes creativity and innovation',
				'Builds connections with other pod members',
				'Includes weekly group coaching',
			],
			pricing:
				' $1200 per person – includes PQ Saboteur Assessment, weekly training videos, access to a mobile app for daily guided practice, an e-book copy of Positive Intelligence by Shirzad Chamine, and weekly group-coaching',
			colorClass: 'bg-four',
		},
	];

	return (
		<section
			id='services'
			className='relative w-full h-full'>
			<div className='z-[1] absolute w-full h-full left-0'>
				<img
					src={waveTop}
					alt='Services wave top bg'
					style={{ transform: 'translateY(-90%)' }}
					className='absolute w-full h-fit top-0 z-[-1] '></img>
				<div className='absolute w-full h-full bg-tertiary '></div>
				<img
					src={waveBottom}
					alt='Services wave bottom bg'
					className='translate-y-[90%] absolute w-full h-fit bottom-0 z-[-1]'></img>
			</div>

			<div className='text-dark w-full h-full flex flex-col space-y-4 null:py-8 md:py-0'>
				<div className='z-10 flex flex-col text-start -space-y-1 leading-snug'>
					<span className='sans text-sm'>WHAT WE CAN DO FOR YOU</span>
					<span className='serif text-xxl leading-none'>Our services</span>
				</div>
				<span className='z-10 sans text-lg leading-snug'>
					We help you recognize and overcome self-sabotaging behaviors of self-doubt, worry,
					perfectionism, overachievement, micromanagement, and imposter syndrome. Embrace
					alternative perspectives, see new possibilities, and make value-centered decisions for
					yourself and your team. Reframe negative experiences into gifts and opportunities.
					Increase personal energy and resilience by aligning actions and values. Delight customers
					with exceptional listening, collaboration, and innovation skills.
				</span>
				<div className='text-dark grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-1 h-full w-full '>
					{services.map((service, index) => (
						<React.Fragment key={service.title + index}>
							<div
								className={`md:group md:hover:opacity-80 transition-all duration-300 cursor-pointer select-none md:active:scale-95 flex justify-end items-end  w-full h-full z-10 rounded-sm bg-light/30 dark:bg-dark/50`}>
								<ServicesItem
									key={index}
									service={service}
									modalId={'service' + index}
								/>
							</div>
							<Modal modalId={'service' + index}>
								<div className='md:max-w-[600px] md:max-h-[600px] flex flex-col w-full h-full text-dark dark:text-light/70 overflow-hidden'>
									<div className={`flex flex-col leading-none pb-2`}>
										<span className='text-sm text-four xbold sans w-full text-center'>SERVICE</span>
										<span className='text-xxl serif w-full text-center'>{service.title}</span>
									</div>
									<div className='w-full overflow-x-hidden overflow-y-auto flex flex-col space-y-4 mt-4'>
										<div className='flex flex-col'>
											<span className='text-sm xbold sans'>OVERVIEW</span>
											<span className='text-md sans cursor-text select-text '>
												{service.overview}
											</span>
										</div>
										{service.benefits && (
											<div className='flex flex-col w-full'>
												<span className='text-sm font-bold sans pb-2'>BENEFITS</span>
												<div className='grid sm:grid-cols-2 gap-y-2 px-4  bg-dark/10 dark:bg-light/10 p-2 rounded-md'>
													{service.benefits.map((benefit, index) => (
														<div
															key={`serviceBenefit${index}`}
															className='flex items-center h-full space-x-3'>
															{/* Icon size set using a style prop to ensure consistency */}
															<div className={`bg-dark dark:bg-light/70 rounded-full p-1`}>
																<FaCheck
																	className={`text-lightAccent dark:text-darkAccent`}
																	size={8}
																/>
															</div>
															<span className='cursor-text select-text sans text-sm text-dark  w-full leading-none flex items-center h-[38px]'>
																{benefit}
															</span>
														</div>
													))}
												</div>
											</div>
										)}
										{service.workshops && (
											<div className='flex flex-col w-full'>
												<span className='text-sm font-bold sans pb-2'>WORKSHOPS</span>
												<div className='flex flex-col space-y-1'>
													{service.workshops.map((workshop, wIndex) => (
														<div
															key={`serviceWorkshops${wIndex}`}
															className='w-full text-sm pr-4'>
															<div
																className='cursor-pointer flex flex-col items-center text-center bg-dark/10 dark:bg-light/10 text-dark dark:text-light/70 xbold p-2 rounded-md'
																onClick={() => {
																	toggleWorkshopInfo(workshop.title);
																}}>
																<span className='py-2 sans xbold w-full'>{workshop.title}</span>
																<div
																	ref={(el) => (contentRefs.current[workshop.title] = el)}
																	style={{
																		maxHeight: 'fit-content',
																		overflow: 'hidden',
																		transition: 'height 0.5s ease-in-out',
																	}}
																	className={`collapsible-content w-full bg-light dark:bg-dark rounded-md`}>
																	<div className='p-2 sans text-dark dark:text-light/50'>
																		{workshop.description}
																	</div>
																</div>
															</div>
														</div>
													))}
												</div>
											</div>
										)}

										{service.assessments && (
											<div className='flex flex-col w-full'>
												<span className='text-sm font-bold sans pb-2'>ASSESSMENTS</span>
												<div className='flex flex-col space-y-1'>
													{service.assessments.map((assessment, wIndex) => (
														<div
															key={`serviceWorkshops${wIndex}`}
															className='w-full text-sm pr-4'>
															<div
																className='cursor-pointer flex flex-col items-center text-center bg-dark/10 dark:bg-light/10 text-dark dark:text-light/70 xbold p-2 rounded-md'
																onClick={() => {
																	toggleWorkshopInfo(assessment.title);
																}}>
																<span className='py-2 sans xbold w-full'>{assessment.title}</span>
																<div
																	ref={(el) => (contentRefs.current[assessment.title] = el)}
																	style={{
																		maxHeight: 'fit-content',
																		overflow: 'hidden',
																		transition: 'height 0.5s ease-in-out',
																	}}
																	className={`collapsible-content w-full bg-light dark:bg-dark rounded-md`}>
																	<div
																		dangerouslySetInnerHTML={{
																			__html: assessment.descriptionHTML,
																		}}
																		className='p-2 sans text-dark dark:text-light/50'></div>
																</div>
															</div>
														</div>
													))}
												</div>
											</div>
										)}

										{service.pricing && (
											<div className='flex flex-col'>
												<span className='text-sm xbold sans'>PRICING</span>
												<span className='text-md sans'>{service.pricing}</span>
											</div>
										)}
									</div>
								</div>
							</Modal>
						</React.Fragment>
					))}
					<div
						className={`opacity-50 select-none flex justify-end items-end  w-full h-full z-10 rounded-sm bg-light/30 dark:bg-dark/50`}>
						<ServicesItem
							service={{
								Icon: FaHourglassStart,
								title: 'COMING SOON...',
								description: '',
								colorClass: 'bg-four',
							}}
						/>
					</div>
				</div>

				<div className='z-10 w-full text-center'>
					<span className='text-dark/50 sans text-md select-none'>
						Click a service to learn more!
					</span>
				</div>
			</div>
		</section>
	);
}
