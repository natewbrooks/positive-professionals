const { transform } = require('lodash');

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js}'],
	theme: {
		screens: {
			null: '0px',
			xs: '200px',
			mobile: '410px',
			sm: '580px',
			md: '860px',
			lg: '1024px',
			xl: '1440px',
			xxl: '1920px',
			xxxl: '2400px',
		},
		extend: {
			animation: {
				'spin-slow': 'spin 3s linear infinite',
			},
			keyframes: {
				scroll: {
					'0%': { transform: 'translateX(0);' },
					'100%': { transform: 'translateX()' },
				},
			},
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
				lightAccent: '#dbdbdb',
				dark: '#121212',
				darkAccent: '#292929',
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
		backgroundImage: {
			hero: "url('../img/coral-reef-bg.webp')",
		},
	},
	plugins: [],
};
