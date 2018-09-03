import { createMuiTheme } from '@material-ui/core/styles'

export const theme = createMuiTheme({
	palette: {
		primary: {
			light: 'red',
			main: 'red',
			dark: 'red',
			contrastText: 'red',
		},
		secondary: {
			light: 'red',
			main: 'red',
			dark: 'red',
			contrastText: 'red',
		},
		error: {
			light: 'red',
			main: 'red',
			dark: 'red',
			contrastText: 'red',
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