import { useState, useEffect } from 'react';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const useUserData = () => {
	const [userData, setUserData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const db = getFirestore();
	const auth = getAuth();

	useEffect(() => {
		let USER = auth.currentUser;

		const fetchUserData = async () => {
			try {
				if (USER) {
					const userDocRef = doc(db, 'users', USER.uid);
					const userDocSnap = await getDoc(userDocRef);

					if (userDocSnap.exists()) {
						setUserData(userDocSnap.data());
					} else {
						console.log('No user data found in Firestore!');
						setError('No user data found');
					}
				} else {
					console.log('No user is signed in.');
					setError('User not signed in');
				}
			} catch (err) {
				console.error('Error fetching user data: ', err);
				setError(err.message);
			} finally {
				setLoading(false);
			}
		};

		const unsubscribe = auth.onAuthStateChanged((user) => {
			if (user) {
				USER = auth.currentUser;
			} else {
				console.log('No user is signed in.');
			}
		});

		fetchUserData();

		return () => unsubscribe();
	}, [auth, db, auth.currentUser]);

	useEffect(() => {}, []);

	return { userData, loading, error };
};

export default useUserData;
