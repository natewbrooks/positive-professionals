import React, { useState, useRef, useEffect } from 'react';
import { useModal } from '../../contexts/ModalContext';
import { FaUserPlus } from 'react-icons/fa';
import waveTop from '../../../static/img/bg-waves/contact-waves/wave-top.svg';
import ReCAPTCHA from 'react-google-recaptcha';

export default function ContactSection({ content }) {
	const { openModal } = useModal(); // Assuming openModal is used elsewhere
	const recaptchaRef = useRef(null);
	const [captchaValidated, setCaptchaValidated] = useState(false);
	const [formSubmitted, setFormSubmitted] = useState(
		localStorage.getItem('formSubmitted') === 'true'
	);

	useEffect(() => {
		// Check if the form was submitted more than 10 minutes ago
		const submissionTime = localStorage.getItem('submissionTime');
		if (submissionTime) {
			const timePassed = new Date().getTime() - new Date(parseInt(submissionTime)).getTime();
			if (timePassed >= 600000) {
				// 600000 milliseconds = 10 minutes
				setFormSubmitted(false);
				localStorage.setItem('formSubmitted', 'false');
			}
		}

		// Set a timeout to reset formSubmitted after 10 minutes of the last submission
		if (formSubmitted) {
			const timeoutId = setTimeout(() => {
				setFormSubmitted(false);
				localStorage.setItem('formSubmitted', 'false');
			}, 300000); // Reset after 5 minutes

			// Clear the timeout if the component unmounts
			return () => clearTimeout(timeoutId);
		}
	}, [formSubmitted]);

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!captchaValidated) {
			recaptchaRef.current.execute();
		}

		const formData = new FormData(e.target);
		const data = {
			name: formData.get('Name'),
			email: formData.get('Email'),
			message: formData.get('Message'),
		};

		try {
			const response = await fetch('/.netlify/functions/sendMail', {
				method: 'POST',
				body: JSON.stringify(data),
				headers: {
					'Content-Type': 'application/json',
				},
			});

			if (response.ok) {
				setFormSubmitted(true);
				localStorage.setItem('formSubmitted', 'true');
				localStorage.setItem('submissionTime', new Date().getTime().toString());
				openModal('success');

				// Reset formSubmitted after 10 minutes
				setTimeout(() => {
					setFormSubmitted(false);
					localStorage.setItem('formSubmitted', 'false');
				}, 600000);
			} else {
				console.error('Form submission failed');
			}
		} catch (error) {
			console.error('An error occurred:', error);
		}
	};

	const onReCAPTCHAChange = (token) => {
		if (token) {
			setCaptchaValidated(true);
		} else {
			setCaptchaValidated(false);
		}
	};

	return (
		<section
			id='contact'
			className='relative w-full h-fit flex flex-col mt-8 pb-10 bg-secondary'>
			{/* Container for the First Steps Section and Journey to Success, displayed as a row */}
			<div className='h-full w-full pb-10 flex flex-col xxl:flex-row justify-evenly items-center xxl:items-center space-y-10 xxl:space-y-0 xxl:space-x-10 px-20'>
				<div className='z-[1] absolute w-full h-full left-0'>
					<img
						src={waveTop}
						alt='Services wave top bg'
						style={{ transform: 'translateY(-80%)' }}
						className='absolute w-full h-fit top-0 '></img>
					<div className='absolute w-full h-full dark:bg-secondary bg-secondary z-0'></div>
				</div>

				{/* Journey to Success */}
				<div className='z-10 flex items-center null:flex-col md:flex-row space-y-14 md:space-y-0 justify-center w-full h-full'>
					<div className='flex flex-col justify-between items-center w-full h-full'>
						<div className='flex flex-col items-center text-center text-dark space-y-2'>
							<span className='null:w-[280px] sm:w-[400px] md:w-[400px] xl:w-fit xl:text-nowrap text-xxl sm:text-xxxl serif leading-none'>
								Start your journey to success
							</span>
							<span className='sans null:text-sm sm:text-md null:w-[240px] sm:w-[320px] xl:w-[300px] xxl:w-[420px]'>
								{formSubmitted
									? 'Thank you! A team member will email you to setup your consultation. To prevent spamming, you will be able to resubmit a form in 5 minutes.'
									: 'Interested in working with us? Fill in your information and we will reach out to schedule a free consultation!'}
							</span>
						</div>

						{formSubmitted ? (
							<div className='flex flex-col'>
								<svg
									className='checkmark w-[120px] h-[120px]'
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 52 52'>
									<circle
										className='checkmark__circle stroke-dark'
										cx='26'
										cy='26'
										r='25'
										fill='none'
									/>
									<path
										className='checkmark__check stroke-dark'
										fill='none'
										d='M14.1 27.2l7.1 7.2 16.7-16.8'
									/>
								</svg>
								<span className='null:w-[280px] text-center text-dark  text-lg sans xbold leading-none'>
									EMAIL SENT! WE WILL REACH OUT TO YOU SHORTLY.
								</span>
							</div>
						) : (
							<form
								onSubmit={handleSubmit}
								className='flex flex-col bg-transparent pt-4 rounded-md justify-center items-center space-y-8'>
								<div className='text-start flex flex-col space-y-2'>
									<div className='flex flex-col'>
										<label className='sans text-sm text-dark xbold'>
											<span className='text-primary'>* </span>Name
										</label>
										<input
											type='text'
											name='Name'
											aria-label='Name Input'
											className='select-none bg-dark rounded-md text-light placeholder:text-light py-1 px-2 sans'
											required></input>
									</div>
									<div className='flex flex-col'>
										<label className='sans text-sm text-dark xbold'>
											<span className='text-primary'>* </span>Email
										</label>
										<input
											type='email'
											name='Email'
											aria-label='Email Input'
											className='select-none bg-dark rounded-md text-light placeholder:text-light py-1 px-2 sans'
											required></input>
									</div>
									<div className='flex flex-col'>
										<label className='sans text-sm text-dark xbold'>Message</label>
										<textarea
											type='text'
											name='Message'
											maxLength={500}
											aria-label='Contact Us Message Input'
											className='resize-none h-[100px] select-none bg-dark rounded-md text-light placeholder:text-light py-1 px-2 sans'></textarea>
									</div>
								</div>

								<button
									type='submit'
									className='null:text-md sm:text-lg md:hover:opacity-50 active:scale-95 cursor-pointer xbold text-center select-none bg-[#aa89f5] text-dark p-1 items-center flex justify-center sans w-[50%] rounded-md'>
									SUBMIT
								</button>
								<ReCAPTCHA
									ref={recaptchaRef}
									sitekey={process.env.GATSBY_RECAPTCHA_SITE_KEY} // Replace with your actual site key
									size='invisible'
									className='invisible absolute'
									onChange={onReCAPTCHAChange}
									badge='inline' // Position can be 'inline', 'bottomright', or 'bottomleft'
								/>
							</form>
						)}
					</div>
					<div className='w-full h-full flex justify-center items-center'>
						<div className='null:border-y-[3px] null:border-light/30 xxl:border-none w-full text-center'>
							<span className='text-dark serif text-xxl xxl:border-y-[3px] border-light/30'>
								OR
							</span>
						</div>
					</div>
					<div className='flex flex-col space-y-8 justify-between items-center w-full h-full'>
						<div className='flex flex-col items-center text-center text-dark space-y-2'>
							<span className='null:w-[280px] sm:w-[400px] md:w-[400px] text-xxl sm:text-xxxl leading-none serif'>
								Join our team
							</span>
							<span className='sans null:text-sm sm:text-md null:w-[240px] sm:w-[320px] xl:w-[370px] xxl:w-[420px]'>
								Do you want to get involved? Register to save your seat for our free webinars and to
								book an appointment ahead!
							</span>
						</div>
						<div className='p-8 rounded-full bg-dark '>
							<FaUserPlus
								size={100}
								className='text-four '
							/>
						</div>
						<div
							onClick={() => openModal('register')}
							className='null:text-md sm:text-lg bg-[#aa89f5] text-dark xbold select-none md:hover:opacity-50 active:scale-95 cursor-pointer py-1 px-2 rounded-md w-fit sans'>
							REGISTER NOW
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
