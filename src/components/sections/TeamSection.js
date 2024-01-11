import React from 'react';
import TeamMembers from '../team/TeamMembers';
import SeeMore from '../pieces/SeeMore';

const teamData = [
	{
		name: 'Liz Brooks',
		title: 'Executive Leadership Specialist',
		description: 'Description here',
		background:
			' Liz is a former Senior Executive in the Department of Defense with 38 years of experience in conducting and leading high-stakes intelligence operations, information technology, cybersecurity, and support activities. Notably, she served as her Agency’s Chief of Staff (#4 position) for nearly four years, serving across two 4-Star Director’s administrations. During that time, in addition to managing the Director’s Suite operations, she oversaw all corporate support functions, and managed all senior executive assignments and recognition. In her career she also co-led the organization’s Capabilities (a.k.a. Information Technology) Directorate, served as the Director of Policy and Records, and finally as the Director of Diversity, Equality, Inclusion and Accessibility. She is a 2016 recipient of the Distinguished Presidential Rank Award for Defense Intelligence Executives granted by President Obama and a 2008 recipient of the Meritorious Presidential Rank Award granted by President George W. Bush. In 2021 she received the Intelligence Community Equal Employment Opportunity & Diversity Exceptional Service Award from the Director of National Intelligence. ',
		specialties:
			'As an energetic mom of six, a people-focused senior executive in the Department of Defense, and a committed church and school volunteer, Liz has always found purpose in serving others and making an impact greater than herself. As a coach, she finds joy in helping others navigate the complexities of their lives, overcome challenges, and find greater peace, joy, and purpose by gaining clarity, creating balance, and achieving goals. Known for her calm and engaging approach, she uses a variety of tools and techniques to help her clients move forward successfully, and enthusiastically celebrates their victories with them. ',
		experience:
			'Liz has over 17 years of experience coaching and mentoring at all levels - from junior employee to mid-level leader to senior executives at the pinnacle of their careers. Her experience crosses both the federal government and private sector, working with people in a broad range of career fields. For the past decade she has been a champion for underrepresented groups, working to ensure a level playing field for all employees. Through her coaching she remains committed to building a bright future for our country in which differences in background and identity are valued and honored and people of all groups are able to succeed. In keeping with that, she particularly loves to coach women, people of color and advocates for diversity, equality, inclusion and accessibility. ',
		certifications:
			'Liz is an Associate Certified Coach with the International Coaching Federation. She is certified in using the Leadership Versatility Index (LVI), Emotional Intelligence Quotient Inventory (EQ-1) 2.0 and 360, and the Hogan Assessments in her coaching, as well as being an active Positive Intelligence Coach™, Team Coach, and Certified Diversity Executive (IDC).  ',
		education:
			'Liz is a graduate of Virginia Tech with a Bachelor of Science in Marketing and minor in German.',
		colorClass: 'bg-primary',
	},
	{
		name: 'Jennifer Anderson',
		title: 'Executive Leadership Specialist',
		description: 'Description here',
		background:
			' As a highly accomplished Senior Executive (SES) and engineer, Jennifer brings unique experience, perspective, and drive to her coaching clients. During her 30 years with the U.S. Department of Defense, she directed complex technical development efforts and 24/7 operational activities for the Intelligence Community’s premier cyber and cybersecurity organizations. She is results-oriented, decisive, and experienced in strategic planning, problem solving, team building, and program execution for challenging missions. Jennifer is an effective negotiator with proven interpersonal skills capable of influencing and uniting domestic and international partners toward common goals. She thrives under stressful situations and in dynamic environments while remaining calm, logical, and focused.  ',
		specialties:
			'Jennifer became a coach because she loves getting to work with folks who make a positive difference in the world and who want to continue to improve themselves and the world around them. As an engineer and problem solver, she focuses on outcomes and results. She teaches practical techniques to gain clarity on what’s important, define meaningful goals, and take action to achieve real results that last and energize – even, and especially, during stressful, uncertain conditions. She genuinely believes in her clients and trusts their abilities to discover possibilities, develop skills, gain confidence, and build strong teams at home and at work. One leader to another, growing from one level of leadership to the next. ',
		experience:
			'Jennifer has coached organizations such as the U.S. Navy (Flag Officers, SES), U.S. Army (Command Course Candidates), Department of Defense (civilian and military personnel), Johns Hopkins University Applied Physics Laboratory, Council for State Governments, Loyola University Maryland, Virginia Tech, and corporate clients. ',
		certifications:
			'ACT Leadership and Performance Coaching; Professional Certified Coach (PCC) through the International Coaching Federation (ICF); Hogan Assessment; Emotional Intelligence Assessment (EQ-i 2.0 & EQ 360); Positive Intelligence Saboteur Assessment®.  ',
		education:
			' MS in Electrical and Electronics Engineering from Johns Hopkins, BS in Electrical Engineering from Virginia Tech. ',
		colorClass: 'bg-secondary',
	},
	{
		name: 'Kim Harris',
		title: 'Executive Leadership Specialist',
		description: 'Description here',
		background:
			'In addition to coaching, Kim has 35 years of experience in the U.S. Department of Defense. As a member of the Defense Intelligence Senior Executive Service, she served both overseas and within the United States, as well as across the Intelligence Community, to accomplish her agency’s goals. Kim has worked with both civilian and military leaders at all levels of her agency and brings first-hand knowledge of working successfully in a high stress environment to move mission forward.',
		specialties:
			'As an executive coach, Kim connects with motivated professionals who are ready to build new paths to accomplish their goals. For her, it is all about the client – their agenda, their choices, their transformation. Working one-on-one with clients, Kim likes to start at the core – clarifying their personal and professional values to create a guide for effective decision-making. She then partners with her clients as they work to bring greater resiliency and creativity into their lives in a lasting and focused way. While comfortable working with any level of leader, Kim truly enjoys working with emerging or mid-level leaders who want to focus on growing their leadership abilities. Clients have described her approach as authentic, inquisitive, holistic, compassionate, and visionary. ',
		experience:
			'Kim provided coaching services in the Intelligence Community for over 15 years, focusing on individuals serving as first-line through mid-level leaders. She helped grow the next generation of senior leaders, especially within her agency. She turned her focus to women of color over the course of the last 5 years, providing coaching to prepare them to successfully rise through the leadership ranks in an equitable fashion. Kim has also been successful coaching in the private sector, working with individuals from the automotive, engineering, software, healthcare, and business/finance industries. ',
		certifications:
			'Kim is an accredited coach through ACT Performance and Leadership Coaching and is credentialed as an Associate Certified Coach (ACC) through the International Coaching Federation. She is also certified in the Hogan Assessment, the Positive Intelligence Saboteur Assessment (PQ)®, and Global DISC™ Cultural Intelligence Assessment. ',
		education:
			'Kim has her Master of Business Administration (MBA) from Johns Hopkins University, Bachelor of Arts in Russian Studies and Economics, Minor in History, from University of Virginia.',
		colorClass: 'bg-tertiary',
	},
	{
		name: 'Angela Satchell',
		title: 'Executive Leadership Specialist',
		description: 'Description here',
		background:
			' Liz is a former Senior Executive in the Department of Defense with 38 years of experience in conducting and leading high-stakes intelligence operations, information technology, cybersecurity, and support activities. Notably, she served as her Agency’s Chief of Staff (#4 position) for nearly four years, serving across two 4-Star Director’s administrations. During that time, in addition to managing the Director’s Suite operations, she oversaw all corporate support functions, and managed all senior executive assignments and recognition. In her career she also co-led the organization’s Capabilities (a.k.a. Information Technology) Directorate, served as the Director of Policy and Records, and finally as the Director of Diversity, Equality, Inclusion and Accessibility. She is a 2016 recipient of the Distinguished Presidential Rank Award for Defense Intelligence Executives granted by President Obama and a 2008 recipient of the Meritorious Presidential Rank Award granted by President George W. Bush. In 2021 she received the Intelligence Community Equal Employment Opportunity & Diversity Exceptional Service Award from the Director of National Intelligence. ',
		specialties:
			'As an energetic mom of six, a people-focused senior executive in the Department of Defense, and a committed church and school volunteer, Liz has always found purpose in serving others and making an impact greater than herself. As a coach, she finds joy in helping others navigate the complexities of their lives, overcome challenges, and find greater peace, joy, and purpose by gaining clarity, creating balance, and achieving goals. Known for her calm and engaging approach, she uses a variety of tools and techniques to help her clients move forward successfully, and enthusiastically celebrates their victories with them. ',
		experience:
			'Liz has over 17 years of experience coaching and mentoring at all levels - from junior employee to mid-level leader to senior executives at the pinnacle of their careers. Her experience crosses both the federal government and private sector, working with people in a broad range of career fields. For the past decade she has been a champion for underrepresented groups, working to ensure a level playing field for all employees. Through her coaching she remains committed to building a bright future for our country in which differences in background and identity are valued and honored and people of all groups are able to succeed. In keeping with that, she particularly loves to coach women, people of color and advocates for diversity, equality, inclusion and accessibility. ',
		certifications:
			'Liz is an Associate Certified Coach with the International Coaching Federation. She is certified in using the Leadership Versatility Index (LVI), Emotional Intelligence Quotient Inventory (EQ-1) 2.0 and 360, and the Hogan Assessments in her coaching, as well as being an active Positive Intelligence Coach™, Team Coach, and Certified Diversity Executive (IDC).  ',
		education:
			'Liz is a graduate of Virginia Tech with a Bachelor of Science in Marketing and minor in German.',
		colorClass: 'bg-four',
	},
];

