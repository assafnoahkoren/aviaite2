import React from 'react';
import { IconMenu2, IconPencilPlus } from '@tabler/icons-react';
import { Drawer, Button, ActionIcon } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Menu from './Menu';

interface AppShellProps {
  children: React.ReactNode;
}

const AppShell: React.FC<AppShellProps> = ({ children }) => {
  const [opened, { open, close }] = useDisclosure(false);

  const handleNewChat = () => {
    // Implement new chat logic here
    console.log('New Chat clicked');
  };

  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        styles={{
          close: {
            color: 'var(--mantine-color-dark-0)',
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
          <span className="flex-grow text-center tracking-wider opacity-80">aviaiate</span>
          <ActionIcon variant="transparent" onClick={handleNewChat} aria-label="New Chat">
            <IconPencilPlus size={24} color="white" />
          </ActionIcon>
        </header>
        <main className="font-[Heebo,sans-serif]">{children}</main>
      </div>
    </>
  );
};

export default AppShell; 