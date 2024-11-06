import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
	palette: {
		mode: 'light',
		primary: {
			main: '#f7f7f7',
		},
		secondary: {
			main: '#1C1E22',
		},
		background: {
			default: '#eeeeee',
			paper: '#eeeeee',
		},
		text: {
			primary: '#393e46',
			secondary: '#f7f7f7',
		},
	},
});

export const darkTheme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: '#393e46',
		},
		secondary: {
			main: '#1C1E22',
		},
		background: {
			default: '#121212',
			paper: '#1e1e1e',
		},
		text: {
			primary: '#f7f7f7',
			secondary: '#f7f7f7',
		},
	},
});
