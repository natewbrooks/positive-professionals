import React, { useEffect, useState } from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../../../components/Layout';
import ResourcesNav from '../../../components/resources/ResourcesNav';
import ResourcesGridLayout from '../../../components/resources/ResourcesGridLayout';

const Videos = ({}) => {
	const videoCatalog = [
		{
			title: 'Christmas came early',
			date: 'Jun 2024',
			description:
				'This is a short and brief non descript description of the video. Should probably be no longer than two sentences.',
			colorClass: 'text-secondary',
			isVideo: true,
		},
		{
			title: 'Adam Driver does it again',
			date: 'Mar 2024',
			description:
				'This is a short and brief non descript description of the video. Should probably be no longer than two sentences.',
			colorClass: 'text-four',
			isVideo: true,
		},
		{
			title: 'Robin Williams best moments',
			date: 'Jan 2024',
			description:
				'This is a short and brief non descript description of the video. Should probably be no longer than two sentences.',
			colorClass: 'text-primary',
			isVideo: true,
		},
		// Add more video items as needed
	];

	return (
		<>
			<Layout>
				<ResourcesNav pageTitle={'Video Catalog'} />
				<ResourcesGridLayout mediaItems={videoCatalog} />
			</Layout>
		</>
	);
};

export default Videos;
