import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import TeamMemberModal from './TeamMemberModal';
import { useModal } from '../ModalContext';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export default function TeamMember({ member, color, modalId, className, isLastItem }) {
	const { openModal } = useModal();
	const imageData = member.pic ? getImage(member.pic) : null;

	return (
		<div
			className={`${className} ${
				isLastItem ? 'w-fit' : 'w-full'
			} h-full justify-center items-center group null:mt-[5rem] md:mt-[8rem]`}>
			<div
				onClick={() => openModal(modalId)}
				className={`relative justify-end items-end md:group-hover:cursor-pointer bg-dark/10 md:group-hover:bg-opacity-50 transition-all duration-300 ${color} flex items-center justify-center w-[320px] h-[250px] rounded-md aspect-square`}>
				{imageData ? (
					<GatsbyImage
						image={imageData}
						alt={member.name}
						className='w-full h-fit -translate-y-[35px]'
					/>
				) : (
					<FaUser
						size={180}
						className='text-dark'
					/>
				)}
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
