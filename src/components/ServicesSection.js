import React from 'react';
import groupIcon from '../img/services/groupIcon.svg';
import oneononeIcon from '../img/services/oneononeIcon.svg';
import workshopIcon from '../img/services/workshopIcon.svg';
import { FaDumbbell, FaComments } from 'react-icons/fa';
import { FaPeopleGroup } from 'react-icons/fa6';
import ServicesItem from './ServicesItem';

export default function ServicesSection({ content }) {
	const services = [
		{
			Icon: FaComments,
			title: 'Personal Sessions',
			description: 'Schedule a one-on-one intimate meeting catered to your needs.',
			colorClass: 'bg-tertiary',
		},
		{
			Icon: FaPeopleGroup,
			title: 'Group Sessions',
			description:
				'Explore different avenues and engage with a group of people to stimulate your own personal growth.',
			colorClass: 'bg-primary',
		},
		{
			Icon: FaDumbbell,
			title: 'In-person Workshops',
			description:
				'Attend an in-person workshop to develop and find meaningful solutions among peers.',
			colorClass: 'bg-four',
		},
	];

	return (
		<section id='services' className='w-full h-full flex flex-col space-y-4'>
			<div className='flex flex-col text-start -space-y-1'>
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
					<ServicesItem key={index} service={service} />
				))}
			</div>

			<div className='w-full text-center my-4'>
				<span className='text-dark sans text-md hover:cursor-pointer select-none'>
					Click a service to learn more!
				</span>
			</div>
		</section>
	);
}
