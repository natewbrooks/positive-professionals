import React, { useEffect, useState, useLayoutEffect } from 'react';
import { Helmet } from 'react-helmet';
import Footer from './sections/Footer';
import Navbar from './nav/Navbar';
import './all.sass';
import useSiteMetadata from './SiteMetadata';
import { withPrefix } from 'gatsby';
import '/src/styles/global.css';
import ContactSection from './sections/ContactSection';
import SigninModal from './sign in/SigninModal';
import UpcomingWebinars from './sections/webinar/UpcomingWebinarsSection';

const TemplateWrapper = ({ children }) => {
	const [navHeight, setNavHeight] = useState(83.6);

	function handleResize() {
		const newNavHeight = document.getElementById('navMenu')?.offsetHeight;
		if (newNavHeight) {
			setNavHeight(newNavHeight);
		} else {
			setNavHeight(83.6);
		}
	}

	useLayoutEffect(() => {
		handleResize();
	}, []);

	useEffect(() => {
		document.body.classList.add('bg-light');
		document.body.classList.add('dark:bg-dark');

		// Setup event listener
		window.addEventListener('resize', handleResize);

		// Cleanup on component unmount
		return () => window.removeEventListener('resize', handleResize);
	}, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount

	const { title, description } = useSiteMetadata();

	return (
		<div className='w-full h-full overflow-x-hidden'>
			<Helmet>
				<html lang='en' />
				<title>{title}</title>
				<meta
					name='description'
					content={description}
				/>

				{/* Preload Fonts */}
				<link
					rel='preload'
					href='https://fonts.googleapis.com/css2?family=Alegreya:wght@100;200;300;400;500;700;800&display=swap'
					as='style'
				/>
				<link
					rel='preload'
					href='https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@100;200;300;400;500;600;800&display=swap'
					as='style'
				/>

				{/* Apply Fonts After Preload */}
				<link
					href='https://fonts.googleapis.com/css2?family=Alegreya:wght@100;200;300;400;500;700;800&display=swap'
					rel='stylesheet'
				/>
				<link
					href='https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@100;200;300;400;500;600;800&display=swap'
					rel='stylesheet'
				/>

				{/* PRELOAD HERO BG IMAGES */}
				<link
					rel='preload'
					href={`${withPrefix('/')}img/bg-waves/hero-waves/hero-wave.svg`}
					as='image'
				/>
				<link
					rel='preload'
					href={`${withPrefix('/')}img/bg-waves/hero-waves/heroPaintStroke.svg`}
					as='image'
				/>

				<script
					src='https://www.google.com/recaptcha/api.js'
					async
					defer></script>

				<link
					rel='apple-touch-icon'
					sizes='180x180'
					href={`${withPrefix('/')}img/favicon/apple-touch-icon.png`}
				/>
				<link
					rel='icon'
					type='image/png'
					href={`${withPrefix('/')}img/favicon/favicon-32x32.png`}
					sizes='32x32'
				/>
				<link
					rel='icon'
					type='image/png'
					href={`${withPrefix('/')}img/favicon/favicon-16x16.png`}
					sizes='16x16'
				/>

				<link
					rel='mask-icon'
					href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
					color='#ff4400'
				/>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<meta
					name='theme-color'
					content='#fff'
				/>
				<meta
					property='og:type'
					content='business.business'
				/>
				<meta
					property='og:title'
					content={title}
				/>
				<meta
					property='og:url'
					content='/'
				/>
				<meta
					property='og:image'
					content={`${withPrefix('/')}img/pp-logo-bg.svg`}
				/>
			</Helmet>
			<Navbar />

			<div
				style={{ paddingTop: `${navHeight}px` }}
				className='relative w-full h-full'>
				<SigninModal modalId={'signIn'} />

				{children}
			</div>
			<div className='w-full h-full flex flex-col'>
				<ContactSection />
				{/* <UpcomingWebinars
					webinars={[
						{
							date: 'JAN 8, 2024 @ 12:30 PM EST',
							title: 'Learning About Our Infinite Universe',
							description: 'Exploring possibilities surrounding how we ended up here.',
						},
						{
							date: 'JAN 15, 2024 @ 1:00 PM EST',
							title: 'The Secrets of Effective Leadership',
							description: 'Discover key strategies to improve your leadership skills.',
						},
						{
							date: 'JAN 22, 2024 @ 2:00 PM EST',
							title: 'Innovations in Technology',
							description: 'A look at the latest technological advancements and their impact.',
						},
						{
							date: 'JAN 8, 2024 @ 12:30 PM EST',
							title: 'Learning About Our Infinite Universe',
							description: 'Exploring possibilities surrounding how we ended up here.',
						},
						{
							date: 'JAN 15, 2024 @ 1:00 PM EST',
							title: 'The Secrets of Effective Leadership',
							description: 'Discover key strategies to improve your leadership skills.',
						},
						{
							date: 'JAN 22, 2024 @ 2:00 PM EST',
							title: 'Innovations in Technology',
							description: 'A look at the latest technological advancements and their impact.',
						},
						// Add more webinar objects as needed
					]}
				/> */}
			</div>
			<Footer />
		</div>
	);
};

export default TemplateWrapper;