export default function TeamSection() {
	return (
		<section
			id='team'
			className='w-full h-full flex flex-col space-y-40 justify-center items-center xxl:items-start xxl:flex-row xl:space-x-20'>
			<div className='flex flex-col space-y-4 xxl:max-w-[50%]'>
				<div className='flex flex-col -space-y-1'>
					<span className='sans text-sm'>WHO WE ARE</span>
					<span className='serif text-xxl'>Uncover our history</span>
				</div>
				<p className='sans text-lg'>
					Mental fitness is our capacity to handle life’s greatest challenges with a positive
					mindset rather than getting stressed or upset. When it comes to physical fitness, we are
					unlikely to be able to climb a mountain if we have not strengthened our muscles and built
					our stamina in advance. Mental fitness is similar; if we want to overcome stressful
					situations and view life through a positive mindset, we need to learn and practice the
					skills that will enable us to do so. In other words, we need to build our mental fitness.
					<br></br>
					<br></br>
					By strengthening three fundamental mental fitness muscles, leaders enhance their
					resilience and perseverance, spend less time in anger, regret, or blame, and unleash their
					creativity and innovation. Mental fitness training helps alleviate the impact of setbacks
					so personnel can remain resilient, constantly evolving, and contributing to the overall
					progress of the business.
					<br></br>
					<br></br>
					By strengthening three fundamental mental fitness muscles, leaders enhance their
					resilience and perseverance, spend less time in anger, regret, or blame, and unleash their
					creativity and innovation. Mental fitness training helps alleviate the impact of setbacks
					so personnel can remain resilient, constantly evolving, and contributing to the overall
					progress of the business.
				</p>
				{/* <SeeMore
					text={'Learn more'}
					colorClass={'text-primary'}
				/> */}
			</div>
			<div className='flex flex-col items-center justify-center space-y-4'>
				<div className='flex w-full flex-col -space-y-1 text-end'>
					{/* <span className='sans text-md'>
						With over 120 years of combined experience, we are prepared to handle anything thrown
						our way.
					</span> */}
					<span className='sans text-sm'>OVER 120 YEARS OF EXPERIENCE</span>

					<span className='text-xxl serif'>The Team</span>
				</div>

				<TeamMembers gridItems={teamData} />
			</div>
		</section>
	);
}
