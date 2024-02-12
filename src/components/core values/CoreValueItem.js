import React, { useState } from 'react';
import Modal from '../Modal';
import { useModal } from '../ModalContext';

export default function CoreValuesItem({ text, Icon, modalId }) {
	const { openModal } = useModal();

	return (
		<>
			<div
				onClick={() => {
					openModal(modalId);
				}}
				className='transition-all duration-300 w-full bg-light/30 select-none active:scale-95 md:hover:opacity-50 cursor-pointer p-2 flex flex-col space-y-2 items-center justify-center rounded-md'>
				<Icon
					size={42}
					className='text-dark'
				/>
				<span className='sans xbold null:text-xs md:text-sm text-dark'>{text}</span>
			</div>
			<Modal modalId={modalId}>
				<div className='null:w-full xxl:w-[600px] null:max-h-[800px] md:max-h-[400px] h-full flex null:flex-col sm:flex-row sm:space-x-4 xxl:flex-col justify-center items-center text-dark dark:text-light/70 null:py-2 md:py-4 overflow-hidden'>
					<div className='flex flex-col w-full h-fit '>
						<div className='flex flex-col leading-tight pb-2'>
							<span className='sans text-sm sm:text-md text-dark/50 dark:text-light/80 xbold text-center'>
								CORE VALUE
							</span>
							<span className='serif text-xl sm:text-xxl text-center'>{text}</span>
						</div>
						<div className='pb-2 sans text-sm sm:text-md text-center xxl:text-start'>
							As executive coaches, "Persistence" is a core value that underpins our approach to
							leadership development and professional growth. In the ever-evolving landscape of
							business and leadership, persistence is not just about steadfastness or endurance;
							it's about maintaining a consistent effort towards improvement and excellence, even in
							the face of challenges and setbacks. We see persistence as a multi-dimensional trait
							that encompasses several key aspects.
						</div>
					</div>
					<div className='null:h-[750px] sm:h-[600px] md:max-h-[350px] py-4 w-fit xxl:w-full bg-dark/10 dark:bg-dark sm:px-2 rounded-md rounded-b-md sans text-sm sm:text-md overflow-y-auto'>
						<div className='h-full px-4 flex flex-col'>
							<span className='xbold dark:text-light/80 '>1. Resilience in Adversity:</span> In the
							fast-paced and often unpredictable business environment, challenges and obstacles are
							inevitable. Persistence empowers leaders to navigate these with resilience, turning
							potential setbacks into opportunities for learning and growth.
							<br />
							<span className='xbold dark:text-light/80 '>2. Long-Term Vision:</span> Persistence is
							closely tied to having a long-term vision. It involves staying committed to goals that
							may take years to achieve, keeping the bigger picture in mind while managing
							day-to-day responsibilities.
							<br />
							<span className='xbold dark:text-light/80 '>3. Continuous Learning:</span> The
							landscape of business is constantly changing. Persistence in the context of executive
							coaching means a commitment to continuous learning and adaptation. It's about
							persistently upgrading one's skills and knowledge base to stay relevant and effective.
							<br />
							<span className='xbold dark:text-light/80 '>
								4. Consistency in Effort and Standards:{' '}
							</span>
							Persistence translates into maintaining high standards of performance consistently.
							It's about regular, disciplined effort towards personal and professional development
							goals, not just in bursts of enthusiasm.
							<br />
							<span className='xbold dark:text-light/80 '>5. Overcoming Complacency:</span> In
							leadership, it's easy to become complacent, especially after achieving a certain level
							of success. Persistence involves pushing oneself and one's team out of the comfort
							zone, striving for continuous improvement.
							<br />
							<span className='xbold dark:text-light/80 '>6. Motivation and Inspiration:</span> As
							coaches, we use the principle of persistence to motivate and inspire. By embodying
							this value, we set an example for leaders to emulate, creating a culture of
							perseverance and dedication within their organizations. In essence, persistence is a
							driving force in our coaching philosophy. It's about more than just enduring; it's
							about actively striving for excellence, learning and adapting, and maintaining the
							discipline and motivation to achieve long-term success. This value deeply influences
							how we guide leaders in navigating their careers and organizations towards sustained
							growth and effectiveness.
						</div>
					</div>
				</div>
			</Modal>
		</>
	);
}
