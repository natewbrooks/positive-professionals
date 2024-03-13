import { AnchorLink } from 'gatsby-plugin-anchor-links';
import React from 'react';

const highlightSearchTerm = (text, searchTerm) => {
	if (!text || !searchTerm) return text;

	const parts = text.split(new RegExp(`(${searchTerm})`, 'gi'));
	return parts.map((part, index) =>
		part.toLowerCase() === searchTerm.toLowerCase() ? (
			<span
				key={index + part}
				className='bg-yellow-300 rounded-sm  text-dark '>
				{part}
			</span>
		) : (
			part
		)
	);
};

export default function VideoItem({ video, searchTerm }) {
	const howManyDaysIsAVideoStillNew = 7;
	const isNewVideo = () => {
		if (video.date) {
			const postDate = new Date(video.date);
			const currentDate = new Date();
			const threeDaysAgo = new Date(
				currentDate.setDate(currentDate.getDate() - howManyDaysIsAVideoStillNew)
			);

			return postDate >= threeDaysAgo;
		}
		return false;
	};

	const titleHighlighted = highlightSearchTerm(video.title, searchTerm);
	const descriptionHighlighted = highlightSearchTerm(video.description, searchTerm);
	const dateHighlighted = highlightSearchTerm(video.date.toUpperCase(), searchTerm);
	const presentorsHighlighted = video.presentors
		? highlightSearchTerm(video.presentors.join(', ').toUpperCase(), searchTerm)
		: null;
	let embedURL;

	if (video.videoURL) {
		embedURL = video.videoURL.replace('watch?v=', 'embed/');
	}

	return (
		<AnchorLink
			to={video.slug}
			className='group md:hover:opacity-80 w-full max-h-[150px] h-full items-center relative duration-300 transition-colors'>
			<div className='relative w-full h-full items-center flex '>
				<div className='hidden sm:block bg-dark/10 w-fit h-fit'>
					<iframe
						className='null:w-[200px] sm:w-fit h-full '
						src={embedURL}
						title={titleHighlighted}
						allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
						frameBorder='0'
						webkitallowfullscreen='true'
						mozallowfullscreen='true'
						allowFullScreen
					/>
				</div>
				<div className='pl-4 flex flex-col w-full h-full relative top-0'>
					<div className='relative flex flex-col w-full overflow-hidden space-y-1'>
						<div className='flex space-x-1'>
							{isNewVideo() && (
								<div className='bg-four dark:bg-light rounded-md px-2 mb-1 text-xs sans xbold text-light dark:text-dark'>
									NEW
								</div>
							)}

							<div
								className={`${
									video.featuredpost ? '' : 'hidden'
								} bg-secondary dark:bg-primary rounded-md px-2 mb-1 text-xs sans xbold text-light dark:text-dark`}>
								FEATURED
							</div>
						</div>
						<div className='relative top-0 h-full w-full flex null:flex-col md:flex-row text-dark/50 dark:text-light/50'>
							<span className='w-full sans text-sm xbold text-nowrap'>
								PUBLISHED {dateHighlighted}
							</span>
							{video.presentors && (
								<span className='w-fit sans text-sm xbold text-nowrap'>
									BY {presentorsHighlighted}
								</span>
							)}
						</div>
						<span
							className={`text-dark dark:text-light/70 overflow-hidden w-full sans null:text-lg sm:text-2xl xbold leading-snug xbold md:line-clamp-2`}>
							{titleHighlighted}
						</span>
					</div>
				</div>
			</div>
		</AnchorLink>
	);
}
