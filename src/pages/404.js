import * as React from 'react';
import Layout from '../components/Layout';
import { FaExclamationTriangle } from 'react-icons/fa';

const NotFoundPage = () => (
	<Layout>
		<div className='pt-[6rem] pb-[18rem] null:px-4 mobile:px-6 sm:px-8 md:px-10 lg:px-20 xl:px-60 2xl:px-80 w-full h-full text-center dark:text-light/70'>
			<span className={`sans text-sm xbold text-secondary`}>404 ERROR</span>
			<h1
				className={`leading-none mb-[1rem] sans w-full text-center xbold text-dark dark:text-light/80 text-xxxl`}>
				PAGE NOT FOUND
			</h1>
			<div className={`mb-[1rem] w-full flex justify-center items-center`}>
				<FaExclamationTriangle className={`w-[12rem] h-[12rem] text-four`} />
			</div>
			<span className={`w-full text-center sans text-lg text-dark dark:text-light/70`}>
				You just hit a route that doesn&#39;t exist....
			</span>
		</div>
	</Layout>
);

export default NotFoundPage;
