/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				bgcolors: {
					base: '#FFFFFF',
					header: '#2C3944',
					footer: '#2E7D32',
					elements: '#2C3944',
					dedicatedElements: '#2196F3',
				},
				icons: {
					base: '#2196F3',
				},
				fontcolors: {
					white: '#FFFFFF',
					black: '#000000',
					blue: ''
				},
			},
			fontFamily: {
				base: 'Helvetica Neue, Helvetica, Arial, sans-serif',
				menubar: 'OpenSans-Regular, Tahoma, sans-serif;',
				newsname: 'Roboto, sans-serif;',
			},
		},
	},
	plugins: [],
}
