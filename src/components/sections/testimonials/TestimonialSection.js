import React, { useEffect, useState, useRef, useCallback } from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import TestimonialItem from '../../testimonials/TestimonialItem';
import SeeMore from '../../pieces/SeeMore';
import { useSwipeable } from 'react-swipeable';
import { forEach } from 'lodash';

export default function TestimonialsSection({ data }) {
	const borderColors = ['border-primary', 'border-secondary', 'border-tertiary', 'border-four'];
	const testimonials = data.testimonials;

	const rowRef = useRef(null);
	const [visibleItems, setVisibleItems] = useState(3);
	const [itemWidth, setItemWidth] = useState(460); // Adjusted to dynamic calculation later
	const [itemHeight, setItemHeight] = useState(460); // Adjusted to dynamic calculation later
	const [activeIndex, setActiveIndex] = useState(0);

	const [disableTransition, setDisableTransition] = useState([false, false]);
	const [translateX, setTranslateX] = useState([0, -itemWidth * testimonials.length]);
	const [isScrollingRight, setScrollingRight] = useState(true);
	const [allowSwipe, setAllowSwipe] = useState(true);
	const [isInView, setIsInView] = useState(false);

	const checkIfInView = useCallback(() => {
		if (rowRef.current) {
			const rect = rowRef.current.getBoundingClientRect();
			setIsInView(rect.top < window.innerHeight && rect.bottom >= 0);
			adjustLayout();
		}
	}, []);

	useEffect(() => {
		// Check if in view on initial load
		checkIfInView();

		// Event listeners for scroll and resize events to update isInView state
		window.addEventListener('scroll', checkIfInView);
		window.addEventListener('resize', checkIfInView);

		return () => {
			window.removeEventListener('scroll', checkIfInView);
			window.removeEventListener('resize', checkIfInView);
		};
	}, [checkIfInView]);

	function closestNumber(n, m) {
		// find the quotient
		let q = Math.floor(n / m);

		// 1st possible closest number
		let n1 = m * q;

		// 2nd possible closest number
		let n2 = n * m > 0 ? m * (q + 1) : m * (q - 1);

		// if true, then n1 is the required closest number
		if (Math.abs(n - n1) < Math.abs(n - n2)) return n1;

		// else n2 is the required closest number
		return n2;
	}

	const adjustLayout = () => {
		const width = window.innerWidth;
		const visibleItems = width <= 600 ? 1 : width <= 1172 ? 2 : 3;
		const newHeight = width <= 600 ? 300 : 240;

		let newWidth = Math.floor(
			closestNumber(rowRef.current.offsetWidth, visibleItems) / visibleItems
		);

		setDisableTransition([true, true]);
		setVisibleItems(visibleItems);
		setItemWidth(newWidth);
		setItemHeight(newHeight);
		setTranslateX([0, -newWidth * testimonials.length]);
		setActiveIndex(0);

		setInterval(() => {
			setDisableTransition([false, false]);
			setAllowSwipe(true);
		}, 500);
	};

	const inThreshold = (a, b, threshold = 0.1) => Math.abs(a - b) <= threshold;

	const recalcPos = () => {
		if (rowRef.current) {
			document.getElementById('testimonialContainer').style.width = Math.floor(
				closestNumber(rowRef.current.offsetWidth, visibleItems)
			);

			let newWidth = Math.ceil(
				closestNumber(rowRef.current.offsetWidth, visibleItems) / visibleItems
			); // Recalculate item width based on visible items
			setItemWidth(newWidth);
		}

		if (isScrollingRight) {
			if (inThreshold(translateX[0] + itemWidth, 0)) {
				setDisableTransition([false, true]);
				setTranslateX([translateX[0], -itemWidth * testimonials.length - itemWidth]);
			}
			if (inThreshold(translateX[1] + itemWidth, 0)) {
				setDisableTransition([true, false]);
				setTranslateX([-itemWidth * testimonials.length - itemWidth, translateX[1]]);
			}
		} else {
			if (inThreshold(translateX[0] - itemWidth, -itemWidth * visibleItems - itemWidth)) {
				setDisableTransition([false, true]);
				setTranslateX([translateX[0], itemWidth * testimonials.length - visibleItems * itemWidth]);
			}
			if (inThreshold(translateX[1] - itemWidth, -itemWidth * visibleItems - itemWidth)) {
				setDisableTransition([true, false]);
				setTranslateX([itemWidth * testimonials.length - visibleItems * itemWidth, translateX[1]]);
			}
		}

		setTimeout(() => {
			setDisableTransition([false, false]);
			setAllowSwipe(true);
		}, 500);
	};

	// Initial layout adjustment and event listeners for resizing and visibility change
	useEffect(() => {
		adjustLayout();
		const handleResize = () => adjustLayout();
		const handleVisibilityChange = () => {
			if (!document.hidden) {
				adjustLayout();
			}
		};

		window.addEventListener('resize', handleResize);
		document.addEventListener('visibilitychange', handleVisibilityChange);

		return () => {
			window.removeEventListener('resize', handleResize);
			document.removeEventListener('visibilitychange', handleVisibilityChange);
		};
	}, []);

	// Interval for automatic scrolling
	// useEffect(() => {
	// 	let interval;
	// 	if (isInView && allowSwipe) {
	// 		interval = setInterval(() => {
	// 			if (!allowSwipe) return;
	// 			const nextIndex = (activeIndex + 1) % testimonials.length;
	// 			setActiveIndex(nextIndex);
	// 			setScrollingRight(false);
	// 			setTranslateX(translateX.map((x) => x - itemWidth));
	// 			setAllowSwipe(false);
	// 		}, 4000);
	// 	} else {
	// 		return () => clearInterval(interval);
	// 	}

	// 	return () => clearInterval(interval);
	// }, [isInView, allowSwipe, activeIndex, testimonials.length, itemWidth]);

	// Swipe handling
	const handleSwipe = useSwipeable({
		onSwipedLeft: () => {
			if (!allowSwipe) return;
			const nextIndex = (activeIndex + 1 + testimonials.length) % testimonials.length;
			setActiveIndex(nextIndex);
			setScrollingRight(false);
			setTranslateX(translateX.map((x) => x - itemWidth));
			setAllowSwipe(false);
		},
		onSwipedRight: () => {
			if (!allowSwipe) return;
			const prevIndex = (activeIndex - 1 + testimonials.length) % testimonials.length;
			setActiveIndex(prevIndex);
			setScrollingRight(true);
			setTranslateX(translateX.map((x) => x + itemWidth));
			setAllowSwipe(false);
		},
		trackMouse: true,
	});

	return (
		<div className='relative w-full h-full pb-10'>
			<div className='relative overflow-hidden w-full h-full flex justify-center items-center flex-col'>
				<div className='w-full text-start py-2 leading-tight'>
					<span className='sans text-sm text-dark dark:text-light/60'>TESTIMONIALS</span>
				</div>

				<div
					{...handleSwipe}
					style={{ height: `${itemHeight}px` }}
					id='testimonialContainer'
					className={`relative flex flex-row w-full`}>
					{[0, 1].map((i) => (
						<div
							key={i}
							ref={i === 0 ? rowRef : undefined}
							style={{
								transform: `translateX(${translateX[i]}px)`,
								height: `${itemHeight}px`,
								transitionDuration: `${disableTransition[i] ? '0ms' : '500ms'}`,
								transitionProperty: `${disableTransition[i] ? '' : 'transform'}`,
							}}
							onTransitionEnd={() => {
								console.log('RECALC POS');
								recalcPos();
								setAllowSwipe(true);
							}}
							className={`absolute top-0 ease-in-out w-full flex flex-row`}>
							{data.testimonials.map((testimonial, index) => (
								<TestimonialItem
									id={index}
									key={`${i}-${index}`}
									testimonial={testimonial}
									borderColor={borderColors[index % borderColors.length]}
									style={{ width: `${itemWidth}px`, height: '100%' }}
								/>
							))}
						</div>
					))}
				</div>

				{/* <SeeMore /> */}
			</div>
			{/* INDICATOR DOTS */}
			<div className='absolute -bottom-8 w-full flex space-x-1 justify-center'>
				{[...Array(data.testimonials.length)].map((x, index) => (
					<div
						key={index}
						className={`text-xxxl transform transition-all duration-[500ms] ease-in-out cursor-default select-none ${
							index === activeIndex
								? 'text-dark dark:text-light/70'
								: 'text-dark/20 dark:text-light/20'
						}`}>
						•
					</div>
				))}
			</div>
		</div>
	);
}
