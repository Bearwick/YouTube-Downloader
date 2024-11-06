import { ToggleButtonGroup, ToggleButton } from '@mui/material';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import { useThemeMode } from './ThemeToggleProvider';

const ThemeToggleSwitch = () => {
	const { themeMode, setThemeMode } = useThemeMode();

	// Handle theme mode change
	const handleThemeChange = (_: any, newThemeMode: string | null) => {
		if (newThemeMode !== null) {
			setThemeMode(newThemeMode);
		}
	};

	return (
		<ToggleButtonGroup
			value={themeMode}
			exclusive
			onChange={handleThemeChange}
			className='h-12 mt-4'
		>
			<ToggleButton value='light' key='light' aria-label='Light Mode'>
				<WbSunnyIcon />
			</ToggleButton>
			<ToggleButton value='system' key='system' aria-label='System Default'>
				<DesktopWindowsIcon />
			</ToggleButton>
			<ToggleButton value='dark' key='dark' aria-label='Dark Mode'>
				<NightsStayIcon />
			</ToggleButton>
		</ToggleButtonGroup>
	);
};

export default ThemeToggleSwitch;
