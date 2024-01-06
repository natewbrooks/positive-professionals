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
				// primary: '#34d399',
				// secondary: '#fdba74',
				// tertiary: '#0ea5e9',
				// four: '#a855f7',
				primary: '#22d3ee',
				secondary: '#8b5cf6',
				tertiary: '#0ea5e9',
				four: '#6366f1',
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
				billboard: '64px',
			},
			backgroundImage: (theme) => ({
				'hard-stop-gradient': `linear-gradient(
          to right,
          ${theme('colors.secondary')} 25%,
          ${theme('colors.primary')} 25% 50%,
          ${theme('colors.tertiary')} 50% 75%,
          ${theme('colors.four')} 75%
        )`,
				'custom-gradient': `linear-gradient(to right,  ${theme('colors.secondary')}, ${theme(
					'colors.primary'
				)} 25%, ${theme('colors.tertiary')} 50%, ${theme('colors.four')} 75%)`,
			}),
		},
	},
	plugins: [],
};
