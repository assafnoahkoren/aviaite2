import React from 'react';
import { Box, Flex, useMantineTheme } from '@mantine/core';
import Sidebar from './Sidebar';

const ChatPage: React.FC = () => {
  const theme = useMantineTheme();
  return (
    <Flex style={{ height: '100dvh' }}>
      <Sidebar />
      <Box style={{ flex: 1, background: theme.colors.shades[0] }}>
        {/* Main chat content goes here */}
      </Box>
    </Flex>
  );
};

export default ChatPage;
