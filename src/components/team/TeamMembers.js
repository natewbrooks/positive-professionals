import React from 'react';
import PropTypes from 'prop-types';
import TeamMember from './TeamMember';

export default function TeamMembers({ gridItems, colors }) {
	const isOdd = gridItems.length % 2 !== 0;
	console.log(isOdd);

	return (
		<div className='w-full h-full flex justify-center'>
			<div className='flex flex-col sm:grid sm:grid-cols-2 gap-y-4 sm:gap-x-4 w-fit h-fit place-items-center justify-items-center '>
				{gridItems.map((item, index) => {
					const lastItemClasses = isOdd && index === gridItems.length - 1 ? 'col-span-2' : '';
					return (
						<TeamMember
							key={index}
							member={item}
							color={colors[index % colors.length]}
							modalId={item.name}
							className={lastItemClasses}
							isLastItem={isOdd && index === gridItems.length - 1}
						/>
					);
				})}
			</div>
		</div>
	);
}
