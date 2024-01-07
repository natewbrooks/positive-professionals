import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import PropTypes from 'prop-types';
import Modal from './Modal';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function TeamMember({ member }) {
	const [isModalOpen, setModalOpen] = useState(false);

	const openModal = () => setModalOpen(true);
	const closeModal = () => setModalOpen(false);

	return (
		<div className='w-full h-full group hover:select-none hover:cursor-pointer'>
			<div
				onClick={() => setModalOpen(true)}
				className={`relative bg-dark/10 group-hover:bg-opacity-50 transition-all duration-300 ${member.colorClass} bg-opacity-70 flex items-center py-12 px-20 rounded-md`}>
				<FaUser size={180} className='' />
			</div>
			<div className='flex flex-col text-start py-1' onClick={() => setModalOpen(true)}>
				<span className='serif text-lg'>{member.name}</span>
				<span className='sans text-sm'>{member.title}</span>
			</div>

			<Modal isOpen={isModalOpen} onClose={closeModal}>
				<div className='flex w-full justify-between space-x-4 overflow-hidden'>
					<div className='flex items-center'>
						<div className='flex flex-col space-y-2 w-full px-8'>
							<FaUser size={200} />
							<div className='flex flex-col text-start py-1'>
								<span className='serif text-lg'>{member.name}</span>
								<span className='sans text-sm'>{member.title}</span>
							</div>
							<div className='flex flex-row space-x-2'>
								<FaLinkedin size={24} />
								<FaEnvelope size={24} />
							</div>
						</div>
					</div>
					<div className='flex flex-col overflow-y-auto'>
						<div className='flex flex-col space-y-1 border-l-4 p-4 border-primary'>
							<span className='sans text-sm xbold'>CAREER BACKGROUND</span>
							<span className='sans text-md'>{member.background}</span>
						</div>
						<div className='flex flex-col space-y-1 border-l-4 p-4 border-secondary'>
							<span className='sans text-sm xbold'>SPECIALTIES</span>
							<span className='sans text-md'>{member.specialties}</span>
						</div>
						<div className='flex flex-col space-y-1 border-l-4 p-4 border-tertiary'>
							<span className='sans text-sm xbold'>INDUSTRY EXPERIENCE</span>
							<span className='sans text-md'>{member.experience}</span>
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
