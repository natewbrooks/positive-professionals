import React from 'react';
import heroWave from '../../../static/img/bg-waves/hero-waves/hero.svg';
import heroPaintStroke from '../../../static/img/bg-waves/hero-waves/heroPaintStroke.svg';

export default function Hero({ data }) {
	return (
		<>
			<header className='z-10 relative flex justify-center items-center w-full h-fit pt-32 pb-12 null:mb-[10rem] sm:mb-[10rem] md:mb-[14rem]  lg:mb-[12rem] xl:mb-[16rem] bg-tertiary'>
				<img
					className='aspect-auto absolute null:translate-y-[45%] lg:translate-y-[38%] bottom-0 w-full h-[300px] md:h-[450px] xxl:h-[500px]'
					alt='hero background waves'
					src={heroWave}></img>

				<div className='relative p-4 rounded-md flex flex-col space-y-4 items-center justify-center h-full w-fit'>
					<div className='-translate-y-[20px] w-full items-center text-center flex flex-col'>
						<div className='relative flex flex-col -space-y-8'>
							<span className='transition-all duration-300 break-words null:w-fit sm:w-[500px] lg:w-[740px] leading-none serif null:text-xxxl mobile:text-billboard text-center xbold text-dark px-8 rounded-full'>
								{data.header}
								<span className='relative inline-block z-20 break-words null:w-fit leading-none serif null:text-xxxl mobile:text-billboard text-center xbold text-light dark:text-dark py-1 px-8 rounded-full'>
									<img
										className='absolute w-full -scale-x-[160%] scale-y-[130%] h-full -translate-x-10'
										style={{ zIndex: '-1' }}
										src={heroPaintStroke}></img>
									together.
								</span>
							</span>
						</div>
					</div>
					<p className='-translate-y-[20px] tracking-[0.1rem] rounded-md px-2 xbold break-words sans null:w-[240px] md:w-full text-center null:text-md mobile:text-lg text-dark'>
						{data.subtext}
					</p>
					<div className='null:hidden md:block md:translate-y-[80px] xl:translate-y-[55px] xxl:translate-y-[50px] sans null:text-xxl xbold text-[#386975]  cursor-pointer select-none md:hover:opacity-90 md:active:scale-95 py-2 px-6 rounded-md'>
						GET STARTED
					</div>
				</div>
			</header>
		</>
	);
}
