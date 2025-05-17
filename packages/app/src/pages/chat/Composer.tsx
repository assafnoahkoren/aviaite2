import React, { useState } from 'react';
import { Box, TextInput, ActionIcon, Group } from '@mantine/core';
import { IconSend } from '@tabler/icons-react';
import { useMantineTheme } from '@mantine/core';

const Composer: React.FC = () => {
  const [value, setValue] = useState('');
  const theme = useMantineTheme();

  const handleSend = () => {
    if (value.trim()) {
      // TODO: send message logic
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
        />
        <ActionIcon
          size={40}
          radius="xl"
          variant="filled"
          color="primary"
          onClick={handleSend}
          aria-label="Send"
        >
          <IconSend size={22} />
        </ActionIcon>
      </Group>
    </Box>
  );
};

export default Composer; 