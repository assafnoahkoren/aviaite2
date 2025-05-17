import React from 'react';
import { Box, Text, useMantineTheme } from '@mantine/core';

interface UserMessageProps {
  value: string;
  createdOn: Date;
}

const UserMessage: React.FC<UserMessageProps> = ({ value, createdOn }) => {
  const theme = useMantineTheme();
  return (
    <Box
      style={{
        alignSelf: 'flex-end',
        background: theme.colors.shades[1],
        color: theme.colors.shades[9],
        padding: '10px 16px',
        borderRadius: 18,
        borderTopRightRadius: 4,
        borderTopLeftRadius: 18,
        maxWidth: '70%',
        marginBottom: 8,
        boxShadow: '0 1px 2px rgba(0,0,0,0.04)',
        fontSize: 16,
        wordBreak: 'break-word' as 'break-word',
      }}
    >
      <Text size="sm" style={{ marginBottom: 2, opacity: 0.7, fontWeight: 500 }}>
        You
      </Text>
      <Text size="md">{value}</Text>
      <Text size="xs" c={theme.colors.shades[9]} opacity={0.7} style={{ marginTop: 4, textAlign: 'right' }}>
        {createdOn instanceof Date
          ? createdOn.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          : ''}
      </Text>
    </Box>
  );
};

export default UserMessage; 