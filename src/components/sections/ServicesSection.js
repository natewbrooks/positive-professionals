import React from 'react';
import Modal from '../Modal';
import {
	FaUserTie,
	FaUsersCog,
	FaChalkboardTeacher,
	FaLightbulb,
	FaBrain,
	FaVideo,
} from 'react-icons/fa';
import { FaPeopleGroup } from 'react-icons/fa6';
import ServicesItem from '../services/ServicesItem';
import waveTop from '../../img/bg-waves/services-waves/wave-top.svg';
import waveBottom from '../../img/bg-waves/services-waves/wave-bottom.svg';

export default function ServicesSection({ content }) {
	const services = [
		{
			Icon: FaUserTie,
			title: 'Individual Coaching',
			description:
				'Personalized, one-on-one sessions to help you navigate your career and personal growth objectives.',
			colorClass: 'bg-tertiary',
		},
		{
			Icon: FaUsersCog,
			title: 'Individual & Team Assessments',
			description:
				'Comprehensive evaluations to identify strengths and areas for development, fostering team synergy and individual excellence.',
			colorClass: 'bg-four',
		},
		{
			Icon: FaChalkboardTeacher,
			title: 'Team Coaching',
			description:
				'Collaborative coaching designed to enhance team dynamics, communication, and collective performance.',
			colorClass: 'bg-primary',
		},
		{
			Icon: FaLightbulb,
			title: 'Workshops',
			description:
				'Interactive, skill-building sessions focused on professional development and innovative thinking.',
			colorClass: 'bg-four',
		},
		{
			Icon: FaBrain,
			title: 'Positive Intelligence™ Bootcamp',
			description:
				'A mental fitness program to boost resilience, improve performance, and enhance well-being.',
			colorClass: 'bg-four',
		},
		{
			Icon: FaVideo,
			title: 'Webinars',
			description:
				'Engaging online seminars covering the latest trends and insights in leadership and performance.',
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
				<div className='z-10 flex flex-col text-start -space-y-1 leading-tight'>
					<span className='sans text-sm'>WHAT WE CAN DO FOR YOU</span>
					<span className='serif text-xxl'>Our services</span>
				</div>
				<span className='z-10 sans text-lg'>
					We help you recognize and overcome self-sabotaging behaviors of self-doubt, worry,
					perfectionism, overachievement, micromanagement, and imposter syndrome. Embrace
					alternative perspectives, see new possibilities, and make value-centered decisions for
					yourself and your team. Reframe negative experiences into gifts and opportunities.
					Increase personal energy and resilience by aligning actions and values. Delight customers
					with exceptional listening, collaboration, and innovation skills.
				</span>
				<div className='text-dark grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-1 h-full'>
					{services.map((service, index) => (
						<>
							<div className={`w-full h-full z-10 rounded-sm bg-light/30 dark:bg-dark/50`}>
								<ServicesItem
									key={index}
									service={service}
									modalId={'service' + index}
								/>
							</div>
							<Modal modalId={'service' + index}>
								<div className='flex w-full h-full text-dark dark:text-light/70 '>
									<div className='flex flex-col'>
										<span className='text-xl serif'>{service.title}</span>
									</div>
								</div>
							</Modal>
						</>
					))}
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
