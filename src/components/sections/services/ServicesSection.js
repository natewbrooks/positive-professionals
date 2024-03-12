import React, { useState } from 'react';
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
import { MdArrowRight, MdArrowLeft } from 'react-icons/md';
import ServicesItem from '../services/ServicesItem';
import waveTop from '../../../../static/img/bg-waves/services-waves/wave-top.svg';
import waveBottom from '../../../../static/img/bg-waves/services-waves/wave-bottom.svg';

export default function ServicesSection({ content }) {
	const [shownWorkshopInfos, setShownWorkshopInfos] = useState(new Set());

	const toggleWorkshopInfo = (title) => {
		setShownWorkshopInfos((prevShownWorkshopInfos) => {
			const newShownWorkshopInfos = new Set(prevShownWorkshopInfos);
			if (newShownWorkshopInfos.has(title)) {
				newShownWorkshopInfos.delete(title);
			} else {
				newShownWorkshopInfos.add(title);
			}
			return newShownWorkshopInfos;
		});
	};

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
	];

	const benefits = [
		'Personalized approach to development',
		'One-on-one sessions with a coach',
		'Helps achieve specific goals',
		'Overcomes challenges',
		'Maximizes potential',
		'Tailored to unique needs and aspirations',
		'Provides dedicated support and guidance',
		'Facilitates growth and improvement',
	];

	const workshopTypes = [
		{ title: '2 hour workshop', info: '2 hour workshop extended information' },
		{ title: '4 hour workshop', info: '4 hour workshop extended information' },
		{ title: '8 hour workshop', info: '8 hour workshop extended information' },
	];

	const timeline = [
		'Initial Assessment',
		'Goal Setting',
		'Personalized Plan Development',
		'Skill Building Activities',
		'Progress Evaluation',
		'Strategy Optimization',
		'Final Review & Future Planning',
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
				<div className='text-dark grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-1 h-full'>
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
								<div className='md:max-w-[600px] flex flex-col w-full h-full text-dark dark:text-light/70 overflow-hidden'>
									<div className={`flex flex-col leading-none pb-2`}>
										<span className='text-sm text-four xbold sans w-full text-center'>SERVICE</span>
										<span className='text-xxl serif w-full text-center'>{service.title}</span>
									</div>
									<div className='w-full overflow-x-hidden overflow-y-auto flex flex-col space-y-4 mt-4'>
										<div className='flex flex-col'>
											<span className='text-sm xbold sans'>OVERVIEW</span>
											<span className='text-md sans'>
												Individual coaching is a personalized and focused approach to personal and
												professional development. It is tailored to the unique needs, aspirations,
												and circumstances of each client, providing them with dedicated support and
												guidance on their journey of growth and improvement.
											</span>
										</div>
										<div className='flex flex-col w-full'>
											<span className='text-sm font-bold sans pb-2'>BENEFITS</span>
											<div className='grid grid-cols-2 text-center xl:text-start xl:grid-cols-4 gap-1 justify-center items-center pr-4 overflow-x-auto overflow-y-hidden h-fit'>
												{benefits.map((benefit, index) => (
													<div
														key={`serviceBenefit${index}`}
														className='flex items-center h-full text-center space-x-2 bg-dark/10 dark:bg-light/10 text-dark dark:text-light/70 xbold p-2 rounded-md'>
														{/* Icon size set using a style prop to ensure consistency */}
														<div className={`bg-dark dark:bg-light/70 rounded-full p-1`}>
															<FaCheck
																className={`text-lightAccent dark:text-darkAccent`}
																size={10}
															/>
														</div>
														<span className='text-xs sans xbold w-full leading-none flex items-center justify-center h-[38px]'>
															{benefit}
														</span>
													</div>
												))}
											</div>
										</div>
										<div
											className={`${
												service.title === 'Workshops' ? 'flex flex-col' : 'hidden'
											} w-full`}>
											<span className='text-sm font-bold sans pb-2'>WORKSHOPS</span>
											<div className='flex flex-col space-y-1'>
												{workshopTypes.map((workshop, index) => (
													<div
														key={`serviceWorkshops${index}`}
														className='w-full text-sm pr-4'>
														<div
															className='cursor-pointer flex items-center text-center bg-dark/10 dark:bg-light/10 text-dark dark:text-light/70 xbold p-2 rounded-md'
															onClick={() => toggleWorkshopInfo(workshop.title)}>
															<span className='py-2 sans xbold w-full'>{workshop.title}</span>
														</div>
														<div
															style={{
																maxHeight: shownWorkshopInfos.has(workshop.title) ? '500px' : '0px',
																transition: 'max-height 0.5s ease-in-out',
															}}
															className='overflow-hidden transition-all w-full text-center'>
															<span className={`sans text-dark dark:text-light/50`}>
																{workshop.info}
															</span>
														</div>
													</div>
												))}
											</div>
										</div>

										<div className='flex flex-col'>
											<span className='text-sm xbold sans'>PRICING</span>
											<span className='text-md sans'>
												Individual coaching is a personalized and focused approach to personal and
												professional development. It is tailored to the unique needs, aspirations,
												and circumstances of each client, providing them with dedicated support and
												guidance on their journey of growth and improvement.
											</span>
										</div>
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
