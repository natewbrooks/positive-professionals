import React, { useEffect, useState } from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../../../components/Layout';
import ResourcesNav from '../../../components/resources/ResourcesNav';
import ResourcesGridLayout from '../../../components/resources/ResourcesGridLayout';

const Blog = ({}) => {
	const blogPosts = [
		{
			title: 'Navigating Career Transitions: Insights from a Professional Coach',
			date: 'Sep 2024',
			excerpt:
				'Explore key strategies for successful career transitions and how professional coaching can guide you through these pivotal moments.',
			colorClass: 'text-tertiary',
			isVideo: false,
		},
		{
			title: 'Maximizing Leadership Potential with Executive Coaching',
			date: 'Aug 2024',
			excerpt:
				'Discover how executive coaching can unlock your leadership abilities and drive organizational success. Discover how executive coaching can unlock your leadership abilities and drive organizational success. Discover how executive coaching can unlock your leadership abilities and drive organizational success.',
			colorClass: 'text-secondary',
			isVideo: false,
		},
		{
			title: 'The Power of Mindset in Professional Development',
			date: 'Jul 2024',
			excerpt:
				'Uncover the critical role of mindset in professional growth and how coaching can help in reshaping your thought patterns for success.',
			colorClass: 'text-primary',
			isVideo: false,
		},
		{
			title: 'Navigating Career Transitions: Insights from a Professional Coach',
			date: 'Sep 2024',
			excerpt:
				'Explore key strategies for successful career transitions and how professional coaching can guide you through these pivotal moments.',
			colorClass: 'text-tertiary',
			isVideo: false,
		},
		{
			title: 'Maximizing Leadership Potential with Executive Coaching',
			date: 'Aug 2024',
			excerpt:
				'Discover how executive coaching can unlock your leadership abilities and drive organizational success. Discover how executive coaching can unlock your leadership abilities and drive organizational success. Discover how executive coaching can unlock your leadership abilities and drive organizational success.',
			colorClass: 'text-secondary',
			isVideo: false,
		},
		{
			title: 'The Power of Mindset in Professional Development',
			date: 'Jul 2024',
			excerpt:
				'Uncover the critical role of mindset in professional growth and how coaching can help in reshaping your thought patterns for success.',
			colorClass: 'text-primary',
			isVideo: false,
		},
		{
			title: 'Navigating Career Transitions: Insights from a Professional Coach',
			date: 'Sep 2024',
			excerpt:
				'Explore key strategies for successful career transitions and how professional coaching can guide you through these pivotal moments.',
			colorClass: 'text-tertiary',
			isVideo: false,
		},
		{
			title: 'Maximizing Leadership Potential with Executive Coaching',
			date: 'Aug 2024',
			excerpt:
				'Discover how executive coaching can unlock your leadership abilities and drive organizational success. Discover how executive coaching can unlock your leadership abilities and drive organizational success. Discover how executive coaching can unlock your leadership abilities and drive organizational success.',
			colorClass: 'text-secondary',
			isVideo: false,
		},
		{
			title: 'The Power of Mindset in Professional Development',
			date: 'Jul 2024',
			excerpt:
				'Uncover the critical role of mindset in professional growth and how coaching can help in reshaping your thought patterns for success.',
			colorClass: 'text-primary',
			isVideo: false,
		},
		{
			title: 'Navigating Career Transitions: Insights from a Professional Coach',
			date: 'Sep 2024',
			excerpt:
				'Explore key strategies for successful career transitions and how professional coaching can guide you through these pivotal moments.',
			colorClass: 'text-tertiary',
			isVideo: false,
		},
		{
			title: 'Maximizing Leadership Potential with Executive Coaching',
			date: 'Aug 2024',
			excerpt:
				'Discover how executive coaching can unlock your leadership abilities and drive organizational success. Discover how executive coaching can unlock your leadership abilities and drive organizational success. Discover how executive coaching can unlock your leadership abilities and drive organizational success.',
			colorClass: 'text-secondary',
			isVideo: false,
		},
		{
			title: 'The Power of Mindset in Professional Development',
			date: 'Jul 2024',
			excerpt:
				'Uncover the critical role of mindset in professional growth and how coaching can help in reshaping your thought patterns for success.',
			colorClass: 'text-primary',
			isVideo: false,
		},
	];

	return (
		<>
			<Layout>
				<ResourcesNav pageTitle={'Blog Posts'} />
				<ResourcesGridLayout mediaItems={blogPosts} />
			</Layout>
		</>
	);
};

export default Blog;
