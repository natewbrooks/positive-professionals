import React from 'react';

export default function ContactSection({ content }) {
	return (
		<section
			id='contact'
			className='relative w-full h-full py-20 bg-dark/10 flex flex-col lg:flex-row space-x-12'>
			<div className='border-r-2 border-dark/10  flex flex-col justify-center items-center w-full h-full space-y-8'>
				<div className='flex flex-col items-center justify-center text-dark'>
					<span className={`text-xxl serif`}>Start your journey to success</span>
					<span className={`sans text-md w-[370px]`}>
						Interested in working with us? Fill in your information and we will reach out to
						schedule a free consultation!
					</span>
				</div>
				<form className='flex flex-col bg-dark p-4 rounded-md justify-center items-center space-y-8'>
					<div className='flex flex-col space-y-2'>
						<div className='flex flex-col'>
							<span className='sans text-sm text-light'>
								<span className='text-four'>* </span>Name
							</span>
							<input
								type='text'
								className='select-none bg-light/10 rounded-md text-light/70 placeholder:text-light/10 py-1 px-2 sans'></input>
						</div>
						<div className='flex flex-col'>
							<span className='sans text-sm text-light'>
								<span className='text-four'>* </span>Email
							</span>
							<input
								type='email'
								className='select-none bg-light/10 rounded-md text-light/70 placeholder:text-light/10 py-1 px-2 sans'></input>
						</div>
						<div className='flex flex-col'>
							<span className='sans text-sm text-light'>
								<span className='text-four'>* </span>Phone Number
							</span>
							<input
								type='tel'
								className='select-none bg-light/10 rounded-md text-light/70 placeholder:text-light/10 py-1 px-2 sans'></input>
						</div>
					</div>
					<div className='hover:opacity-50 active:scale-95 cursor-pointer text-center select-none bg-light text-dark p-1 sans text-sm w-[50%] rounded-md'>
						Submit
					</div>
				</form>
			</div>
			<div className='flex flex-col space-y-8 w-full h-full justify-center items-center '>
				<span className='serif text-xxl text-dark w-[480px] text-center'>
					Register now to save your seat for our free weekly webinar.
				</span>
				<div className='bg-dark select-none hover:opacity-50 active:scale-95 cursor-pointer text-light p-2 rounded-md w-fit sans'>
					Create Account
				</div>
			</div>
		</section>
	);
}
