import { createMuiTheme } from '@material-ui/core/styles'

export const theme = createMuiTheme({
	palette: {
		primary: {
			light: '#fff',
			main: '#fff',
			dark: '#fff',
			contrastText: '#fff',
		},
		secondary: {
			light: '#fff',
			main: '#fff',
			dark: '#fff',
			contrastText: '#fff',
		},
		error: {
			light: '#fff',
			main: '#fff',
			dark: '#fff',
			contrastText: '#fff',
		},
		typography: {
			// Use the system font instead of the default Roboto font.
			fontFamily: [
				'-apple-system',
				'BlinkMacSystemFont',
				'"Segoe UI"',
				'Roboto',
				'"Helvetica Neue"',
				'Arial',
				'sans-serif',
				'"Apple Color Emoji"',
				'"Segoe UI Emoji"',
				'"Segoe UI Symbol"',
			].join(','),
		},
	},
})