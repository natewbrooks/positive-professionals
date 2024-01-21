import React, { useEffect, useState, useRef, useLayoutEffect, useCallback } from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import TestimonialItem from '../testimonials/TestimonialItem';
import SeeMore from '../pieces/SeeMore';
import { useSwipeable } from 'react-swipeable';

export default function TestimonialsSection({ data }) {
	const borderColors = ['border-primary', 'border-secondary', 'border-tertiary', 'border-four'];
	const testimonials = data.testimonials;

	const [disableTransition, setDisableTransition] = useState([false, false]);
	const firstItemRef = useRef(null);
	const [visibleItems, setVisibleItems] = useState(3);
	const [height, setHeight] = useState(200);
	const [firstRender, setFirstRender] = useState(true);
	const [itemWidth, setItemWidth] = useState(460); // Fixed width for each testimonial item
	const [translateX, setTranslateX] = useState([0, -itemWidth * testimonials.length]); // Start with some default value
	const [isIntervalActive, setIntervalActive] = useState(true);
	const [isScrollingRight, setScrollingRight] = useState(true);
	const [isUserInteracting, setIsUserInteracting] = useState(false);
	const [allowSwipe, setAllowSwipe] = useState(true);

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

	function resizeWindow() {
		if (window.innerWidth <= 400) {
			setItemWidth(280);
			setHeight(320);
			setVisibleItems(1);
		} else if (window.innerWidth <= 600) {
			setHeight(300);
			setItemWidth(360);
			setVisibleItems(1);
		} else if (window.innerWidth <= 872) {
			setItemWidth(500);
			setHeight(200);
			setVisibleItems(1);
		} else if (window.innerWidth <= 1172) {
			setItemWidth(400);
			setHeight(200);
			setVisibleItems(2);
		} else if (window.innerWidth <= 1450) {
			setHeight(240);
			setItemWidth(540);
			setVisibleItems(2);
		} else {
			setHeight(200);
			setItemWidth(460);
			setVisibleItems(3);
		}
		setTranslateX([0, -itemWidth * testimonials.length]);
	}
	//

	const testimonialsContainerRef = useRef(null);

	const handleVisibilityChange = useCallback(() => {
		if (document.visibilityState === 'visible') {
			setIntervalActive(true);
			recalcPos();
		} else {
			setIntervalActive(false);
		}
	}, [recalcPos]);

	const handleIntersection = useCallback((entries) => {
		const [entry] = entries;
		setIntervalActive(entry.isIntersecting);
	}, []);

	useEffect(() => {
		const observer = new IntersectionObserver(handleIntersection, {
			root: null,
			threshold: 0.1,
		});
		if (testimonialsContainerRef.current) {
			observer.observe(testimonialsContainerRef.current);
		}
		return () => {
			if (testimonialsContainerRef.current) {
				observer.unobserve(testimonialsContainerRef.current);
			}
		};
	}, [handleIntersection]);

	useEffect(() => {
		document.addEventListener('visibilitychange', handleVisibilityChange);
		return () => {
			document.removeEventListener('visibilitychange', handleVisibilityChange);
		};
	}, [handleVisibilityChange]);

	//

	useLayoutEffect(() => {
		// Direct DOM manipulation before browser paint.
		// WORKS
		if (firstItemRef.current) {
			// was false, true
			setDisableTransition([true, true]); // Disable transition for initial teleport
		}
		resizeWindow();
		recalcPos();
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
		isScrollingRight,
		isIntervalActive,
		recalcPos,
	]);

	useEffect(() => {
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
		allowSwipe,
	]);

	const resetIntervalAfterSwipe = () => {
		setIntervalActive(false);
		setTimeout(() => {
			setIntervalActive(true);
		}, 2000); // Resume after 2 seconds of no swiping
	};

	const handleSwipe = useSwipeable({
		onSwiping: (eventData) => {
			if (!allowSwipe) return;
			setIsUserInteracting(true);
			clearInterval(interval);
		},
		onSwiped: (eventData) => {
			setIsUserInteracting(false);
			setTimeout(() => {
				setAllowSwipe(true);
			}, 500);
		},
		onSwipedLeft: (e) => {
			// stop timer
			// change translateX to left
			if (!allowSwipe) return;

			setScrollingRight(false);
			setTranslateX(translateX.map((x) => x - itemWidth));
			resetIntervalAfterSwipe();
			setAllowSwipe(false);
		},
		onSwipedRight: (e) => {
			// stop timer
			// change translateX to left
			if (!allowSwipe) return;

			setScrollingRight(true);
			setTranslateX(translateX.map((x) => x + itemWidth));
			resetIntervalAfterSwipe();
			setAllowSwipe(false);
		},
		trackMouse: true,
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
			ref={testimonialsContainerRef}
			className='relative w-full h-full overflow-hidden z-10'>
			<div className='relative items-center justify-between flex py-2 group cursor-pointer leading-tight'>
				<span className='sans text-sm text-dark dark:text-light/60'>TESTIMONIALS</span>
			</div>

			<div
				onTransitionEnd={() => {
					recalcPos();
				}}
				{...handleSwipe}
				style={testimonialContainerStyle}
				className={`relative flex flex-row w-full h-full`}>
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
						w-full flex flex-row`}>
						{data.testimonials.map((testimonial, index) => (
							<TestimonialItem
								id={i}
								key={`${i}-${index}`}
								testimonial={testimonial}
								borderColor={borderColors[index % borderColors.length]}
								ref={index === 0 && i === 0 ? firstItemRef : undefined}
								style={testimonialItemStyle}
							/>
						))}
					</div>
				))}
			</div>
			{/* <SeeMore /> */}
		</section>
	);
}
