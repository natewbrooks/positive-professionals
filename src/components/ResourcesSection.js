import React from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import SeeMore from './SeeMore';
import VideoItem from './VideoItem';

export default function ResourcesSection({ content }) {
	return (
		<section id='resources' className='w-full h-full'>
			<div className='flex flex-col text-center -space-y-1 justify-center'>
				<span className={`text-xxl serif`}>Resources</span>
			</div>
			<div className='flex flex-col text-start justify-center'>
				<div className='flex flex-col -space-y-1 my-4'>
					<span className={`sans text-sm `}>SEE US IN ACTION</span>
					<span className={`text-xl serif`}>Video catalog</span>
				</div>
				<div className='w-full grid grid-cols-3 gap-2'>
					<VideoItem
						title={`Christmas came early`}
						date={`Jun 2024`}
						description={`This is a short and brief non descript description of the video. Should probably be
								no longer than two sentences.`}
						colorClass={`text-secondary`}
					/>
					<VideoItem
						title={`Adam Driver does it again`}
						date={`Mar 2024`}
						description={`This is a short and brief non descript description of the video. Should probably be
								no longer than two sentences.`}
						colorClass={`text-four`}
					/>
					<VideoItem
						title={`Robin Williams best moments`}
						date={`Jan 2024`}
						description={`This is a short and brief non descript description of the video. Should probably be
								no longer than two sentences.`}
						colorClass={`text-primary`}
					/>
				</div>
				<SeeMore />
			</div>
			<div className='w-full flex flex-col justify-center my-12'>
				<div className='flex flex-col -space-y-1 my-4 text-end'>
					<span className={`sans text-sm `}>FREE WEEKLY WEBINARS</span>
					<span className={`text-xl serif`}>Previous webinars</span>
				</div>

				<div className='w-full grid grid-cols-3 gap-2'>
					<VideoItem
						title={`Superman sees the skies`}
						date={`Dec 2023`}
						description={`This is a short and brief non descript description of the video. Should probably be
								no longer than two sentences.`}
						colorClass={`text-primary`}
					/>
					<VideoItem
						title={`Me at the zoo`}
						date={`Oct 2023`}
						description={`This is a short and brief non descript description of the video. Should probably be
								no longer than two sentences.`}
						colorClass={`text-secondary`}
					/>
					<VideoItem
						title={`Garfield eats lasagna`}
						date={`Sep 2023`}
						description={`This is a short and brief non descript description of the video. Should probably be
								no longer than two sentences.`}
						colorClass={`text-tertiary`}
					/>
				</div>

				<SeeMore />
			</div>
		</section>
	);
}
