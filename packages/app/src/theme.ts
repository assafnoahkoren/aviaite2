import { createTheme, type MantineThemeOverride } from '@mantine/core';

const darkTheme: MantineThemeOverride = {
  colors: {
	dark: [
		'#ffffff', // Dark Blue
		'#0000CD', // Medium Blue
		'#ffffff50', // Blue
		'#ffffff20', // Midnight Blue
		'#ffffff20', // Navy
		'#000036', // Darker Blue
		'#000024', // Even Darker Blue
		'#000012', // Almost Black Blue
		'#00000A', // Very Dark Blue
		'#000005'  // Near Black Blue
	]
  }
}; 

const lightTheme: MantineThemeOverride = {
	colors: {
		dark: [
			'#000024', // Dark Blue
			'#0000CD', // Medium Blue
			'#ffffff50', // Blue
			'#ffffff20', // Midnight Blue
			'#ffffff20', // Navy
			'#000036', // Darker Blue
			'#e7e7ff', // Even Darker Blue
			'#000012', // Almost Black Blue
			'#00000A', // Very Dark Blue
			'#000005'  // Near Black Blue
	
		]
	}
};
export const theme = createTheme(window.matchMedia('(prefers-color-scheme: dark)').matches ? darkTheme : lightTheme);
