import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import TeamMemberModal from './TeamMemberModal';
import { useModal } from '../ModalContext';

export default function TeamMember({ member, color, modalId, className, isLastItem }) {
	const { openModal } = useModal();

	return (
		<div
			className={`${className} ${
				isLastItem ? 'w-fit' : 'w-full'
			} h-full justify-center items-center group`}>
			<div
				onClick={() => openModal(modalId)}
				className={`relative group-hover:cursor-pointer bg-dark/10 group-hover:bg-opacity-50 transition-all duration-300 ${color} flex items-center justify-center py-12 px-20 rounded-md`}>
				<FaUser
					size={180}
					className='text-dark'
				/>
			</div>
			<div
				className='flex flex-col text-start py-1 leading-tight'
				onClick={() => openModal(modalId)}>
				<span className='sans xbold text-lg dark:text-light/80'>{member.name}</span>
				<span className='sans text-sm'>{member.position}</span>
			</div>

			<TeamMemberModal member={member} />
		</div>
	);
}

// TeamMember.propTypes = {
// 	name: PropTypes.string.isRequired,
// 	title: PropTypes.string.isRequired,
// 	description: PropTypes.string,
// };
