/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js}'],
	theme: {
		extend: {
			colors: {
				primary: '#34d399',
				secondary: '#fdba74',
				tertiary: '#0ea5e9',
				four: '#a855f7',
				light: '#fafaf9',
				dark: '#292524',
			},
			fontSize: {
				xs: '12px',
				sm: '14px',
				md: '16px',
				lg: '20px',
				xl: '24px',
				zl: '30px',
			},
		},
	},
	plugins: [],
};
