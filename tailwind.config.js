/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./**/*.{html,js}'],
	theme: {
		extend: {
			fontFamily: {
				roboto: ["'Roboto'", 'sans-serif'],
				poppins: ["'Poppins'", 'sans-serif'],
			},
			colors: {
				cyan: '#2da9a9',
				lemon: '#d7e26a',
			},
		},
	},
	plugins: [],
};
