import React from 'react';
import PropTypes from 'prop-types';
import TeamMember from './TeamMember';

export default function TeamMembers({ gridItems, colors }) {
	const isOdd = gridItems.length % 2 !== 0;

	return (
		<div className='w-full h-full flex justify-center pt-[4rem]'>
			<div className='flex flex-col null:space-y-[6rem] sm:space-y-[8rem] md:space-y-[0rem] md:gap-y-[8rem] md:grid md:grid-cols-2 null:gap-x-6 xxl:gap-x-20  w-fit h-fit place-items-end justify-items-center '>
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
