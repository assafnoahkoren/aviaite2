import React, { useState } from 'react';
import { Box, TextInput, ActionIcon, Group } from '@mantine/core';
import { IconSend } from '@tabler/icons-react';
import { useMantineTheme } from '@mantine/core';
import { chatStore } from './ChatStore';
import { observer } from 'mobx-react-lite';

const Composer: React.FC = observer(() => {
  const [value, setValue] = useState('');
  const theme = useMantineTheme();

  const handleSend = () => {
    if (value.trim()) {
      chatStore.addMessage({ type: 'user', value: value.trim() });
      setValue('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <Box p={16}>
      <Group gap={8} align="end">
        <TextInput
          value={value}
          onChange={e => setValue(e.currentTarget.value)}
          onKeyDown={handleKeyDown}
          placeholder="Send a message"
          radius="xl"
          size="md"
          style={{ flex: 1}}
          styles={{ input: { background: `${theme.colors.shades[9]}1A`, border: 'none', borderRadius: 9999 } }}
          disabled={chatStore.isLoading}
        />
        <ActionIcon
          size={40}
          radius="xl"
          variant="filled"
          color="primary"
          onClick={handleSend}
          aria-label="Send"
          disabled={chatStore.isLoading}
        >
          <IconSend size={22} />
        </ActionIcon>
      </Group>
    </Box>
  );
});

export default Composer; 