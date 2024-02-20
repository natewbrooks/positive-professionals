import React from 'react';
import { LocationProvider } from '@reach/router';
import { ModalProvider } from './src/contexts/ModalContext';
import { UserProvider } from './src/contexts/UserContext';

export const wrapRootElement = ({ element }) => {
	return (
		<LocationProvider>
			<UserProvider>
				<ModalProvider>{element}</ModalProvider>
			</UserProvider>
		</LocationProvider>
	);
};
