/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js}'],
	theme: {
		screens: {
			xs: '0px',
			sm: '479px',
			md: '860px',
			lg: '1024px',
			xl: '1440px',
			xxl: '1920px',
			xxxl: '2400px',
		},
		extend: {
			colors: {
				primary: '#34d399',
				secondary: '#fdba74',
				tertiary: '#0ea5e9',
				four: '#a855f7',
				light: '#f2f2f2',
				dark: '#121212',
				darkAccent: '#27272a',
			},
			fontSize: {
				xs: '12px',
				sm: '14px',
				md: '16px',
				lg: '20px',
				xl: '28px',
				xxl: '36px',
				xxxl: '48px',
			},
		},
	},
	plugins: [],
};
