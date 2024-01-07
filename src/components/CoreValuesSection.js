import React from 'react';
import TeamMembers from './TeamMembers';
import SeeMore from './SeeMore';
import { FaHammer } from 'react-icons/fa';

export default function CoreValuesSection() {
	return (
		<section id='values' className='w-full h-full flex justify-center items-center'>
			<div className='flex flex-col space-y-4'>
				<div className='flex flex-col -space-y-2 w-full text-center'>
					<span className='sans text-sm'>WHAT WE BELIEVE IN</span>
					<span className='serif text-xxl'>Our core values</span>
				</div>

				<div className='flex flex-col space-y-4 justify-center items-center'>
					<div className='grid grid-cols-3 gap-2 justify-ite lg:flex  w-full justify-center'>
						<div className='bg-dark/10 p-2 flex flex-col space-y-2 items-center justify-center rounded-md'>
							<FaHammer size={42} />
							<span className='sans xbold text-sm'>PERSISTENCE</span>
						</div>
						<div className='bg-dark/10 p-2 flex flex-col space-y-2 items-center justify-center rounded-md'>
							<FaHammer size={42} />
							<span className='sans xbold text-sm'>PERSISTENCE</span>
						</div>
						<div className='bg-dark/10 p-2 flex flex-col space-y-2 items-center justify-center rounded-md'>
							<FaHammer size={42} />
							<span className='sans xbold text-sm'>PERSISTENCE</span>
						</div>
						<div className='bg-dark/10 p-2 flex flex-col space-y-2 items-center justify-center rounded-md'>
							<FaHammer size={42} />
							<span className='sans xbold text-sm'>PERSISTENCE</span>
						</div>
						<div className='bg-dark/10 p-2 flex flex-col space-y-2 items-center justify-center rounded-md'>
							<FaHammer size={42} />
							<span className='sans xbold text-sm'>PERSISTENCE</span>
						</div>
						<div className='bg-dark/10 p-2 flex flex-col space-y-2 items-center justify-center rounded-md'>
							<FaHammer size={42} />
							<span className='sans xbold text-sm'>PERSISTENCE</span>
						</div>
					</div>

					<p className='sans text-lg lg:px-20 xl:px-60 xxl:px-80 text-center flex'>
						Mental fitness is our capacity to handle life’s greatest challenges with a positive
						mindset rather than getting stressed or upset. When it comes to physical fitness, we are
						unlikely to be able to climb a mountain if we have not strengthened our muscles and
						built our stamina in advance. Mental fitness is similar; if we want to overcome
						stressful situations and view life through a positive mindset, we need to learn and
						practice the skills that will enable us to do so. In other words, we need to build our
						mental fitness.
					</p>
				</div>
			</div>
		</section>
	);
}
