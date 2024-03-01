import React from 'react';
import PropTypes from 'prop-types';
import TeamMember from './TeamMember';

export default function TeamMembers({ gridItems, colors }) {
	const isOdd = gridItems.length % 2 !== 0;

	return (
		<div className='w-full h-full flex justify-center pt-[4rem]'>
			<div className='flex flex-col null:space-y-[9rem] sm:space-y-[8rem] md:space-y-[2rem] md:gap-y-[8rem] md:grid md:grid-cols-2 null:gap-x-6 xxl:gap-x-20  w-fit h-fit place-items-end justify-items-center '>
				{gridItems.map((item, index) => {
					const lastItemClasses = isOdd && index === gridItems.length - 1 ? 'col-span-2' : '';
					return (
						<React.Fragment key={index + item.name}>
							<TeamMember
								member={item}
								color={colors[index % colors.length]}
								modalId={item.name}
								className={lastItemClasses}
								isLastItem={isOdd && index === gridItems.length - 1}
							/>
						</React.Fragment>
					);
				})}
			</div>
		</div>
	);
}
