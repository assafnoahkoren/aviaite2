import { createTheme, type MantineThemeOverride } from '@mantine/core';

const darkTheme: MantineThemeOverride = {
  colors: {
	dark: [
		"#f0f4ff",
		"#3d48b7",
		"#f0f4ff50",
		"#1e2d87",
		"#3d48b7",
		"#1a1d7a",
		"#172c73",
		"#0e1a2c",
		"#0e1c50",
		"#0a1844" 
	  ]
  }
}; 

const lightTheme: MantineThemeOverride = {
	colors: {
		dark: [
			"#0a1844",
			"#d5dafb",
			"#a9b1f1",
			"#7a87e9",
			"#5362e1",
			"#3a4bdd",
			"#2c40dc",
			"#1f32c4",
			"#182cb0",
			"#0a259c"
	
		]
	}
};
export const theme = createTheme(window.matchMedia('(prefers-color-scheme: dark)').matches ? darkTheme : lightTheme);
