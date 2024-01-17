import React from 'react';
import { LocationProvider } from '@reach/router';

export const wrapRootElement = ({ element }) => {
	return <LocationProvider>{element}</LocationProvider>;
};
