import React from 'react';
import { Box, Flex } from '@mantine/core';
import Sidebar from './Sidebar';

const ChatPage: React.FC = () => {
  return (
    <Flex style={{ height: '100dvh' }}>
      <Sidebar />
      <Box style={{ flex: 1 }}>
        {/* Main chat content goes here */}
      </Box>
    </Flex>
  );
};

export default ChatPage;
