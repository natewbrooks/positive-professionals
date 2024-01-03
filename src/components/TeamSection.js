import React from 'react';
import TeamMembers from './TeamMembers';

export default function TeamSection({ content }) {
	return (
		<section id='team' className='w-full h-full my-20'>
			<div className='flex flex-col text-center  justify-center'>
				<span className={`text-zl serif`}>The Team</span>
				<span className={`sans text-md `}>
					With over 100 years of combined experience, we are prepared to handle anything thrown our
					way.
				</span>
			</div>
			<TeamMembers gridItems={['One', 'Two', 'Three', 'Four']} />
		</section>
	);
}
