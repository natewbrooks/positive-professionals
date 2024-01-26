import React from 'react';
import groupIcon from '../../img/services/groupIcon.svg';
import oneononeIcon from '../../img/services/oneononeIcon.svg';
import workshopIcon from '../../img/services/workshopIcon.svg';
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
import bgTop from '../../img/bg-waves/purple-waves/purple-wave-top.svg';
import bgBottom from '../../img/bg-waves/purple-waves/purple-wave-bottom.svg';

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
			className='relative bg-secondary text-dark w-full h-full flex flex-col space-y-4'>
			<img
				src={bgTop}
				style={{ transform: 'translateY(-65%)' }}
				className='absolute w-full left-0 top-0 '></img>
			<img
				src={bgBottom}
				style={{ transform: 'translateY(70%)' }}
				className='absolute w-full left-0 bottom-0 '></img>

			<div className='flex flex-col text-start -space-y-1 leading-tight'>
				<span className='sans text-sm'>WHAT WE CAN DO FOR YOU</span>
				<span className='serif text-xxl'>Our services</span>
			</div>
			<span className='sans text-lg'>
				We help you recognize and overcome self-sabotaging behaviors of self-doubt, worry,
				perfectionism, overachievement, micromanagement, and imposter syndrome. Embrace alternative
				perspectives, see new possibilities, and make value-centered decisions for yourself and your
				team. Reframe negative experiences into gifts and opportunities. Increase personal energy
				and resilience by aligning actions and values. Delight customers with exceptional listening,
				collaboration, and innovation skills.
			</span>
			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 h-full'>
				{services.map((service, index) => (
					<ServicesItem
						key={index}
						service={service}
					/>
				))}
			</div>

			<div className='w-full text-center my-4'>
				<span className='text-dark/50 sans text-md select-none'>
					Click a service to learn more!
				</span>
			</div>
		</section>
	);
}
