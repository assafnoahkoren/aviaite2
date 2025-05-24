import React from 'react';
import { Box, Flex, useMantineTheme } from '@mantine/core';
import Sidebar from './Sidebar';
import MessagesList from './MessagesList';
import Composer from './Composer';
// import FileViewer from './FileViewer';

const ChatPage: React.FC = () => {
  const theme = useMantineTheme();
  return (
    <Flex style={{ height: '100dvh' }}>
      <Sidebar />
      <Box style={{ flex: 1, background: theme.colors.shades[0], display: 'flex' }}>
        {/* First half */}
        <Box
          style={{
            flex: 1,
            borderInlineEnd: `2px solid ${theme.colors.shades[9]}1A`, // 10% opacity
            background: theme.colors.shades[0],
            transition: 'border-radius 0.2s',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Top section */}
          <Box style={{ flex: 1, minHeight: 0 }}>
            <MessagesList />
          </Box>
          {/* Bottom section */}
          <Box style={{ flexShrink: 0 }}>
            <Composer />
          </Box>
        </Box>
        {/* Second half */}
        {/* <Box style={{ flex: 1 }}>
          <FileViewer />
        </Box> */}
      </Box>
    </Flex>
  );
};

export default ChatPage;
