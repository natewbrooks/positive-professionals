import React from 'react';
import { LocationProvider } from '@reach/router';

export const wrapRootElement = ({ element }) => {
	console.log(SuperTokensWrapper);

	return <LocationProvider>{element}</LocationProvider>;
};
