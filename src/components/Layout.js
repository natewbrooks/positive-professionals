import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Footer from './sections/Footer';
import Navbar from './nav/Navbar';
import './all.sass';
import useSiteMetadata from './SiteMetadata';
import { withPrefix } from 'gatsby';
import '/src/styles/global.css';
import ContactSection from './sections/ContactSection';
import SigninModal from './sign in/SigninModal';

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

		return () => window.removeEventListener('resize', handleRefresh);
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
			<ContactSection />
			<Footer />
		</div>
	);
};

export default TemplateWrapper;
