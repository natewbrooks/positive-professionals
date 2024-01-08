// firebase.js
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

let auth;

if (typeof window !== 'undefined') {
	auth = getAuth();
}

export const signIn = (email, password) => {
	if (!auth) return Promise.reject('Firebase auth not initialized');
	return signInWithEmailAndPassword(auth, email, password);
};

export const signUp = (user) => {
	if (!auth) return Promise.reject('Firebase auth not initialized');
	return createUserWithEmailAndPassword(auth, user.email, user.password);
};

// Other Firebase functionalities...
