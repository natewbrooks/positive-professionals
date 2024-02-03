import React, { useEffect, useState, useRef, useCallback } from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import TestimonialItem from '../../testimonials/TestimonialItem';
import SeeMore from '../../pieces/SeeMore';
import { useSwipeable } from 'react-swipeable';

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

	// Dynamically adjust item width and visible items based on window size
	const adjustLayout = () => {
		const width = window.innerWidth;
		const visibleItems = width <= 600 ? 1 : width <= 1172 ? 2 : 3;
		const newHeight = width <= 600 ? 300 : 240;
		const newWidth = rowRef.current ? rowRef.current.offsetWidth / visibleItems : 460;

		setVisibleItems(visibleItems);
		setItemWidth(newWidth);
		setItemHeight(newHeight);
		setDisableTransition([true, true]);
		setTranslateX([0, -newWidth * testimonials.length]);

		setInterval(() => {
			setDisableTransition([false, false]);
		}, [0]);
	};

	const inThreshold = (a, b, threshold = 0.5) => Math.abs(a - b) <= threshold;

	const recalcPos = () => {
		if (rowRef.current) {
			let newWidth = rowRef.current.offsetWidth / visibleItems; // Recalculate item width based on visible items
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
		}, 0);
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
	useEffect(() => {
		let interval;
		if (isInView && allowSwipe) {
			interval = setInterval(() => {
				if (!allowSwipe) return;
				const nextIndex = (activeIndex + 1) % testimonials.length;
				setActiveIndex(nextIndex);

				const offset = isScrollingRight ? itemWidth : -itemWidth;
				setTranslateX(translateX.map((x) => x + offset));
			}, 4000);
		}

		return () => clearInterval(interval);
	}, [
		translateX,
		itemWidth,
		isScrollingRight,
		allowSwipe,
		isInView,
		activeIndex,
		testimonials.length,
	]);

	// Swipe handling
	const handleSwipe = useSwipeable({
		onSwipedLeft: () => {
			if (!allowSwipe) return;
			const nextIndex = (activeIndex + 1) % testimonials.length;
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
								recalcPos();
								setAllowSwipe(true);
							}}
							className={`absolute top-0 ease-in-out w-full flex flex-row`}>
							{data.testimonials.map((testimonial, index) => (
								<TestimonialItem
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
			<div className='absolute null:-bottom-10 lg:-bottom-16 w-full flex space-x-1 justify-center'>
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
