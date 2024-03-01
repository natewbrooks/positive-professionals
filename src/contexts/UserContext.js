import React, { createContext, useContext, useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const UserContext = createContext();

export function useUser() {
	return useContext(UserContext);
}

export const UserProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [userData, setUserData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const auth = getAuth();
		const db = getFirestore();

		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
			if (currentUser) {
				const fetchUserData = async () => {
					try {
						const userDocRef = doc(db, 'users', currentUser.uid);
						const userDocSnap = await getDoc(userDocRef);

						if (userDocSnap.exists()) {
							setUserData(userDocSnap.data());
						} else {
							setError('No user data found');
						}
					} catch (err) {
						setError(err.message);
					} finally {
						setLoading(false);
					}
				};

				fetchUserData();
			} else {
				// Handle case when no user is signed in
				setLoading(false);
				setUser(null);
				setUserData(null);
			}
		});

		return () => unsubscribe();
	}, []);

	return (
		<UserContext.Provider value={{ user, userData, loading, error }}>
			{children}
		</UserContext.Provider>
	);
};
