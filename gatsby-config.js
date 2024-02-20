module.exports = {
	siteMetadata: {
		title: 'Positive Professionals',
		description:
			'Unlock your full potential with our expert coaching services. At Positive Professionals, we specialize in empowering individuals to overcome life and work challenges, fostering personal growth and professional development. Our tailored coaching programs are designed to help you identify and surpass obstacles, achieve your goals, and enhance overall well-being. Whether you are navigating career transitions, seeking personal fulfillment, or aiming to improve leadership skills, our experienced coaches provide the support and strategies you need to thrive. Join us and start your journey towards a more fulfilling and successful life.',
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		{
			resolve: 'gatsby-plugin-sass',
			options: {
				sassOptions: {
					indentedSyntax: true,
				},
			},
		},

		{
			// keep as first gatsby-source-filesystem plugin for gatsby image support
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `${__dirname}/static/img`,
				name: 'uploads',
			},
		},
		{
			// keep as first gatsby-source-filesystem plugin for gatsby image support
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `${__dirname}/static/`,
				name: 'static',
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `${__dirname}/src/pages`,
				name: 'pages',
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `${__dirname}/src/img`,
				name: 'images',
			},
		},
		{
			resolve: 'gatsby-plugin-netlify-cms-paths',
			options: {},
		},
		`gatsby-plugin-image`,
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		{
			resolve: 'gatsby-transformer-remark',
			options: {
				plugins: [
					{
						resolve: 'gatsby-remark-relative-images',
						options: {
							name: 'uploads',
						},
					},
					{
						resolve: 'gatsby-remark-images',
						options: {
							// It's important to specify the maxWidth (in pixels) of
							// the content container as this plugin uses this as the
							// base for generating different widths of each image.
							maxWidth: 2048,
						},
					},
					{
						resolve: 'gatsby-remark-copy-linked-files',
						options: {
							destinationDir: 'static',
						},
					},
				],
			},
		},
		{
			resolve: 'gatsby-plugin-netlify-cms',
			options: {
				modulePath: `${__dirname}/src/cms/cms.js`,
			},
		},
		{
			resolve: 'gatsby-plugin-anchor-links',
			options: {
				offset: -100,
			},
		},
		{
			resolve: 'gatsby-plugin-firebase-v9.0',
			options: {
				credentials: {
					apiKey: 'AIzaSyAj9KnoTmGWLpl5e2c6PahUxpGopTT9q60',
					authDomain: 'positive-professionals.firebaseapp.com',
					projectId: 'positive-professionals',
					storageBucket: 'positive-professionals.appspot.com',
					messagingSenderId: '133426930081',
					appId: '1:133426930081:web:ae5abd1142659dcd08abe0',
					measurementId: 'G-Z5Y6KG58SK',
				},
			},
		},

		{
			resolve: 'gatsby-plugin-purgecss', // purges all unused/unreferenced css rules
			options: {
				develop: true, // Activates purging in npm run develop
				purgeOnly: ['/all.sass'], // applies purging only on the bulma css file
			},
		}, // must be after other CSS plugins
		'gatsby-plugin-netlify', // make sure to keep it last in the array
	],
};
