import React from 'react';
import { Box, Title, Group, Button, Text } from '@mantine/core';
import { observer } from 'mobx-react-lite';
import { profileStore } from './ProfileStore';

const ProfilePage: React.FC = observer(() => {
  return (
    <Box p={24} style={{ maxWidth: 600 }}>
      <Title order={3} mb={24}>Profile</Title>

      {/* Profile Type Picker */}
      <Text mb={8}>Profile Type</Text>
      <Group mb={24}>
        <Button
          variant={profileStore.profileType === 'elal7787' ? 'filled' : 'outline'}
          onClick={() => profileStore.setProfileType('elal7787')}
        >
          ELAL 7787
        </Button>
        <Button
          variant={profileStore.profileType === 'shirgal' ? 'filled' : 'outline'}
          onClick={() => profileStore.setProfileType('shirgal')}
        >
          Shirgal
        </Button>
      </Group>
    </Box>
  );
});

export default ProfilePage;
