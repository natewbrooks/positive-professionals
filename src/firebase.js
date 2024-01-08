import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
	apiKey: 'AIzaSyAj9KnoTmGWLpl5e2c6PahUxpGopTT9q60',
	authDomain: 'positive-professionals.firebaseapp.com',
	projectId: 'positive-professionals',
	storageBucket: 'positive-professionals.appspot.com',
	messagingSenderId: '133426930081',
	appId: '1:133426930081:web:ae5abd1142659dcd08abe0',
	measurementId: 'G-Z5Y6KG58SK',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// // const currentAuth = getAuth();

// // export function register(user) {
// // 	createUserWithEmailAndPassword(auth, user.email, user.password)
// // 		.then((userCredential) => {
// // 			// Handle new user
// // 			const user = userCredential.user;
// // 			console.log('! USER CREATED');
// // 		})
// // 		.catch((error) => {});
// // }

// // export function signIn(email, password) {
// // 	signInWithEmailAndPassword(auth, email, password)
// // 		.then((userCredential) => {
// // 			// Handle signed in user
// // 			const user = userCredential.user;
// // 		})
// // 		.catch((error) => {});
// // }

// // export function signOut() {
// // 	signOut(currentAuth)
// // 		.then(() => {
// // 			// Sign-out successful.
// // 			console.log('! SIGNED OUT');
// // 		})
// // 		.catch((error) => {
// // 			// An error happened.
// // 		});
// // }
