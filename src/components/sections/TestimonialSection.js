import React, { useEffect, useState, useRef, useLayoutEffect } from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import TestimonialItem from '../testimonials/TestimonialItem';
import SeeMore from '../pieces/SeeMore';
import { useSwipeable } from 'react-swipeable';

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
		// {
		// 	quote: `Flagrant Violation`,
		// 	name: 'Skim Milk',
		// 	workplace: 'Cumberland Farms',
		// 	borderColorClass: 'border-four',
		// },
		// {
		// 	quote: `Rupert fuentes strikes again`,
		// 	name: 'Rodney Copperbottom',
		// 	workplace: 'Robots',
		// 	borderColorClass: 'border-tertiary',
		// },
		// {
		// 	quote:
		// 		'Unparalleled expertise in network security, providing innovative and robust solutions.',
		// 	name: 'Jordan Michaels',
		// 	workplace: 'CyberTech Innovations',
		// 	borderColorClass: 'border-primary',
		// },

		// {
		// 	quote: 'Revolutionized our approach to cybersecurity, setting new industry standards.',
		// 	name: 'Samantha Wright',
		// 	workplace: 'Quantum Secure Corp',
		// 	borderColorClass: 'border-secondary',
		// },

		// {
		// 	quote: 'Exceptional skills in system architecture, leading to groundbreaking advancements.',
		// 	name: 'Michael Torres',
		// 	workplace: 'Global Defense Network',
		// 	borderColorClass: 'border-tertiary',
		// },

		// {
		// 	quote: 'Transformed our system integration processes, achieving unprecedented efficiency.',
		// 	name: 'Leslie Chen',
		// 	workplace: 'Advanced Network Strategies',
		// 	borderColorClass: 'border-four',
		// },

		// {
		// 	quote: 'A visionary in network architecture, navigating complex challenges with ease.',
		// 	name: 'Richard Blake',
		// 	workplace: 'Elite Cyber Solutions',
		// 	borderColorClass: 'border-primary',
		// },

		// {
		// 	quote:
		// 		'Their expertise in managing federal security systems is unparalleled in the industry.',
		// 	name: 'Emily Grant',
		// 	workplace: 'National Security Agency',
		// 	borderColorClass: 'border-secondary',
		// },
		// {
		// 	quote: 'Innovative and strategic approach to cybersecurity, always ahead of the curve.',
		// 	name: 'Aaron Smith',
		// 	workplace: 'TechGuardian Ltd.',
		// 	borderColorClass: 'border-tertiary',
		// },

		// {
		// 	quote:
		// 		'Strategic and effective in network security, consistently delivering top-tier results.',
		// 	name: 'Nicole Lee',
		// 	workplace: 'SecureNet Technologies',
		// 	borderColorClass: 'border-four',
		// },

		// {
		// 	quote:
		// 		'A leading expert in enterprise firewalls, providing exceptional solutions to complex challenges.',
		// 	name: 'David Kim',
		// 	workplace: 'Firewall Masters Inc.',
		// 	borderColorClass: 'border-primary',
		// },

		// {
		// 	quote:
		// 		'Outstanding in deploying secure networks for government agencies, a true industry leader.',
		// 	name: 'Sarah Lopez',
		// 	workplace: 'Federal Systems Integrators',
		// 	borderColorClass: 'border-secondary',
		// },
	]);

	const [disableTransition, setDisableTransition] = useState([false, false]);
	const firstItemRef = useRef(null);
	const [visibleItems, setVisibleItems] = useState(3);
	const [height, setHeight] = useState(200);
	const [firstRender, setFirstRender] = useState(true);
	const [itemWidth, setItemWidth] = useState(400); // Fixed width for each testimonial item
	const [translateX, setTranslateX] = useState([0, -itemWidth * testimonials.length]); // Start with some default value
	const [isIntervalActive, setIntervalActive] = useState(true);
	const [isScrollingRight, setScrollingRight] = useState(true);
	const [isUserInteracting, setIsUserInteracting] = useState(false);
	const [transitioningRow, setTransitioningRow] = useState([false, false]);

	function recalcPos() {
		const totalWidth = itemWidth * testimonials.length;

		if (isScrollingRight) {
			// IF LEFT SIDE OF FIRST ROW
			if (translateX[0] === -itemWidth) {
				setDisableTransition([false, true]);
				setTranslateX([translateX[0], -totalWidth - itemWidth]);
			}

			// IF LEFT SIDE OF SECOND ROW
			if (translateX[1] === -itemWidth) {
				setDisableTransition([true, false]);
				setTranslateX([-totalWidth - itemWidth, translateX[1]]);
			}
		} else {
			// IF RIGHT SIDE OF FIRST ROW

			if (translateX[0] === -totalWidth + visibleItems * itemWidth + itemWidth) {
				setDisableTransition([false, true]);
				setTranslateX([translateX[0], itemWidth * visibleItems + itemWidth]);
			}

			// IF RIGHT SIDE OF SECOND ROW
			if (translateX[1] === -totalWidth + visibleItems * itemWidth + itemWidth) {
				setDisableTransition([true, false]);
				setTranslateX([itemWidth * visibleItems + itemWidth, translateX[1]]);
			}
		}

		setTimeout(() => {
			setDisableTransition([false, false]);
		}, 0);
	}

	useLayoutEffect(() => {
		// Direct DOM manipulation before browser paint.
		// WORKS
		if (firstItemRef.current) {
			setDisableTransition([false, true]); // Disable transition for initial teleport
		}
	}, [testimonials.length]);

	let interval;
	useEffect(() => {
		if (isIntervalActive) {
			interval = setInterval(() => {
				setTranslateX(translateX.map((x) => (isScrollingRight ? x + itemWidth : x - itemWidth)));
			}, 4000);
		}

		if (isUserInteracting) {
			recalcPos();
		}

		return () => {
			if (interval) {
				clearInterval(interval);
			}
		};
	}, [
		testimonials.length,
		translateX,
		disableTransition,
		itemWidth,
		isUserInteracting,
		visibleItems,
		transitioningRow,
		isScrollingRight,
		isIntervalActive,
		recalcPos,
	]);

	useEffect(() => {
		function resizeWindow() {
			if (window.innerWidth <= 400) {
				setItemWidth(260);
				setHeight(300);
				setVisibleItems(1);
			} else if (window.innerWidth <= 600) {
				setHeight(200);
				setItemWidth(360);
				setVisibleItems(1);
			} else if (window.innerWidth <= 816) {
				setItemWidth(500);
				setHeight(200);
				setVisibleItems(1);
			} else if (window.innerWidth <= 1450) {
				setHeight(200);
				setItemWidth(400);
				setVisibleItems(2);
			} else {
				setHeight(200);
				setItemWidth(400);
				setVisibleItems(3);
			}
			setTranslateX([0, -itemWidth * testimonials.length]);
		}

		// Delay re-enabling transition after the initial render
		// WORKS
		if (firstRender) {
			setTimeout(() => {
				resizeWindow();
				setFirstRender(false);
				setDisableTransition([false, false]);
			}, 0);
		}

		window.addEventListener('resize', resizeWindow);
		return () => window.removeEventListener('resize', resizeWindow);
	}, [
		testimonials.length,
		height,
		firstRender,
		translateX,
		disableTransition,
		itemWidth,
		visibleItems,
	]);

	const resetIntervalAfterSwipe = () => {
		setIntervalActive(false);
		setTimeout(() => {
			setIntervalActive(true);
		}, 1000); // Resume after 2 seconds of no swiping
	};

	const handleSwipe = useSwipeable({
		onSwiping: (eventData) => {
			setIsUserInteracting(true);
			clearInterval(interval);
		},
		onSwiped: (eventData) => {
			setIsUserInteracting(false);
		},
		onSwipedLeft: (e) => {
			// stop timer
			// change translateX to left
			setScrollingRight(false);
			setTranslateX(translateX.map((x) => x - itemWidth));
			resetIntervalAfterSwipe();
		},
		onSwipedRight: (e) => {
			// stop timer
			// change translateX to left
			setScrollingRight(true);
			setTranslateX(translateX.map((x) => x + itemWidth));
			resetIntervalAfterSwipe();
		},
	});

	const testimonialContainerStyle = {
		width: `${itemWidth * visibleItems}px`, // Width to show only three items at a time
		height: `${height}px`,
		overflow: 'hidden',
	};

	const testimonialItemStyle = {
		height: `${height}px`,
		width: `${itemWidth}px`, // Fixed width for each testimonial item
	};

	return (
		<section
			id='testimonials'
			className='w-full h-full overflow-hidden'>
			<div className='relative items-center justify-between flex py-2 group cursor-pointer'>
				<span className='sans text-sm'>TESTIMONIALS</span>
			</div>

			<div className=''></div>

			<div
				onTransitionEnd={() => {
					recalcPos();
				}}
				{...handleSwipe}
				style={testimonialContainerStyle}
				className={`relative flex flex-row w-full`}>
				{[0, 1].map((i) => (
					<div
						key={i}
						style={{
							transform: `translateX(${translateX[i]}px)`,
							height: `${height}px`,
							transitionDuration: `${disableTransition[i] ? '0ms' : '600ms'}`,
							transitionProperty: `${disableTransition[i] ? '' : 'transform'}`,
						}}
						className={`absolute top-0 ease-in-out
						w-auto flex flex-row`}>
						{testimonials.map((testimonial, index) => (
							<TestimonialItem
								id={i}
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
