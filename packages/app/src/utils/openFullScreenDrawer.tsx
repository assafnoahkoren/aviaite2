import React from 'react';
import type { ReactNode } from 'react';
import { Drawer, Box, Text, useMantineTheme } from '@mantine/core';
import { IconX } from '@tabler/icons-react';

let drawerInstance: ((content: ReactNode) => void) | null = null;
let closeDrawerInstance: (() => void) | null = null;
let isDrawerOpen = false;

export function DrawerManager() {
  const [opened, setOpened] = React.useState(false);
  const [content, setContent] = React.useState<ReactNode>(null);
  const theme = useMantineTheme();

  React.useEffect(() => {
    drawerInstance = (node: ReactNode) => {
      setContent(node);
      setOpened(true);
      isDrawerOpen = true;
    };
    closeDrawerInstance = () => {
      setOpened(false);
      isDrawerOpen = false;
    };
    return () => {
      drawerInstance = null;
      closeDrawerInstance = null;
    };
  }, []);

  return (
    <Drawer
      opened={opened}
      onClose={() => {
        setOpened(false);
        isDrawerOpen = false;
      }}
      position="bottom"
      size="100%"
      withCloseButton={false}
      styles={{
        root: { borderRadius: '16px 16px 0 0', marginLeft: 50, width: 'calc(100% - 50px)' },
        body: { padding: 0, height: '100%', width: 'calc(100% - 50px)' },
        content: { background: 'transparent' },
      }}
      overlayProps={{
        opacity: 0.7,
        blur: 2,
        style: {
          pointerEvents: 'auto',
          background: 'rgba(0,0,0,0.7)',
          left: 50,
          width: 'calc(100% - 50px)',
        },
      }}
      transitionProps={{ transition: 'slide-up', duration: 300 }}
      zIndex={3000}
    >
      <Box style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        {/* Top: Close area (fixed 60px) */}
        <Box
          style={{
            height: 60,
            minHeight: 60,
            maxHeight: 60,
            background: 'transparent',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            userSelect: 'none',
            gap: 8,
          }}
          onClick={() => {
            setOpened(false);
            isDrawerOpen = false;
          }}
        >
          <Text c="white" fw={500} size="md" style={{ opacity: 0.7 }}>
            Close
          </Text>
          <IconX size={18} color="white" style={{ opacity: 0.7 }} />
        </Box>
        {/* Bottom: Content fills remaining space */}
        <Box
          style={{
            flex: 1,
            background: theme.colors.shades[0],
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            overflow: 'auto',
            height: 0,
          }}
        >
          {content}
        </Box>
      </Box>
    </Drawer>
  );
}

export async function openFullScreenDrawer(component: ReactNode) {
  if (isDrawerOpen && closeDrawerInstance) {
    closeDrawerInstance();
    // Wait for the close animation to finish (300ms)
    await new Promise(res => setTimeout(res, 320));
  }
  if (drawerInstance) drawerInstance(component);
}

export function closeFullScreenDrawer() {
  if (closeDrawerInstance) closeDrawerInstance();
} 