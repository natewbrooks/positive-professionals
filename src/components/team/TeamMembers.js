import React from 'react';
import PropTypes from 'prop-types';
import TeamMember from './TeamMember';

export default function TeamMembers({ gridItems, colors }) {
	const isOdd = gridItems.length % 2 !== 0;

	return (
		<div className='w-full h-full flex justify-center'>
			<div className='flex flex-col null:space-y-[12rem] md:space-y-[10rem] md:grid md:grid-cols-2 null:gap-x-6 xxl:gap-x-20 md:gap-y-[5rem] xl:gap-y-[3rem] w-fit h-fit place-items-end justify-items-center '>
				{gridItems.map((item, index) => {
					const lastItemClasses = isOdd && index === gridItems.length - 1 ? 'col-span-2' : '';
					return (
						<>
							<TeamMember
								key={index}
								member={item}
								color={colors[index % colors.length]}
								modalId={item.name}
								className={lastItemClasses}
								isLastItem={isOdd && index === gridItems.length - 1}
							/>
						</>
					);
				})}
			</div>
		</div>
	);
}
