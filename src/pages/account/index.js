import React from 'react';
import Layout from '../../components/Layout';
import { Link } from 'gatsby';
import { useAuth0 } from '@auth0/auth0-react';
/* 👇 Import the withAuthenticationRequired HOC 👇 */
import { withAuthenticationRequired } from '@auth0/auth0-react';

function Account() {
	const { user } = useAuth0();
	return (
		<Layout>
			<nav>
				{/* 👇 Link to homepage */} 👇
				<Link to='/'>Home</Link>
				{/* 👇 Display users email */} 👇
				<p>Email: {user.email}</p>
			</nav>
		</Layout>
	);
}

export default withAuthenticationRequired(Account);
