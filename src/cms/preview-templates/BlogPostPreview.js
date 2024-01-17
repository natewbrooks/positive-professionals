import React from 'react';
import PropTypes from 'prop-types';
import { BlogPostTemplate } from '../../templates/blog-post';

const BlogPostPreview = ({ entry, widgetFor }) => {
	const tags = entry.getIn(['data', 'tags']);
	const title = entry.getIn(['data', 'title']);
	const description = entry.getIn(['data', 'description']);
	const authors = entry.getIn(['data', 'authors']);
	// Assuming you have fields for date, featuredpost, and image in your CMS
	const date = entry.getIn(['data', 'date']);
	const featuredpost = entry.getIn(['data', 'featuredpost']);
	const image = entry.getIn(['data', 'image']);

	return (
		<BlogPostTemplate
			content={widgetFor('body')}
			description={description}
			tags={tags && tags.toJS()}
			title={title}
			helmet={null} // Since this is a preview, Helmet is not needed
			date={date}
			featuredpost={featuredpost}
			image={image}
			authors={authors}
			body={widgetFor('body')} // This might need adjustment based on how you handle body content
		/>
	);
};

BlogPostPreview.propTypes = {
	entry: PropTypes.shape({
		getIn: PropTypes.func,
	}),
	widgetFor: PropTypes.func,
};

export default BlogPostPreview;
