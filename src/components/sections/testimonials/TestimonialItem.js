import React, { forwardRef, useRef, useState, useEffect } from 'react';
import { FaUser } from 'react-icons/fa';
import { useModal } from '../../../contexts/ModalContext';
import SeeMore from '../../pieces/SeeMore';

const TestimonialItem = forwardRef(({ id, testimonial, style, color }, ref) => {
	const { openModal, closeModal, currentModal } = useModal();
	const [isClamped, setIsClamped] = useState(false);
	const textRef = useRef(null);

	useEffect(() => {
		// Check if the text is being clamped
		const checkIfClamped = () => {
			if (textRef.current) {
				// Assuming the font size is 16px and the line height is 1.3
				const fontSize = 16; // Adjust to your actual font size
				const lineHeight = 1.375; // Adjust to your actual line height
				const maxLines = window.innerWidth < 640 ? 8 : 6;
				const maxTextHeight = fontSize * lineHeight * maxLines;

				setIsClamped(textRef.current.scrollHeight > maxTextHeight);
			}
		};

		checkIfClamped();

		// Optional: You might want to re-check when the window is resized
		window.addEventListener('resize', checkIfClamped);
		return () => window.removeEventListener('resize', checkIfClamped);
	}, [testimonial.quote]);

	return (
		<>
			<div
				ref={ref}
				id={'testimonial' + id}
				className={`leading-snug flex flex-col w-full h-full`}>
				<div
					style={style}
					className={`relative active:cursor-grabbing hover:cursor-grab w-full border-${color} select-none rounded-l-sm h-full justify-center text-start relative flex flex-col -space-y-1 bg-dark/10 dark:bg-light/10 border-l-4 px-4 pt-4 ${
						isClamped ? 'pb-[1.65rem]' : 'pb-4'
					} `}>
					<span
						ref={textRef}
						className='sans text-md text-dark dark:text-light/60 null:line-clamp-[8] sm:line-clamp-6'>
						{testimonial.quote}
					</span>
					{isClamped && (
						<div className={`absolute bottom-1 right-4 px-2`}>
							<SeeMore
								text={'READ MORE'}
								colorClass={`text-dark dark:text-light/70 xbold`}
								onClick={() => openModal('testimonial' + id)}
							/>
						</div>
					)}
				</div>
				<div
					className={`h-fit flex items-center ${
						testimonial.company !== ' ' ? '-space-y-1' : ''
					} space-x-2 py-2`}>
					<FaUser
						size={testimonial.company !== ' ' ? 24 : 30}
						className={`text-dark dark:text-light/60 ${
							testimonial.name.trim() === '' && testimonial.company.trim() === ''
								? 'invisible'
								: 'visible'
						}`}
					/>
					<div className='flex flex-col  text-dark dark:text-light/60 '>
						<span className='sans text-md text-nowrap xbold'>{testimonial.name}</span>
						<span className='sans text-sm '>{testimonial.company}</span>
					</div>
				</div>
			</div>
		</>
	);
});

export default TestimonialItem;
