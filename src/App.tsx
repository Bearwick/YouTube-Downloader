import React from 'react';
import './App.css';
import YouTubeDownloaderTitle from './components/YouTubeDownloaderTitle';
import InputFieldURL from './components/InputFieldURL';
import ThemeToggleProvider from './components/ThemeToggleProvider';
import ThemeToggleSwitch from './components/ThemeToggleSwitch';
import { Box } from '@mui/material';

function App() {
	return (
		<ThemeToggleProvider>
			<Box
				className='App flex flex-col text-center min-h-dvh items-center gap-10'
				sx={{ backgroundColor: 'primary.main' }}
			>
				<Box className='h-20 sm:h-40 w-full flex justify-end pr-4'>
					<ThemeToggleSwitch />
				</Box>
				<YouTubeDownloaderTitle />
				<InputFieldURL />
			</Box>
		</ThemeToggleProvider>
	);
}

export default App;
