import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import ResourcesNav from '../../components/resources/ResourcesNav';
import ResourcesGridLayout from '../../components/resources/ResourcesGridLayout';

const Resources = ({}) => {
	const recentMedia = [
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
			title: 'Garfield eats lasagna Garfield eats lasagna Garfield eats lasagna',
			date: 'Sep 2023',
			description:
				'This is a short and brief non descript description of the video. Should probably be no longer than two sentences.',
			colorClass: 'text-tertiary',
			isVideo: true,
		},
		{
			title: 'Maximizing Leadership Potential with Executive Coaching',
			date: 'Aug 2024',
			excerpt:
				'Discover how executive coaching can unlock your leadership abilities and drive organizational success. Discover how executive coaching can unlock your leadership abilities and drive organizational success. Discover how executive coaching can unlock your leadership abilities and drive organizational success.',
			colorClass: 'text-secondary',
			authors: ['Liz Brooks'],
			isVideo: false,
		},
		{
			title: 'The Power of Mindset in Professional Development',
			date: 'Jul 2024',
			excerpt:
				'Uncover the critical role of mindset in professional growth and how coaching can help in reshaping your thought patterns for success.',
			colorClass: 'text-primary',
			authors: ['Jennifer Anderson', 'Kim Harris'],
			isVideo: false,
		},
		// Add more video items as needed
	];

	return (
		<>
			<Layout>
				<ResourcesNav pageTitle={'Recent Feed'} />
				<ResourcesGridLayout mediaItems={recentMedia} />
			</Layout>
		</>
	);
};

export default Resources;
