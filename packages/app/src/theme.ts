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
    sidebar: [
      '#022135', '#022135', '#022135', '#022135', '#022135',
      '#022135', '#022135', '#022135', '#022135', '#022135',
    ],
    dark: [
      '#022135',
      '#f0f4ff', '#dbeafe', '#a5b4fc', '#6366f1', '#3d48b7',
      '#1a1d7a', '#172c73', '#0e1a2c', '#0e1c50', '#0a1844',
    ],
    light: [
      '#f8fafc', '#f1f5f9', '#e2e8f0', '#cbd5e1', '#94a3b8',
      '#64748b', '#475569', '#334155', '#1e293b', '#0f172a',
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
    sidebar: [
      '#022135', '#022135', '#022135', '#022135', '#022135',
      '#022135', '#022135', '#022135', '#022135', '#022135',
    ],
    dark: [
      '#022135',
      '#0a1844', '#182cb0', '#1f32c4', '#2c40dc', '#3a4bdd',
      '#5362e1', '#7a87e9', '#a9b1f1', '#d5dafb', '#f0f4ff',
    ],
    light: [
      '#f8fafc', '#f1f5f9', '#e2e8f0', '#cbd5e1', '#94a3b8',
      '#64748b', '#475569', '#334155', '#1e293b', '#0f172a',
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
