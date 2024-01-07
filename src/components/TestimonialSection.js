import React from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import TestimonialItem from '../components/TestimonialItem';
import SeeMore from './SeeMore';

export default function TestimonialsSection({ content }) {
	const testimonials = [
		{
			quote: `I loved working with these beautiful gals. So incredibly knowledgeable about coaching
                    and wise beyond their years. They solved my mental health, and manifested $50,000 from
                    thin air!`,
			name: 'Theresa Clark',
			workplace: 'CISCO CYBER OPERATIONS',
			borderColorClass: 'border-four',
		},
		{
			quote: `I loved working with these beautiful gals. So incredibly knowledgeable about coaching
                    and wise beyond their years. They solved my mental health, and manifested $50,000 from
                    thin air!`,
			name: 'Rupert Purdy',
			workplace: 'NSA DOD',
			borderColorClass: 'border-secondary',
		},
		{
			quote: `I loved working with these beautiful gals. So incredibly knowledgeable about coaching
                    and wise beyond their years. They solved my mental health, and manifested $50,000 from
                    thin air!`,
			name: 'Clarence Rondy',
			workplace: 'Amazon CEO',
			borderColorClass: 'border-primary',
		},
	];

	return (
		<section id='testimonials' className='w-full h-full'>
			<div className='relative items-center justify-between flex py-2 space-x-1 group cursor-pointer'>
				<span className='sans text-sm'>TESTIMONIALS</span>
			</div>
			<div className='w-full h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
				{testimonials.map((testimonial, index) => (
					<TestimonialItem key={index} testimonial={testimonial} />
				))}
			</div>
			<SeeMore />
		</section>
	);
}
