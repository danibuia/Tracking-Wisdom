import { Theme, ThemeOptions, createTheme } from '@mui/material';

const lightTheme = (common: Omit<ThemeOptions, 'palette'>): Theme =>
	createTheme({
		...common,
		palette: {
			mode: 'light',
			primary: {
				main: '#3e5c76',
			},
			secondary: {
				main: '#0E3666',
			},
			common: {
				black: '#3e5c76',
				white: '#f0ebd8'
			},
			background: {
				default: '#FFFFFF',
				paper: '#F6FAF8',
			},
			text: {
				primary: '#3e5c76',
				secondary: '#696969',
			},
		},
	});

export default lightTheme;
