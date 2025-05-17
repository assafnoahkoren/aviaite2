import React from 'react';
import { Box, Text, ScrollArea, Group, useMantineTheme } from '@mantine/core';
import { observer } from 'mobx-react-lite';
import { chatStore } from './ChatStore';
import UserMessage from './UserMessage';
import BotMessage from './BotMessage';

const bubbleStyles = (isUser: boolean, theme: any) => ({
  alignSelf: isUser ? 'flex-end' : 'flex-start',
  background: isUser ? theme.colors.shades[1] : theme.colors.shades[8],
  color: isUser ? theme.colors.shades[9] : theme.colors.shades[1],
  padding: '10px 16px',
  borderRadius: 18,
  borderTopRightRadius: isUser ? 4 : 18,
  borderTopLeftRadius: isUser ? 18 : 4,
  maxWidth: '70%',
  marginBottom: 8,
  boxShadow: '0 1px 2px rgba(0,0,0,0.04)',
  fontSize: 16,
  wordBreak: 'break-word' as 'break-word',
});

const MessagesList: React.FC = observer(() => {
  const theme = useMantineTheme();
  return (
    <Box p={0} style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <ScrollArea style={{ flex: 1, height: '100%' }}>
        <Box p={16} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {chatStore.messages.length === 0 && (
            <Text c="dimmed" style={{ textAlign: 'center' }}>No messages yet</Text>
          )}
          {chatStore.messages.map((msg, idx) =>
            msg.type === 'user' ? (
              <UserMessage key={idx} value={msg.value} createdOn={msg.createdOn} />
            ) : (
              <BotMessage key={idx} value={msg.value} createdOn={msg.createdOn} />
            )
          )}
        </Box>
      </ScrollArea>
    </Box>
  );
});

export default MessagesList; 