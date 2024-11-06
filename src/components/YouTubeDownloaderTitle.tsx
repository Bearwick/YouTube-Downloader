import React from 'react';
import youtube_logo from '../assets/youtube_logo.png';

const YouTubeDownloaderTitle: React.FC = () => {
	return (
		<div className='flex flex-row items-center justify-center w-3/5 sm:w-2/5 h-full gap-4'>
			<img
				className='w-2/5 sm:w-1/5 sm:min-w-40'
				src={youtube_logo}
				alt='YouTube logo'
			/>
			<div className='flex flex-col items-center text-left '>
				<h1 className='text-3xl sm:text-5xl w-full '>YouTube</h1>
				<h1 className='text-2xl sm:text-4xl w-full'>Downloader</h1>
			</div>
		</div>
	);
};

export default YouTubeDownloaderTitle;
