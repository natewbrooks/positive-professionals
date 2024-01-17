import React from 'react';
import { ThirdPartyEmailPasswordPreBuiltUI } from 'supertokens-auth-react/recipe/thirdpartyemailpassword/prebuiltui';
import { canHandleRoute, getRoutingComponent } from 'supertokens-auth-react/ui';

const Login = () => {
	if (canHandleRoute([ThirdPartyEmailPasswordPreBuiltUI])) {
		return getRoutingComponent([ThirdPartyEmailPasswordPreBuiltUI]);
	}
	return <section>hi</section>;
};

export default Login;
