import React from 'react';
import TeamMembers from '../team/TeamMembers';
import SeeMore from '../pieces/SeeMore';

export default function WhoWeAreSection({ data }) {
	const renderParagraphs = (text) => {
		return text.split('\n').map((item, key) => {
			return (
				<p
					key={key}
					className='sans text-lg'>
					{item}
				</p>
			);
		});
	};

	return (
		<section
			id='whoWeAre'
			className='flex flex-col space-y-4 xxl:max-w-[50%]'>
			<div className='flex flex-col -space-y-1'>
				<span className='sans text-sm'>{data.subtext.toUpperCase()}</span>
				<span className='serif text-xxl'>{data.header}</span>
			</div>
			{renderParagraphs(data.body)}
		</section>
	);
}
