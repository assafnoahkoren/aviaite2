import React from 'react';
import { IconMenu2, IconPencilPlus } from '@tabler/icons-react';
import { Drawer, ActionIcon, Title, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Menu from './Menu';
import { Outlet } from 'react-router-dom';
import { ColorModeToggle } from '../ColorModeToggle/ColorModeToggle';

const AppShell = () => {
  const [opened, { open, close }] = useDisclosure(false);

  const handleNewChat = () => {
    // Implement new chat logic here
    console.log('New Chat clicked');
  };

  return (
    <>
      <Drawer
        opened={opened}
        title={
          <Group justify="space-between items-center">
            <Title order={4}>Menu</Title>
            <ColorModeToggle />
          </Group>
        }
        onClose={close}
        styles={{
          close: {
          },
        }}
      >
        <Menu />
      </Drawer>

      <div className="font-[Heebo,sans-serif]">
        <header className="flex items-center justify-between py-[10px] px-[20px] bg-[var(--mantine-color-dark-6)] text-white">
          <div className="cursor-pointer flex items-center justify-center" onClick={open}>
            <IconMenu2 size={24} />
          </div>
          <Title size="sm" className="flex-grow text-center tracking-wider opacity-80">aviaiate</Title>
          <IconPencilPlus size={24} className="cursor-pointer" onClick={handleNewChat}/>
        </header>
        <main className="font-[Heebo,sans-serif]"><Outlet /></main>
      </div>
    </>
  );
};

export default AppShell; 