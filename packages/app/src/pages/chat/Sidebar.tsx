import React from 'react';
import { Box, useMantineTheme } from '@mantine/core';

const Sidebar: React.FC = () => {
  const theme = useMantineTheme();
  return (
    <Box
      w={50}
      h="100%"
      style={{
        background: theme.colors.sidebar[7],
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
      }}
    >
      {/* Sidebar content goes here */}
    </Box>
  );
};

export default Sidebar; 