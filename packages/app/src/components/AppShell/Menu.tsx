import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, UnstyledButton, Group, Text, Divider } from '@mantine/core';
import { IconMessages, IconUserCircle, IconSettings, IconLogout } from '@tabler/icons-react';
import ChatHistory from './ChatHistory';

const menuItems = [
  { icon: <IconMessages size={20} />, label: 'Chat', to: '/chat' },
  { icon: <IconUserCircle size={20} />, label: 'Profile', to: '/profile' },
  { icon: <IconSettings size={20} />, label: 'Settings', to: '/settings' },
];

const Menu: React.FC = () => {
  const handleLogout = () => {
    // Implement logout logic here
    console.log('Logout clicked');
  };

  return (
    <div className="flex flex-col p-0">
      <div className="px-4">
        {menuItems.map((item) => (
          <UnstyledButton
            key={item.label}
            component={NavLink}
            to={item.to}
            className="block w-full rounded hover:bg-[var(--mantine-color-dark-6)]"
          >
            <Group className="p-3">
              {item.icon}
              <Text size="sm">{item.label}</Text>
            </Group>
          </UnstyledButton>
        ))}
      </div>

      <Divider my="md" color="dimmed" opacity={0.3}/>

	  <div className="flex-grow overflow-auto">
        <ChatHistory />
      </div>


    </div>
  );
};

export default Menu; 