import React from 'react';
import {
	FaHammer,
	FaLightbulb,
	FaHandshake,
	FaTrophy,
	FaUsers,
	FaBalanceScale,
} from 'react-icons/fa';
import CoreValuesItem from '../core values/CoreValueItem';
import waveTop from '../../img/bg-waves/core-value-waves/wave-top.svg';
import waveBottom from '../../img/bg-waves/core-value-waves/wave-bottom.svg';
import { useModal } from '../../contexts/ModalContext';
import Modal from '../Modal';

const coreValues = [FaHammer, FaLightbulb, FaHandshake, FaTrophy, FaUsers, FaBalanceScale];
export default function CoreValuesSection({ data }) {
	const { currentModal } = useModal();

	return (
		<section
			id='values'
			className='w-full h-full relative flex justify-center items-center text-dark'>
			<div className='z-[1] absolute w-full h-full left-0'>
				<img
					src={waveTop}
					alt='Services wave top bg'
					style={{ transform: 'translateY(-80%)' }}
					className='absolute w-full h-fit top-0 '></img>
				<div className='absolute w-full h-full bg-secondary z-0'></div>
				<img
					src={waveBottom}
					alt='Services wave bottom bg'
					className='translate-y-[90%] absolute w-full h-fit bottom-0 z-[-1]'></img>
			</div>

			<div className='flex flex-col space-y-4 items-center justify-center py-4'>
				<div className='z-10 flex flex-col leading-snug w-full text-center'>
					<span className='sans text-sm'>{data.subtext.toUpperCase()}</span>
					<span className='serif text-xxl leading-none '>{data.header}</span>
				</div>

				<div className='w-full md:max-w-[80%] xl:max-w-[60%] flex flex-col space-y-4 justify-center items-center'>
					<div className='w-full grid grid-cols-3 gap-1 justify-items-center'>
						{data.values.map((value, index) => (
							<>
								<div className='w-full h-fit z-10'>
									<CoreValuesItem
										key={index}
										value={value}
										Icon={coreValues[index]}
										modalId={'coreValue' + index}
									/>
								</div>
								<Modal modalId={'coreValue' + index}>
									<div className='leading-snug z-30 w-full xxl:max-w-[600px] null:h-full md:max-h-[600px] flex flex-col md:flex-row xxl:flex-col xxl:space-x-0 sm:space-x-4 justify-center items-center text-dark dark:text-light/70 py-4 overflow-hidden'>
										<div className='flex flex-col w-full h-fit'>
											<div className='flex flex-col -space-y-1 leading-snug pb-2'>
												<span className='sans text-sm sm:text-md text-secondary xbold text-center'>
													CORE VALUE
												</span>
												<span className='serif text-xl sm:text-xxl text-center'>
													{value.name.toUpperCase()}
												</span>
											</div>
											<div className='pb-2 sans text-sm sm:text-md text-center '>{value.about}</div>
										</div>
										<div className='max-h-[50vh] w-fit xxl:w-full bg-dark/10 dark:bg-dark sm:px-2 rounded-md rounded-b-md sans text-sm sm:text-md overflow-y-auto'>
											<div className='h-full px-4 flex flex-col'>
												<br />
												{value.reasons.map((reason, index) => (
													<React.Fragment key={value.name + reason + index}>
														<span className='xbold dark:text-light/80 '>
															{index + 1}. {reason.reason}:
														</span>
														<span>{reason.explanation}</span>
														<br />
													</React.Fragment>
												))}
											</div>
										</div>
									</div>
								</Modal>
							</>
						))}
					</div>

					<p className='z-10 sans text-lg text-center leading-snug'>{data.body}</p>
				</div>
			</div>
		</section>
	);
}
