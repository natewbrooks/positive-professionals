import React from 'react';
import {
	FaShieldAlt,
	FaHospitalAlt,
	FaBriefcaseMedical,
	FaGavel,
	FaDesktop,
	FaLock,
	FaChartBar,
	FaHardHat,
} from 'react-icons/fa';

export default function WorkedWithSection({ content }) {
	const industryIconPairs = [
		{ industry: 'National Security', icon: FaShieldAlt },
		{ industry: 'Public Health', icon: FaHospitalAlt },
		{ industry: 'Medicine', icon: FaBriefcaseMedical },
		{ industry: 'Law Enforcement', icon: FaGavel },
		{ industry: 'Information Technology', icon: FaDesktop },
		{ industry: 'Cybersecurity', icon: FaLock },
		{ industry: 'Construction', icon: FaHardHat },
		{ industry: 'Data Science', icon: FaChartBar },
	];

	// Sort industryIconPairs alphabetically by industry name
	industryIconPairs.sort((a, b) => a.industry.localeCompare(b.industry));

	// Extract sorted arrays for industries and icons
	const industries = industryIconPairs.map((pair) => pair.industry);
	const icons = industryIconPairs.map((pair) => pair.icon);

	return (
		<div
			id='workedWith'
			className='flex flex-col space-y-4'>
			<div className='flex flex-col leading-snug text-end'>
				<span className='text-dark dark:text-light/60 sans text-sm'>
					INDUSTRIES WE'VE WORKED WITH
				</span>
			</div>
			<div className='flex justify-center w-full h-full py-4 rounded-md'>
				<div className='grid grid-cols-2 sm:grid-cols-4 justify-items-center gap-y-10 null:gap-x-10 sm:gap-x-0 w-full'>
					{industries.map((industry, index) => {
						const Icon = icons[index];
						return (
							<div
								key={index}
								className='flex flex-col justify-center items-center text-center space-y-4 text-dark dark:text-light/70'>
								<Icon
									className={`bg-dark dark:bg-light/70 p-4 rounded-md text-light dark:text-dark null:w-[120px] null:h-[80px] md:w-[180px] md:h-[90px]`}
								/>
								<span className='text-nowrap sans xbold text-sm text-dark dark:text-light/50 leading-none'>
									{industry}
								</span>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
