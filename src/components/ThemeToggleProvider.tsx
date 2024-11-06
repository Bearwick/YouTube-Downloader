import {
	useState,
	createContext,
	useContext,
	ReactNode,
	useEffect,
} from 'react';
import { darkTheme, lightTheme } from '../Themes';
import { ThemeProvider, CssBaseline } from '@mui/material';

// Create a context for the theme mode
const ThemeModeContext = createContext({
	themeMode: 'system', // "light" | "dark" | "system"
	toggleTheme: () => {},
	setThemeMode: (mode: string) => {},
});

// Custom hook to use the ThemeModeContext
export const useThemeMode = () => useContext(ThemeModeContext);

const ThemeToggleProvider = ({ children }: { children: ReactNode }) => {
	// Load theme from localStorage or default to 'system'
	const getInitialThemeMode = () => {
		const savedTheme = localStorage.getItem('themeMode');
		return savedTheme || 'system';
	};

	const [themeMode, setThemeMode] = useState(getInitialThemeMode);
	const [isDarkMode, setIsDarkMode] = useState(
		themeMode === 'dark' ||
			(themeMode === 'system' &&
				window.matchMedia('(prefers-color-scheme: dark)').matches)
	);

	// Save theme mode to localStorage whenever it changes
	useEffect(() => {
		localStorage.setItem('themeMode', themeMode);
	}, [themeMode]);

	// Update theme based on themeMode
	useEffect(() => {
		if (themeMode === 'system') {
			const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
			const handleChange = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
			setIsDarkMode(mediaQuery.matches);
			mediaQuery.addEventListener('change', handleChange);

			// Cleanup listener on unmount
			return () => mediaQuery.removeEventListener('change', handleChange);
		} else {
			setIsDarkMode(themeMode === 'dark');
		}
	}, [themeMode]);

	return (
		<ThemeModeContext.Provider
			value={{ themeMode, toggleTheme: () => setThemeMode, setThemeMode }}
		>
			<ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
				<CssBaseline />
				{children}
			</ThemeProvider>
		</ThemeModeContext.Provider>
	);
};

export default ThemeToggleProvider;
