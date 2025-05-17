import React from 'react';
import { Box, Stack, Divider, ActionIcon, useMantineTheme } from '@mantine/core';
import { IconMessages, IconHistory, IconMessagePlus, IconSettings, IconUser } from '@tabler/icons-react';
import { openFullScreenDrawer, closeFullScreenDrawer } from '../../utils/openFullScreenDrawer';
import SettingsPage from '../settings/settings';
import ProfilePage from '../profile/profile';

const Sidebar: React.FC = () => {
  const theme = useMantineTheme();
  return (
    <Box
      w={50}
      h="100%"
      style={{
        background: theme.colors.shades[1],
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 16,
        paddingBottom: 16,
        borderInlineEnd: `1px solid ${theme.colors.shades[0]}1A`, // 10% opacity in hex
      }}
    >
      {/* Top icons */}
      <Stack gap={16} align="center">
        <ActionIcon size="lg" variant="subtle" color={theme.colors.shades[9]} onClick={closeFullScreenDrawer}>
          <IconMessages size={24} />
        </ActionIcon>
        <ActionIcon size="lg" variant="subtle" color={theme.colors.shades[9]} onClick={closeFullScreenDrawer}>
          <IconHistory size={24} />
        </ActionIcon>
      </Stack>
      {/* Bottom icons */}
      <Stack gap={16} align="center">
        <ActionIcon size="lg" variant="subtle" color={theme.colors.shades[9]} onClick={closeFullScreenDrawer}>
          <IconMessagePlus size={24} />
        </ActionIcon>
        <Divider my={4} w={30} mx="auto" style={{ background: theme.colors.shades[0], opacity: 0.5 }} />
        <ActionIcon size="lg" variant="subtle" color={theme.colors.shades[9]} onClick={() => openFullScreenDrawer(<SettingsPage />)}>
          <IconSettings size={24} />
        </ActionIcon>
        <ActionIcon size="lg" variant="subtle" color={theme.colors.shades[9]} onClick={() => openFullScreenDrawer(<ProfilePage />)}>
          <IconUser size={24} />
        </ActionIcon>
      </Stack>
    </Box>
  );
};

export default Sidebar; 