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
			className='text-dark dark:text-light/60 flex flex-col space-y-8 xxl:max-w-[50%]'>
			<div className='flex flex-col space-y-4 '>
				<div className='flex flex-col leading-snug'>
					<span className='sans text-sm '>{data.subtext.toUpperCase()}</span>
					<span className='serif text-xxl dark:text-light/80'>{data.header}</span>
				</div>
				<span className='leading-snug'>{renderParagraphs(data.body)}</span>
			</div>

			<div className='flex flex-col space-y-4'>
				<div className='flex flex-col leading-snug '>
					<span className='sans text-sm '>WHAT WE STAND FOR</span>
					<span className='serif text-xxl dark:text-light/80'>Our mission</span>
				</div>
				<span className='leading-snug'>
					{renderParagraphs(
						'At Positive Professionals, we envision a world where every individual, especially women in transition, harnesses the power of personal and professional growth to reshape their destinies.' +
							"\nOur mission is to cultivate a generation of authentic, resilient leaders who are equipped to navigate life's complexities, inspiring a ripple effect of positive change in communities and organizations worldwide." +
							'\nWe are committed to changing the world one leader at a time, guiding them through the intricate journey of overcoming imposter syndrome, advancing in their careers, and harmoniously integrating family and career commitments.'
					)}
				</span>
			</div>
		</div>
	);
}
