import React from 'react';
import TeamMembers from '../../team/TeamMembers';
import SeeMore from '../../pieces/SeeMore';

export default function WhoWeAreSection({ data }) {
	const renderParagraphs = (text) => {
		return text.split('\n').map((item, key) => {
			return (
				<>
					<p
						key={key}
						className='sans text-lg'>
						{item}
					</p>
					<br />
				</>
			);
		});
	};

	return (
		<div
			id='whoWeAre'
			className='text-dark dark:text-light/60 flex flex-col space-y-4 xxl:max-w-[50%]'>
			<div className='flex flex-col leading-snug'>
				<span className='sans text-sm '>{data.subtext.toUpperCase()}</span>
				<span className='serif text-xxl dark:text-light/80'>{data.header}</span>
			</div>
			<span className='leading-snug'>{renderParagraphs(data.body)}</span>
		</div>
	);
}
