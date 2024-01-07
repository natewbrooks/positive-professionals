import { initializeApp } from 'firebase/app';

const firebaseConfig = {
	apiKey: 'AIzaSyAj9KnoTmGWLpl5e2c6PahUxpGopTT9q60',
	authDomain: 'positive-professionals.firebaseapp.com',
	projectId: 'positive-professionals',
	storageBucket: 'positive-professionals.appspot.com',
	messagingSenderId: '133426930081',
	appId: '1:133426930081:web:ae5abd1142659dcd08abe0',
	measurementId: 'G-Z5Y6KG58SK',
};

const app = initializeApp(firebaseConfig);

export { app };
