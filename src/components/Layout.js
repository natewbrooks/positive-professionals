import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Footer from './sections/Footer';
import Navbar from './nav/Navbar';
import './all.sass';
import useSiteMetadata from './SiteMetadata';
import { withPrefix } from 'gatsby';
import '/src/styles/global.css';
import ContactSection from './sections/ContactSection';

const TemplateWrapper = ({ children }) => {
	const [navHeight, setNavHeight] = useState();

	function handleRefresh() {
		setNavHeight(document.getElementById('navMenu').offsetHeight);
	}

	useEffect(() => {
		document.body.classList.add('bg-light');
		document.body.classList.add('dark:bg-dark');

		window.addEventListener('resize', handleRefresh);

		const navHeight = document.getElementById('navMenu').offsetHeight;
		if (navHeight) {
			setNavHeight(navHeight);
		}

		return window.removeEventListener('resize', handleRefresh);
	}, [navHeight]);

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

				<link
					rel='apple-touch-icon'
					sizes='180x180'
					href={`${withPrefix('/')}img/apple-touch-icon.png`}
				/>
				<link
					rel='icon'
					type='image/png'
					href={`${withPrefix('/')}img/favicon/32x32-favicon.png`}
					sizes='32x32'
				/>
				<link
					rel='icon'
					type='image/png'
					href={`${withPrefix('/')}img/favicon/16x16-favicon.png`}
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
					content={`${withPrefix('/')}img/og-image.jpg`}
				/>
			</Helmet>
			<Navbar />

			<div
				style={{ paddingTop: `${navHeight}px` }}
				className='relative w-full h-full'>
				{children}
			</div>
			<ContactSection />
			<Footer />
		</div>
	);
};

export default TemplateWrapper;
