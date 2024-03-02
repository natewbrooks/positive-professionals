import React from 'react';
import PropTypes from 'prop-types';
import { VideoPostTemplate } from '../../templates/video-post';

const VideoPostPreview = ({ entry, widgetFor }) => {
	const title = entry.getIn(['data', 'title']);
	const description = entry.getIn(['data', 'description']);
	const date = entry.getIn(['data', 'date']);

	return (
		<VideoPostTemplate
			content={widgetFor('body')}
			description={description}
			title={title}
			helmet={null} // Helmet not needed for preview
			date={date}
		/>
	);
};

VideoPostPreview.propTypes = {
	entry: PropTypes.shape({
		getIn: PropTypes.func,
	}),
	widgetFor: PropTypes.func,
};

export default VideoPostPreview;
