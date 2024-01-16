import React, { useEffect, useState } from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../../../components/Layout';
import ResourcesNav from '../../../components/resources/ResourcesNav';
import ResourcesGridLayout from '../../../components/resources/ResourcesGridLayout';

const Webinars = ({}) => {
	const previousWebinars = [
		{
			title: 'Superman sees the skies',
			date: 'Dec 2023',
			description:
				'This is a short and brief non descript description of the video. Should probably be no longer than two sentences.',
			colorClass: 'text-primary',
			isVideo: true,
		},
		{
			title: 'Me at the zoo',
			date: 'Oct 2023',
			description:
				'This is a short and brief non descript description of the video. Should probably be no longer than two sentences.',
			colorClass: 'text-secondary',
			isVideo: true,
		},
		{
			title: 'Garfield eats lasagna Garfield eats lasagna Garfield eats lasagna',
			date: 'Sep 2023',
			description:
				'This is a short and brief non descript description of the video. Should probably be no longer than two sentences.',
			colorClass: 'text-tertiary',
			isVideo: true,
		},
		// Add more video items as needed
	];

	return (
		<>
			<Layout>
				<ResourcesNav pageTitle={'Previous Webinars'} />
				<ResourcesGridLayout mediaItems={previousWebinars} />
			</Layout>
		</>
	);
};

export default Webinars;
