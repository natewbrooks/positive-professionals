import React from 'react';
import { LocationProvider } from '@reach/router';
import { ModalProvider } from './src/components/ModalContext';

export const wrapRootElement = ({ element }) => {
	return (
		<LocationProvider>
			<ModalProvider>{element}</ModalProvider>
		</LocationProvider>
	);
};
