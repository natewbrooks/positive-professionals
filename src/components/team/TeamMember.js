import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import PropTypes from 'prop-types';
import Modal from '../Modal';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function TeamMember({ member, color }) {
	const [isModalOpen, setModalOpen] = useState(false);

	const openModal = () => setModalOpen(true);
	const closeModal = () => setModalOpen(false);

	return (
		<div className='w-full h-full group hover:select-none hover:cursor-pointer'>
			<div
				onClick={() => setModalOpen(true)}
				className={`relative bg-dark/10 group-hover:bg-opacity-50 transition-all duration-300 ${color} bg-opacity-70 flex items-center py-12 px-20 rounded-md`}>
				<FaUser
					size={180}
					className=''
				/>
			</div>
			<div
				className='flex flex-col text-start py-1 -space-y-1'
				onClick={() => setModalOpen(true)}>
				<span className='sans xbold text-lg'>{member.name}</span>
				<span className='sans text-sm'>{member.position}</span>
			</div>

			<Modal
				isOpen={isModalOpen}
				onClose={closeModal}>
				<div className='flex w-full justify-between flex-col space-y-4 lg:flex-row lg:space-x-4 overflow-hidden'>
					<div className='flex items-center border-b-2 border-dark/10 pb-4 lg:border-none xl:pb-0'>
						<div className='relative flex flex-col justify-center items-center space-y-4 w-full px-8'>
							<FaUser
								className={`w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] md:w-[160px] md:h-[160px] xl:w-[200px] xl:h-[200px]`}
							/>
							<div className='flex flex-col items-center space-y-2'>
								<div className='flex flex-col items-center text-center text-nowrap -space-y-1'>
									<span className='sans xbold text-lg'>{member.name}</span>
									<span className='sans text-sm'>{member.position}</span>
								</div>
								<div className='flex flex-row space-x-2'>
									<FaLinkedin size={24} />
									<FaEnvelope size={24} />
								</div>
							</div>
						</div>
					</div>
					<div className='flex flex-col overflow-y-auto'>
						<div className='flex flex-col space-y-1 border-l-4 p-4 border-primary'>
							<span className='sans text-sm xbold'>CAREER BACKGROUND</span>
							<span className='sans text-md'>{member.careerBackground}</span>
						</div>
						<div className='flex flex-col space-y-1 border-l-4 p-4 border-secondary'>
							<span className='sans text-sm xbold'>SPECIALTIES</span>
							<span className='sans text-md'>{member.specialities}</span>
						</div>
						<div className='flex flex-col space-y-1 border-l-4 p-4 border-tertiary'>
							<span className='sans text-sm xbold'>INDUSTRY EXPERIENCE</span>
							<span className='sans text-md'>{member.industryExperience}</span>
						</div>
						<div className='flex flex-col space-y-1 border-l-4 p-4 border-four'>
							<span className='sans text-sm xbold'>CERTIFICATIONS</span>
							<span className='sans text-md'>{member.certifications}</span>
						</div>
						<div className='flex flex-col space-y-1 border-l-4 p-4 border-primary'>
							<span className='sans text-sm xbold'>EDUCATION</span>
							<span className='sans text-md'>{member.education}</span>
						</div>
					</div>
				</div>
			</Modal>
		</div>
	);
}

// TeamMember.propTypes = {
// 	name: PropTypes.string.isRequired,
// 	title: PropTypes.string.isRequired,
// 	description: PropTypes.string,
// };
