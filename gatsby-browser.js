import React from 'react';
import { LocationProvider } from '@reach/router';
import SuperTokens, { SuperTokensWrapper } from 'supertokens-auth-react';
import ThirdPartyEmailPassword, {
	Google,
} from 'supertokens-auth-react/recipe/thirdpartyemailpassword';
import Session from 'supertokens-auth-react/recipe/session';

SuperTokens.init({
	appInfo: {
		appName: 'Positive Professionals',
		apiDomain: 'http://localhost:8000/api/',
		websiteDomain: 'http://localhost:8000',
		apiBasePath: '/auth',
		websiteBasePath: '/login',
	},
	recipeList: [
		ThirdPartyEmailPassword.init({
			signInAndUpFeature: {
				providers: [Google.init()],
			},
		}),
		Session.init(),
	],
});

export const wrapRootElement = ({ element }) => {
	console.log(SuperTokensWrapper);

	return (
		<SuperTokensWrapper>
			<LocationProvider>{element}</LocationProvider>
		</SuperTokensWrapper>
	);
};
