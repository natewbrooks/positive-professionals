'use client';
import React, { useState, useEffect, useRef } from 'react';
import TestimonialItem from './TestimonialItem';
import { useSwipeable } from 'react-swipeable';
import Modal from '../../Modal';

export default function TestimonialsSection({ data }) {
	const colors = ['primary', 'secondary', 'tertiary', 'four'];
	const [activeIndex, setActiveIndex] = useState(0);
	const [itemsToShow, setItemsToShow] = useState(3);
	const carouselRef = useRef(null);

	const calculateItemWidth = () => {
		const containerWidth = carouselRef.current ? carouselRef.current.offsetWidth : 0;
		return containerWidth / itemsToShow + (window.innerWidth < 640 ? 0.2 : 0.1);
	};

	const updateItemsToShow = () => {
		let windowWidth = window.innerWidth;
		if (windowWidth <= 570) {
			setItemsToShow(1);
			return;
		} else if (windowWidth > 570 && windowWidth < 1024) {
			setItemsToShow(2);
			return;
		} else if (windowWidth >= 1024) {
			setItemsToShow(3);
			return;
		}
	};

	const updateItemHeight = () => {
		let windowWidth = window.innerWidth;
		if (windowWidth <= 570) {
			setItemHeight(260);
			return;
		} else if (windowWidth > 570 && windowWidth < 1024) {
			setItemHeight(200);
			return;
		} else if (windowWidth >= 1024) {
			setItemHeight(200);
			return;
		}
	};

	const [itemWidth, setItemWidth] = useState(300);
	const [itemHeight, setItemHeight] = useState(200);

	useEffect(() => {
		const handleResize = () => {
			updateItemsToShow();
			setItemWidth(calculateItemWidth());
			updateItemHeight();
		};

		handleResize();
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, [itemsToShow]);

	const testimonialsLength = data.testimonials.length;
	const clampIndex = testimonialsLength - itemsToShow;

	const handlers = useSwipeable({
		onSwipedLeft: () => {
			setActiveIndex((prev) => {
				if (prev >= clampIndex) return 0; // Wrap to start if we're at the end
				return prev + 1;
			});
		},
		onSwipedRight: () => {
			setActiveIndex((prev) => {
				if (prev <= 0) return clampIndex; // Wrap to end if we're at the start
				return prev - 1;
			});
		},
		trackMouse: true,
	});

	return (
		<div className='mb-4'>
			<div className={`sans text-dark dark:text-light/60 text-sm pb-2`}>TESTIMONIALS</div>
			<div
				className='testimonial-section relative overflow-hidden'
				{...handlers}
				ref={carouselRef}>
				<div
					className='flex transition-transform duration-500 ease-in-out'
					style={{ transform: `translateX(-${activeIndex * itemWidth}px)` }}>
					{data.testimonials.map((testimonial, index) => (
						<TestimonialItem
							key={index}
							id={index}
							testimonial={testimonial}
							style={{ width: itemWidth, height: itemHeight, flexShrink: 0, flexGrow: 0 }}
							color={colors[index % colors.length]}
						/>
					))}
				</div>
			</div>
			<div className='absolute -bottom-14 left-0 right-0 flex justify-center p-4'>
				{data.testimonials.map((_, index) => {
					if (index < data.testimonials.length - (itemsToShow - 1)) {
						return (
							<span
								key={index}
								className={`mx-2 cursor-pointer select-none text-xxxl transition-all duration-[500ms] ease-in-out ${
									index === activeIndex
										? 'text-dark dark:text-light/70'
										: 'text-dark/20 dark:text-light/20'
								}`}
								onClick={() => setActiveIndex(index)}>
								•
							</span>
						);
					}
				})}
			</div>
			{data.testimonials.map((testimonial, index) => (
				<Modal
					key={testimonial.name + index + 'modal'}
					modalId={'testimonial' + index}>
					<div className='null:w-full md:w-[600px] xxl:w-[800px]'>
						<div className={`text-center sans xbold text-sm text-${colors[index % colors.length]}`}>
							TESTIMONIAL
						</div>
						<div className='pb-2 h-fit w-full justify-center flex items-center space-x-2'>
							<div className='flex flex-col -space-y-1 text-dark dark:text-light/60 leading-snug'>
								<span className='sans text-xl text-nowrap xbold text-center'>
									{testimonial.name}
								</span>
								<span className='sans text-lg text-center'>{testimonial.company}</span>
							</div>
						</div>
					</div>
					<div
						className={`overflow-y-auto relative active:cursor-grabbing hover:cursor-grab null:w-full md:w-[600px] xxl:w-[800px] select-none rounded-l-sm rounded-r-md h-full text-start relative flex flex-col`}>
						<div
							className={`sans text-md text-dark dark:text-light/60 bg-dark/10 dark:bg-light/10 border-${
								colors[index % colors.length]
							} p-4 border-l-4`}>
							{testimonial.quote}
						</div>
					</div>
				</Modal>
			))}
		</div>
	);
}
