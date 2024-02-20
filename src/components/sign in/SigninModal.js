import React, { useState, useEffect } from 'react';
import Modal from '../Modal';
import { useModal } from '../ModalContext';

import app from 'gatsby-plugin-firebase-v9.0';
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
} from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { FaUserCircle } from 'react-icons/fa';

export default function SigninModal({ showSignin }) {
	const [registerShown, setRegisterShown] = useState(!showSignin);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');

	const [errorMsg, setErrorMsg] = useState('');

	const usersDB = getFirestore();
	const auth = getAuth();
	const { openModal, closeModal, currentModal } = useModal();

	useEffect(() => {
		setErrorMsg('');
	}, [currentModal]);

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((user) => {
			if (user) {
				// User is signed in, you can use user object here
				console.log(user.email);
			} else {
				// User is signed out
				console.log('No user is signed in.');
			}
		});

		// Cleanup subscription on component unmount
		return () => unsubscribe();
	}, []);

	const handleLogin = async (e) => {
		e.preventDefault();
		console.log('EMAIL: ' + email + '\nPASSWORD: ' + password);

		try {
			const userCredential = await signInWithEmailAndPassword(auth, email, password);
			// Signed in
			const user = userCredential.user;
			closeModal();
			setErrorMsg('');
		} catch (error) {
			console.log(error);
			const errorCode = error.code;
			const errorMessage = error.message;
			setErrorMsg('ERROR: INVALID EMAIL OR PASSWORD. TRY AGAIN.');
			// Handle login error (e.g., show error message to the user)
		}
	};

	const handleRegister = async (e) => {
		e.preventDefault();

		try {
			const userCredential = await createUserWithEmailAndPassword(auth, email, password);
			const user = userCredential.user;

			await setDoc(doc(usersDB, 'users', user.uid), {
				firstName: firstName,
				lastName: lastName,
				phoneNumber: phoneNumber,
				email: email, // Storing email in Firestore as well, though it's already in Auth
			});

			closeModal();
			setErrorMsg('');
		} catch (error) {
			const errorCode = error.code;
			const errorMessage = error.message;
			setErrorMsg(errorMessage);
		}
	};

	const handleLogout = async (e) => {
		e.preventDefault();

		try {
			await signOut(auth);
			closeModal();
			setErrorMsg('');
			// Play some checkmark success animation
		} catch (error) {
			setErrorMsg(error.message);
		}
	};

	return (
		<>
			<Modal modalId={'logIn'}>
				<div className='flex flex-col null:space-y-12 md:space-y-4 w-full h-full justify-center items-center'>
					<div className='flex flex-col text-center'>
						<span className='serif text-xl text-dark dark:text-light/80'>Sign in</span>
					</div>
					<form
						onSubmit={handleLogin}
						className='flex flex-col justify-start space-y-8 items-center'>
						<div className='flex flex-col space-y-2'>
							<div className='flex flex-col'>
								<span className='sans text-sm text-dark dark:text-light/80'>Email</span>
								<input
									type='email'
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									className='select-none dark:bg-light/10 bg-dark/10 rounded-md text-dark placeholder:text-dark dark:text-light/70 dark:placeholder:text-light/50 py-1 px-2 sans'></input>
							</div>
							<div className='flex flex-col'>
								<span className='sans text-sm text-dark dark:text-light/80'>Password</span>
								<input
									type='password'
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									className='select-none dark:bg-light/10 bg-dark/10 rounded-md text-dark placeholder:text-dark dark:text-light/70 dark:placeholder:text-light/50 py-1 px-2 sans'></input>
								<span className='text-end sans pt-1 text-xs xbold select-none cursor-pointer active:scale-95 text-secondary md:hover:opacity-50'>
									FORGOT PASSWORD?
								</span>
							</div>
						</div>
						{errorMsg != '' && (
							<div className='outline outline-2 max-w-[200px] text-center rounded-md outline-red-400 text-dark dark:text-light/70 xbold p-1 flex items-center justify-center sans text-xs'>
								{errorMsg.toUpperCase()}
							</div>
						)}
						<button
							type='submit'
							className='md:hover:opacity-50 active:scale-95 cursor-pointer xbold text-center select-none dark:bg-lightAccent dark:text-darkAccent bg-dark text-light p-1 items-center flex justify-center sans text-sm w-[50%] rounded-md'>
							SUBMIT
						</button>
					</form>
					<div className='justify-center items-center md:justify-start pt-5 flex space-x-2 w-full border-t-2 dark:border-light/10 border-dark/10 h-fit'>
						<span className='text-sm sans text-dark dark:text-light/50'>
							Don't have an account?
						</span>
						<span
							onClick={() => {
								closeModal();
								openModal('register');
							}}
							className='md:hover:opacity-50 cursor-pointer select-none active:scale-95 text-sm text-four sans xbold'>
							REGISTER NOW
						</span>
					</div>
				</div>
			</Modal>
			<Modal modalId={'register'}>
				<div className='flex flex-col null:space-y-12 md:space-y-4 w-full h-full justify-center items-center'>
					<div className='flex flex-col text-center'>
						<span className='serif text-xl text-dark dark:text-light/80'>Register Account</span>
					</div>
					<form
						onSubmit={handleRegister}
						className='w-fit flex flex-col justify-center space-y-8 items-center'>
						<div className='w-[70%] flex flex-col space-y-2'>
							<div className='flex space-x-2 justify-evenly'>
								<div className='flex flex-col'>
									<span className='sans text-sm text-dark dark:text-light/80'>First Name</span>
									<input
										type='text'
										value={firstName}
										onChange={(e) => setFirstName(e.target.value)}
										className='select-none w-full dark:bg-light/10 bg-dark/10 rounded-md text-dark placeholder:text-dark dark:text-light/70 dark:placeholder:text-light/50 py-1 px-2 sans'></input>
								</div>
								<div className='flex flex-col'>
									<span className='sans text-sm text-dark dark:text-light/80'>Last Name</span>
									<input
										type='text'
										value={lastName}
										onChange={(e) => setLastName(e.target.value)}
										className='select-none w-full dark:bg-light/10 bg-dark/10 rounded-md text-dark placeholder:text-dark dark:text-light/70 dark:placeholder:text-light/50 py-1 px-2 sans'></input>
								</div>
							</div>
							<div className='flex flex-col'>
								<span className='sans text-sm text-dark dark:text-light/80 '>Email</span>
								<input
									type='email'
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									className='select-none dark:bg-light/10 bg-dark/10 rounded-md text-dark placeholder:text-dark dark:text-light/70 dark:placeholder:text-light/50 py-1 px-2 sans'></input>
							</div>
							<div className='flex flex-col'>
								<span className='sans text-sm text-dark dark:text-light/80'>Phone Number</span>
								<input
									type='tel'
									value={phoneNumber}
									onChange={(e) => setPhoneNumber(e.target.value)}
									className='select-none dark:bg-light/10 bg-dark/10 rounded-md text-dark placeholder:text-dark dark:text-light/70 dark:placeholder:text-light/50 py-1 px-2 sans'></input>
							</div>
							<div className='flex flex-col'>
								<span className='sans text-sm text-dark dark:text-light/80'>Password</span>
								<input
									type='password'
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									className='select-none dark:bg-light/10 bg-dark/10 rounded-md text-dark placeholder:text-dark dark:text-light/70 dark:placeholder:text-light/50 py-1 px-2 sans'></input>
							</div>
						</div>
						{errorMsg != '' && (
							<div className='outline outline-2 max-w-[200px] text-center rounded-md outline-red-400 text-dark dark:text-light/70 xbold p-1 flex items-center justify-center sans text-xs'>
								{errorMsg.toUpperCase()}
							</div>
						)}
						<button
							type='submit'
							className='md:hover:opacity-50 active:scale-95 cursor-pointer xbold text-center select-none dark:bg-lightAccent bg-dark dark:text-darkAccent text-light p-1 items-center flex justify-center sans text-sm w-[40%] rounded-md'>
							CREATE ACCOUNT
						</button>
					</form>
					<div className='justify-center items-center md:justify-start flex pt-5 space-x-2 w-full border-t-2 dark:border-light/10 border-dark/10 h-fit'>
						<span className='text-sm sans text-dark dark:text-light/50'>
							Already have an account?
						</span>
						<span
							onClick={() => {
								closeModal();
								openModal('logIn');
							}}
							className='md:hover:opacity-50 cursor-pointer select-none active:scale-95 text-sm text-four sans xbold'>
							SIGN IN
						</span>
					</div>
				</div>
			</Modal>

			<Modal modalId={'logOut'}>
				<div className='flex flex-col null:space-y-12 md:space-y-4 w-full h-full justify-center items-center'>
					<div className='flex flex-col text-center'>
						<span className='serif text-xl text-dark dark:text-light/80'>Sign out?</span>
					</div>
					<form
						onSubmit={handleLogout}
						className='w-fit flex flex-col justify-center space-y-8 items-center'>
						<div className='flex flex-col w-full h-fit justify-center items-center'>
							<span className='sans xbold text-dark/70 dark:text-light/50 text-xs'>
								YOU ARE SIGNED IN AS:{' '}
							</span>

							<div className='flex space-x-1 justify-center items-center'>
								<FaUserCircle
									size={16}
									className='text-dark dark:text-light/80'
								/>
								<span className='sans text-dark dark:text-light/70 text-md'>
									{getAuth().currentUser?.email ?? ''}
								</span>
							</div>
						</div>
						{errorMsg != '' && (
							<div className='outline outline-2 max-w-[200px] text-center rounded-md outline-red-400 text-dark dark:text-light/70 xbold p-1 flex items-center justify-center sans text-xs'>
								{errorMsg.toUpperCase()}
							</div>
						)}
						<button
							type='submit'
							className='md:hover:opacity-50 active:scale-95 cursor-pointer xbold text-center select-none bg-dark dark:bg-light/70 dark:text-darkAccent text-light p-1 items-center flex justify-center sans text-sm w-[40%] rounded-md'>
							CONFIRM
						</button>
					</form>
				</div>
			</Modal>
		</>
	);
}
