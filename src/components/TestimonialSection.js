import React from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import TestimonialItem from '../components/TestimonialItem';
import SeeMore from './SeeMore';

export default function TestimonialsSection({ content }) {
	return (
		<section id='testimonials' className='w-full h-full'>
			<div className='relative items-center justify-between flex py-2 space-x-1 group cursor-pointer'>
				<span className='sans text-sm'>TESTIMONIALS</span>
			</div>
			<div className='w-full h-full grid grid-cols-3 gap-4'>
				<TestimonialItem
					quote={`I loved working with these beautiful gals. So incredibly knowledgeable about coaching
							and wise beyond their years. They solved my mental health, and manifested $50,000 from
							thin air!`}
					name={'Theresa Clark'}
					workplace={'CISCO CYBER OPERATIONS'}
					borderColorClass={`border-four`}
				/>
				<TestimonialItem
					quote={`I loved working with these beautiful gals. So incredibly knowledgeable about coaching
							and wise beyond their years. They solved my mental health, and manifested $50,000 from
							thin air!`}
					name={'Rupert Purdy'}
					workplace={'NSA DOD'}
					borderColorClass={`border-secondary`}
				/>
				<TestimonialItem
					quote={`I loved working with these beautiful gals. So incredibly knowledgeable about coaching
							and wise beyond their years. They solved my mental health, and manifested $50,000 from
							thin air!`}
					name={'Clarence Rondy'}
					workplace={'Amazon CEO'}
					borderColorClass={`border-primary`}
				/>
			</div>
			<SeeMore />
		</section>
	);
}
