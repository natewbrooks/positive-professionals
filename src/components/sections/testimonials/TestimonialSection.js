import React, { useEffect, useState, useRef, useLayoutEffect, useCallback } from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import TestimonialItem from '../../testimonials/TestimonialItem';
import SeeMore from '../../pieces/SeeMore';
import { useSwipeable } from 'react-swipeable';

export default function TestimonialsSection({ data }) {
	const borderColors = ['border-primary', 'border-secondary', 'border-tertiary', 'border-four'];
	const testimonials = data.testimonials;

	const [disableTransition, setDisableTransition] = useState([false, false]);
	const rowRef = useRef(null);
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

	const [isInView, setIsInView] = useState(true);

	const checkIfInView = useCallback(() => {
		if (rowRef.current) {
			const rect = rowRef.current.getBoundingClientRect();
			setIsInView(rect.top < window.innerHeight && rect.bottom >= 0);
		}
	}, []);

	useEffect(() => {
		// Existing resizeWindow function with added functionality to stop transitions
		const originalResizeWindow = resizeWindow;
		resizeWindow = () => {
			setDisableTransition([true, true]);
			originalResizeWindow();
			setTimeout(() => {
				// Add a slight delay before recalculating positions and resuming transitions
				recalcPos();
				setDisableTransition([false, false]);
			}, 100);
		};

		// Event listener for scrolling to manage isInView state
		window.addEventListener('scroll', checkIfInView);
		window.addEventListener('resize', resizeWindow);
		return () => {
			window.removeEventListener('scroll', checkIfInView);
			window.removeEventListener('resize', resizeWindow);
		};
	}, [checkIfInView]);

	useEffect(() => {
		if (!isInView) {
			setIntervalActive(false); // Stop the automatic scrolling if testimonials are out of view
		} else {
			setIntervalActive(true); // Resume automatic scrolling if testimonials are in view
		}
	}, [isInView]);

	function inThreshold(a, b, threshold = 0.5) {
		let diff = Math.abs(a - b);
		return diff <= threshold;
	}

	const resetPositioning = () => {
		// Reset translateX to its initial state or any specific starting position you desire
		setTranslateX([0, -itemWidth * data.testimonials.length]);
		// Optionally reset other states as needed
	};

	// Function to handle page visibility change
	const handleVisibilityChange = () => {
		if (!document.hidden) {
			setDisableTransition([true, true]);
			resetPositioning(); // Reset positioning only when the page becomes visible again

			setTimeout(() => {
				setDisableTransition([false, false]);
			}, 0);
		}
	};

	useEffect(() => {
		// Page Visibility API event listener
		document.addEventListener('visibilitychange', handleVisibilityChange);

		// Cleanup
		return () => {
			document.removeEventListener('visibilitychange', handleVisibilityChange);
		};
	}, [data.testimonials.length, itemWidth]);

	function recalcPos() {
		if (rowRef.current && firstItemRef.current) {
			let newWidth = rowRef.current.offsetWidth; // Get the width of the referenced element
			setItemWidth(newWidth / visibleItems);
		}
		const totalWidth = itemWidth * testimonials.length;

		if (isScrollingRight) {
			// IF LEFT SIDE OF FIRST ROW
			if (inThreshold(translateX[0] + itemWidth, 0)) {
				console.log('LEFT END OF 0 ROW');
				setDisableTransition([false, true]);
				setTranslateX([translateX[0], -itemWidth * testimonials.length - itemWidth]);
			}

			// IF LEFT SIDE OF SECOND ROW
			if (inThreshold(translateX[1] + itemWidth, 0)) {
				console.log('LEFT END OF 1 ROW');
				setDisableTransition([true, false]);
				setTranslateX([-itemWidth * testimonials.length - itemWidth, translateX[1]]);
			}
		} else {
			// IF RIGHT SIDE OF FIRST ROW
			if (inThreshold(translateX[0] - itemWidth, -itemWidth * visibleItems - itemWidth)) {
				console.log('RIGHT END OF 0 ROW');
				setDisableTransition([false, true]);
				setTranslateX([translateX[0], itemWidth * testimonials.length - visibleItems * itemWidth]);
			}

			// IF RIGHT SIDE OF SECOND ROW
			if (inThreshold(translateX[1] - itemWidth, -itemWidth * visibleItems - itemWidth)) {
				console.log('RIGHT END OF 1 ROW');
				setDisableTransition([true, false]);
				setTranslateX([itemWidth * testimonials.length - visibleItems * itemWidth, translateX[1]]);
			}
		}

		setTimeout(() => {
			setDisableTransition([false, false]);
		}, 0);
	}

	function resizeWindow() {
		if (window.innerWidth <= 400) {
			setVisibleItems(1);
			setHeight(300);
		} else if (window.innerWidth <= 600) {
			setVisibleItems(1);
			setHeight(300);
		} else if (window.innerWidth <= 872) {
			setVisibleItems(2);
			setHeight(260);
		} else if (window.innerWidth <= 1172) {
			setVisibleItems(2);
			setHeight(240);
		} else if (window.innerWidth <= 1450) {
			setVisibleItems(2);
			setHeight(240);
		} else {
			setVisibleItems(3);
			setHeight(240);
		}

		if (rowRef.current && firstItemRef.current) {
			let newWidth = rowRef.current.offsetWidth;
			let newCalculatedWidth = newWidth / visibleItems;
			setItemWidth(newCalculatedWidth); // Update item width first
			setTranslateX([0, -newCalculatedWidth * testimonials.length]); // Use new item width here
		}
	}

	useLayoutEffect(() => {
		setDisableTransition([true, true]); // Disable transition initially
	}, []);

	let interval;
	useEffect(() => {
		if (isIntervalActive && isInView) {
			interval = setInterval(() => {
				setAllowSwipe(false);
				setTranslateX(translateX.map((x) => (isScrollingRight ? x + itemWidth : x - itemWidth)));
			}, 4000);
		} else {
			clearInterval(interval);
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
		isInView,
	]);

	useEffect(() => {
		// Delay re-enabling transition after the initial render
		// WORKS
		if (firstRender) {
			setTimeout(() => {
				resizeWindow();
				recalcPos();
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
		width: '100%', // Set to take full width of the parent container
		height: `${height}px`,
		overflow: 'hidden',
	};

	const testimonialItemStyle = {
		height: '100%', // Set each item to take full height of the container
		width: `${itemWidth}px`, // Set each item to take the percentage of the container width
	};

	return (
		<div className='relative w-full h-full overflow-hidden flex justify-center items-center flex-col'>
			<div className='w-full text-start py-2 leading-tight'>
				<span className='sans text-sm text-dark dark:text-light/60'>TESTIMONIALS</span>
			</div>

			<div
				{...handleSwipe}
				style={testimonialContainerStyle}
				className={`relative flex flex-row w-full h-full`}>
				{[0, 1].map((i) => (
					<div
						key={i}
						ref={i === 0 ? rowRef : undefined}
						style={{
							transform: `translateX(${translateX[i]}px)`,
							height: `${height}px`,
							transitionDuration: `${disableTransition[i] ? '0ms' : '500ms'}`,
							transitionProperty: `${disableTransition[i] ? '' : 'transform'}`,
						}}
						onTransitionEnd={() => {
							recalcPos();
							setAllowSwipe(true);
							// console.log(translateX);
						}}
						className={`absolute top-0 ease-in-out w-full flex flex-row`}>
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
		</div>
	);
}
