import { Theme, ThemeOptions, createTheme } from '@mui/material';

const darkTheme = (common: Omit<ThemeOptions, 'palette'>): Theme =>
	createTheme({
		...common,
		palette: {
			mode: 'dark',
			primary: {
				main: '#748cab',
			},
			secondary: {
				main: '#0E3666',
			},
			common: {
				black: '#3e5c76',
				white: '#f0ebd8',
			},
			background: {
				default: '#FFFFFF',
				paper: '#686868',
			},
			text: {
				primary: '#f0ebd8',
				secondary: '#686868',
			},
		},
	});

export default darkTheme;
