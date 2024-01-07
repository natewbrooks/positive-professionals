import React, { useState, useEffect } from 'react';
import Modal from './Modal';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from '../firebase';

export default function SigninModal({
	isModalOpen,
	setModalOpen,
	closeModal,
	showSignin,
	handleUserSignIn,
	handleUserSignOut,
}) {
	const [registerShown, setRegisterShown] = useState(!showSignin);
	const [email, setEmail] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const [password, setPassword] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const auth = getAuth(app);

	const [errorMsgShown, setErrorMsgShown] = useState(false);

	const register = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password);
	};

	const signIn = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password);
	};

	const registerAccount = (e) => {
		console.log(password);
		console.log('TRYING');
		e.preventDefault();
		register(email, password)
			.then((userCredential) => {
				// Handle new user
				const user = userCredential.user;
				console.log('USER CREDS:' + user);
				closeModal();
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
			});
	};

	const login = (e) => {
		console.log('TRYING');
		e.preventDefault();
		signIn(email, password)
			.then((userCredential) => {
				// Handle signed in user
				const user = userCredential.user;
				handleUserSignIn({
					email: email,
					firstName: firstName,
					lastName: lastName,
					phoneNumber: phoneNumber,
					uid: user.uid,
				});
				closeModal();
				console.log('LOGGED IN:', userCredential);
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
			});
	};

	const signOut = (e) => {
		e.preventDefault();
		signOut(auth)
			.then(() => {
				handleUserSignOut();
			})
			.catch((error) => {
				// An error happened.
			});
	};

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((user) => {
			if (user) {
				// User is signed in
			} else {
				// User is signed out
			}
		});

		// Cleanup subscription on unmount
		return () => unsubscribe();
	}, []);

	return (
		<Modal
			isOpen={isModalOpen}
			onClose={closeModal}>
			<div className='flex flex-col space-y-4 w-full h-full justify-center items-center'>
				{!registerShown && (
					<>
						<div className='flex flex-col text-center'>
							<span className='serif text-xl'>Sign in</span>
						</div>
						<form
							onSubmit={login}
							className='flex flex-col justify-start space-y-8 items-center'>
							<div className='flex flex-col space-y-2'>
								<div className='flex flex-col'>
									<span className='sans text-sm text-dark'>Email</span>
									<input
										type='email'
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										className='select-none bg-dark/10 rounded-md text-dark placeholder:text-dark py-1 px-2 sans'></input>
								</div>
								<div className='flex flex-col'>
									<span className='sans text-sm text-dark'>Password</span>
									<input
										type='password'
										value={password}
										onChange={(e) => setPassword(e.target.value)}
										className='select-none bg-dark/10 rounded-md text-dark placeholder:text-dark py-1 px-2 sans'></input>
									<span className='text-end sans text-sm xbold select-none cursor-pointer active:scale-95 text-dark/50 hover:opacity-50'>
										Forgot password?
									</span>
								</div>
							</div>
							<button
								type='submit'
								className='hover:opacity-50 active:scale-95 cursor-pointer xbold text-center select-none bg-dark text-light p-1 items-center flex justify-center sans text-sm w-[50%] rounded-md'>
								SUBMIT
							</button>
						</form>
						<div className='justify-center flex space-x-2 w-full border-t-2 border-dark/10 pt-5'>
							<span className='text-sm sans'>Don't have an account?</span>
							<span
								onClick={() => setRegisterShown(true)}
								className='hover:opacity-50 cursor-pointer select-none active:scale-95 text-sm sans xbold border-b-2  border-dark/10'>
								REGISTER NOW
							</span>
						</div>
					</>
				)}

				{registerShown && (
					<>
						<div className='flex flex-col text-center'>
							<span className='serif text-xl'>Register Account</span>
						</div>
						<form
							onSubmit={registerAccount}
							className='w-fit flex flex-col justify-center space-y-8 items-center'>
							<div className='w-[60%] flex flex-col space-y-2'>
								<div className='flex space-x-2 justify-evenly'>
									<div className='flex flex-col'>
										<span className='sans text-sm text-dark'>First Name</span>
										<input
											type='text'
											value={firstName}
											onChange={(e) => setFirstName(e.target.value)}
											className='select-none w-full bg-dark/10 rounded-md text-dark placeholder:text-dark py-1 px-2 sans'></input>
									</div>
									<div className='flex flex-col'>
										<span className='sans text-sm text-dark'>Last Name</span>
										<input
											type='text'
											value={lastName}
											onChange={(e) => setLastName(e.target.value)}
											className='select-none w-full bg-dark/10 rounded-md text-dark placeholder:text-dark py-1 px-2 sans'></input>
									</div>
								</div>
								<div className='flex flex-col'>
									<span className='sans text-sm text-dark'>Email</span>
									<input
										type='email'
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										className='select-none bg-dark/10 rounded-md text-dark placeholder:text-dark py-1 px-2 sans'></input>
								</div>
								<div className='flex flex-col'>
									<span className='sans text-sm text-dark'>Phone Number</span>
									<input
										type='tel'
										value={phoneNumber}
										onChange={(e) => setPhoneNumber(e.target.value)}
										className='select-none bg-dark/10 rounded-md text-dark placeholder:text-dark py-1 px-2 sans'></input>
								</div>
								<div className='flex flex-col'>
									<span className='sans text-sm text-dark'>Password</span>
									<input
										type='password'
										value={password}
										onChange={(e) => setPassword(e.target.value)}
										className='select-none bg-dark/10 rounded-md text-dark placeholder:text-dark py-1 px-2 sans'></input>
								</div>
							</div>
							<button
								type='submit'
								className='hover:opacity-50 active:scale-95 cursor-pointer xbold text-center select-none bg-dark text-light p-1 items-center flex justify-center sans text-sm w-[40%] rounded-md'>
								CREATE ACCOUNT
							</button>
						</form>
						<div className='justify-center md:justify-start flex space-x-2 w-full border-t-2 border-dark/10 pt-5'>
							<span className='text-sm sans'>Already have an account?</span>
							<span
								onClick={() => setRegisterShown(false)}
								className='hover:opacity-50 cursor-pointer select-none active:scale-95 text-sm sans xbold border-b-2  border-dark/10'>
								SIGN IN
							</span>
						</div>
					</>
				)}
			</div>
		</Modal>
	);
}
