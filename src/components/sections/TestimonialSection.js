import React, { useEffect, useState, useRef, useLayoutEffect } from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import TestimonialItem from '../testimonials/TestimonialItem';
import SeeMore from '../pieces/SeeMore';

export default function TestimonialsSection({ content }) {
	const [testimonials, setTestimonials] = useState([
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
		{
			quote: `Rupert fuentes strikes again`,
			name: 'Skimbi Blambini',
			workplace: 'Rotiserry',
			borderColorClass: 'border-secondary',
		},
		{
			quote: `Flagrant Violation`,
			name: 'Skim Milk',
			workplace: 'Cumberland Farms',
			borderColorClass: 'border-four',
		},
		{
			quote: `Rupert fuentes strikes again`,
			name: 'Rodney Copperbottom',
			workplace: 'Robots',
			borderColorClass: 'border-tertiary',
		},
		{
			quote:
				'Unparalleled expertise in network security, providing innovative and robust solutions.',
			name: 'Jordan Michaels',
			workplace: 'CyberTech Innovations',
			borderColorClass: 'border-primary',
		},

		{
			quote: 'Revolutionized our approach to cybersecurity, setting new industry standards.',
			name: 'Samantha Wright',
			workplace: 'Quantum Secure Corp',
			borderColorClass: 'border-secondary',
		},

		{
			quote: 'Exceptional skills in system architecture, leading to groundbreaking advancements.',
			name: 'Michael Torres',
			workplace: 'Global Defense Network',
			borderColorClass: 'border-tertiary',
		},

		{
			quote: 'Transformed our system integration processes, achieving unprecedented efficiency.',
			name: 'Leslie Chen',
			workplace: 'Advanced Network Strategies',
			borderColorClass: 'border-four',
		},

		{
			quote: 'A visionary in network architecture, navigating complex challenges with ease.',
			name: 'Richard Blake',
			workplace: 'Elite Cyber Solutions',
			borderColorClass: 'border-primary',
		},

		{
			quote:
				'Their expertise in managing federal security systems is unparalleled in the industry.',
			name: 'Emily Grant',
			workplace: 'National Security Agency',
			borderColorClass: 'border-secondary',
		},
		{
			quote: 'Innovative and strategic approach to cybersecurity, always ahead of the curve.',
			name: 'Aaron Smith',
			workplace: 'TechGuardian Ltd.',
			borderColorClass: 'border-tertiary',
		},

		{
			quote:
				'Strategic and effective in network security, consistently delivering top-tier results.',
			name: 'Nicole Lee',
			workplace: 'SecureNet Technologies',
			borderColorClass: 'border-four',
		},

		{
			quote:
				'A leading expert in enterprise firewalls, providing exceptional solutions to complex challenges.',
			name: 'David Kim',
			workplace: 'Firewall Masters Inc.',
			borderColorClass: 'border-primary',
		},

		{
			quote:
				'Outstanding in deploying secure networks for government agencies, a true industry leader.',
			name: 'Sarah Lopez',
			workplace: 'Federal Systems Integrators',
			borderColorClass: 'border-secondary',
		},
	]);

	const [disableTransition, setDisableTransition] = useState(true);
	const firstItemRef = useRef(null);
	const [visibleItems, setVisibleItems] = useState(3);
	const [firstRender, setFirstRender] = useState(true);
	const [translateX, setTranslateX] = useState([0, 0]); // Start with some default value
	const [itemWidth, setItemWidth] = useState(400); // Fixed width for each testimonial item

	useLayoutEffect(() => {
		// Direct DOM manipulation before browser paint
		if (firstItemRef.current) {
			const totalWidth = itemWidth * testimonials.length + testimonials.length * 8;
			setDisableTransition(true); // Disable transition for initial teleport
			setTranslateX([0, -totalWidth]);
		}
	}, [testimonials.length]);

	useEffect(() => {
		const interval = setInterval(() => {
			setTranslateX((translateX) => translateX.map((x) => x + itemWidth + 8));
		}, 6000);

		if (disableTransition && translateX[0] >= itemWidth * testimonials.length) {
			setTranslateX([-itemWidth * testimonials.length, translateX[1]]); // Instantly reset position
			// Re-enable transition after position reset
			setTimeout(() => {
				setDisableTransition(false);
			}, 10); // Timeout can be very short, just to allow for a render cycle
		} else if (disableTransition && translateX[1] >= itemWidth * testimonials.length) {
			setTranslateX([translateX[0], -itemWidth * testimonials.length]); // Instantly reset position
			// Re-enable transition after position reset
			setTimeout(() => {
				setDisableTransition(false);
			}, 10); // Timeout can be very short, just to allow for a render cycle
		}

		// Delay re-enabling transition after the initial render
		if (firstRender) {
			setTimeout(() => {
				setDisableTransition(false);
				setFirstRender(false);
			}, 0);
		}

		resizeWindow();

		function resizeWindow() {
			if (window.innerWidth <= 816) {
				setVisibleItems(1);
			} else if (window.innerWidth <= 1450) {
				setVisibleItems(2);
			} else {
				setVisibleItems(3);
			}
		}

		window.addEventListener('resize', resizeWindow);
		return () => {
			window.removeEventListener('resize', resizeWindow);
			clearInterval(interval);
		};
	}, [testimonials.length, firstRender, disableTransition, translateX]);

	const testimonialContainerStyle = {
		width: `${itemWidth * visibleItems}px`, // Width to show only three items at a time
		overflow: 'hidden',
	};

	const testimonialItemStyle = {
		width: `${itemWidth}px`, // Fixed width for each testimonial item
	};

	return (
		<section
			id='testimonials'
			className='w-full h-full overflow-hidden'>
			<div className='relative items-center justify-between flex py-2 group cursor-pointer'>
				<span className='sans text-sm'>TESTIMONIALS</span>
			</div>

			<div
				style={testimonialContainerStyle}
				className={`relative flex flex-row h-[200px] w-${itemWidth * visibleItems}`}>
				{[0, 1].map((i) => (
					<div
						onTransitionEnd={() => {
							if (translateX[i] >= testimonials.length * itemWidth) {
								console.log('RESETTING');
								setDisableTransition(true);
							}
						}}
						key={i}
						style={{ transform: `translateX(${translateX[i]}px)` }}
						className={`absolute top-0 ${
							disableTransition ? 'duration-0' : 'transition-transform duration-700 ease-in-out'
						} w-auto h-full flex flex-row space-x-2`}>
						{testimonials.map((testimonial, index) => (
							<TestimonialItem
								id={`${i}`}
								key={`${i}-${index}`}
								testimonial={testimonial}
								ref={index === 0 && i === 0 ? firstItemRef : undefined}
								style={testimonialItemStyle}
							/>
						))}
					</div>
				))}
			</div>
			<SeeMore />
		</section>
	);
}
