const themeColors = {
	maintheme: {
		colors: {
			main: '#FFFFFF',
			header: '#2C3944',
			footer: '#2E7D32',
			elements: '#2C3944',
			dedicatedElements:'#2196F3'
			
		},
	},
	whiteorblacktheme: {
		colors: {
			main: '#FFFFFF',
			elements: '#000000',
		},
		fontscolor: {
			elements: '#FFFFFF',
		},
	},
	blackorwhitetheme: {
		colors: {
			main: '#000000',
			elements: '#FFFFFF',
		},
		fontscolor: {
			elements: '#000000',
		},
	},
	yellowtheme: {
		colors: {
			main: '#FFFFFF',
			elements: '#FFFF00',
		},
		fontscolor: {
			elements: '#FFFFFF',
		},
	},
	bluetheme: {
		colors: {
			main: '#9FD7FF',
			elements: '#143C5A',
			dedicatedElements:'#9FD7FF'
		},
		fontscolor: {
			elements: '#9FD7FF',
			dedicatedElements:'#143C5A'
		},
	},
}

const fontFamily = {
	main: 'Helvetica Neue, Helvetica, Arial, sans-serif',
	menubar: 'OpenSans-Regular, Tahoma, sans-serif;',
	newsname: 'Roboto, sans-serif;',
}

export default { themeColors, fontFamily }