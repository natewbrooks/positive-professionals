import React from 'react';
import PropTypes from 'prop-types';
import { IndexPageTemplate } from '../../templates/index-page';
import LocationProvider from '@reach/router';

const IndexPagePreview = ({ entry, getAsset }) => {
	const data = entry.getIn(['data']).toJS();

	if (data) {
		return (
			<LocationProvider>
				<IndexPageTemplate
					hero={data.hero}
					whoWeAre={data.whoWeAre}
					team={data.team}
					coreValues={data.coreValues}
					workedWith={data.workedWith}
					services={data.services}
					getStarted={data.getStarted}
					resources={data.resources}
				/>
			</LocationProvider>
		);
	} else {
		return <div>Loading...</div>;
	}
};

IndexPagePreview.propTypes = {
	entry: PropTypes.shape({
		getIn: PropTypes.func,
	}),
	getAsset: PropTypes.func,
};

export default IndexPagePreview;
