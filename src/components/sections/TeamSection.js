import React from 'react';
import TeamMembers from '../team/TeamMembers';
import SeeMore from '../pieces/SeeMore';

const teamColors = ['bg-primary', 'bg-secondary', 'bg-tertiary', 'bg-four'];

export default function TeamSection({ data }) {
	return (
		<section
			id='team'
			className='text-dark dark:text-light/60 flex flex-col items-center justify-center space-y-4'>
			<div className='flex w-full flex-col leading-tight text-end'>
				<span className='sans text-sm'>{data.subtext.toUpperCase()}</span>

				<span className='text-xxl serif'>{data.header}</span>
			</div>

			<TeamMembers
				gridItems={data.members}
				colors={teamColors}
			/>
		</section>
	);
}
