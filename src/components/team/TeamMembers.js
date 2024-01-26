import React from 'react';
import PropTypes from 'prop-types';
import TeamMember from './TeamMember';

export default function TeamMembers({ gridItems, colors }) {
	return (
		<div className='w-full h-full flex justify-center'>
			<div className='flex flex-col sm:grid sm:grid-cols-2 gap-y-4 sm:gap-x-4 w-fit h-fit'>
				{gridItems.map((item, index) => (
					<TeamMember
						key={index}
						member={item}
						color={colors[index % colors.length]}
						modalId={item.name}
					/>
				))}
			</div>
		</div>
	);
}
