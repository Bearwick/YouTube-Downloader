import React, { useState } from 'react';
import {
	Box,
	TextField,
	Button,
	InputAdornment,
	IconButton,
} from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

const InputFieldURL = () => {
	const [inputValue, setInputValue] = useState('');

	const handleClear = () => {
		setInputValue('');
	};

	return (
		<Box
			className='flex flex-col sm:flex-row gap-2'
			sx={{
				width: 700,
				maxWidth: '70%',
			}}
		>
			<TextField
				className='w-full sm:w-4/5'
				fullWidth
				label='Enter YouTube URL'
				variant='outlined'
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
				slotProps={{
					input: {
						endAdornment: (
							<InputAdornment position='end'>
								{inputValue && (
									<IconButton onClick={handleClear} edge='end'>
										<ClearIcon />
									</IconButton>
								)}
							</InputAdornment>
						),
					},
				}}
				sx={{
					'& .MuiOutlinedInput-root': {
						color: (theme) => theme.palette.text.primary,
						'& fieldset': {
							borderColor: (theme) => theme.palette.secondary.main,
						},
						'&:hover fieldset': {
							borderColor: (theme) => theme.palette.secondary.main,
						},
						'&.Mui-focused fieldset': {
							borderColor: (theme) => theme.palette.secondary.main,
						},
					},
					'& .MuiInputLabel-root': {
						color: (theme) => theme.palette.text.primary,
						'&.Mui-focused': {
							color: (theme) => theme.palette.text.primary,
						},
					},
				}}
			/>
			<Button
				className='min-w-24 sm:w-1/5 border-2'
				sx={{
					backgroundColor: 'secondary.main',
					color: 'text.secondary',
				}}
				variant='contained'
			>
				Download
			</Button>
		</Box>
	);
};

export default InputFieldURL;
