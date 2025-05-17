import { createTheme, type MantineThemeOverride } from '@mantine/core';

const PRIMARY_COLOR = 'primary';
const FONT_FAMILY = 'Heebo, sans-serif';

const darkTheme: MantineThemeOverride = {
  primaryColor: PRIMARY_COLOR,
  primaryShade: 6,
  fontFamily: FONT_FAMILY,
  colors: {
    primary: [
      '#e0e7ff', '#c7d2fe', '#a5b4fc', '#818cf8', '#6366f1',
      '#4f46e5', '#4338ca', '#3730a3', '#312e81', '#1e1b4b',
    ],
    shades: [
		"#001420",
		"#022135",
		"#2e8ddb",
		"#3aa2f6",
		"#43a7f5",
		"#54b2f5",
		"#76c4f6",
		"#a6d8f8",
		"#d5ecfa",
		"#ebf7ff",
	  ],
  },
  headings: {
    fontFamily: FONT_FAMILY,
    fontWeight: '700',
  },
  defaultRadius: 'md',
};

const lightTheme: MantineThemeOverride = {
  primaryColor: PRIMARY_COLOR,
  primaryShade: 6,
  fontFamily: FONT_FAMILY,
  colors: {
    primary: [
      '#e0e7ff', '#c7d2fe', '#a5b4fc', '#818cf8', '#6366f1',
      '#4f46e5', '#4338ca', '#3730a3', '#312e81', '#1e1b4b',
    ],
    shades: [
      '#f8fafc', '#e2e8f0', '#e2e8f0', '#cbd5e1', '#94a3b8',
      '#64748b', '#475569', '#cbd5e1', '#e2e8f0', '#475569',
    ],
  },
  headings: {
    fontFamily: FONT_FAMILY,
    fontWeight: '700',
  },
  defaultRadius: 'md',
};

export const theme = createTheme(
  window.matchMedia('(prefers-color-scheme: dark)').matches ? darkTheme : lightTheme
);
