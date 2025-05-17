import { Box, Title, Group, Button, Slider, Text } from '@mantine/core';
import React from 'react';
import { observer } from 'mobx-react-lite';
import { settingsStore } from './SettingsStore';
import ReactCountryFlag from 'react-country-flag';

const SettingsPage: React.FC = observer(() => {
  return (
    <Box p={24} style={{maxWidth: 600}}>
      <Title order={3} mb={24}>Settings</Title>

      {/* Language Picker */}
      <Text>Language</Text>
      <Text mb={8} size="xs" opacity={0.4}>The response language of the AI chatbot</Text>
      <Group mb={24}>
        <Button
          leftSection={<ReactCountryFlag countryCode="GB" svg style={{ width: 22 }} title="English" />}
          variant={settingsStore.language === 'en' ? 'filled' : 'outline'}
          onClick={() => settingsStore.setLanguage('en')}
        >
          English
        </Button>
        <Button
          leftSection={<ReactCountryFlag countryCode="IL" svg style={{ width: 22 }} title="Hebrew" />}
          variant={settingsStore.language === 'he' ? 'filled' : 'outline'}
          onClick={() => settingsStore.setLanguage('he')}
        >
          Hebrew
        </Button>
      </Group>

      {/* Answer Length */}
      <Text>Answer Length</Text>
      <Text mb={8} size="xs" opacity={0.4}>The length of the answer from the AI chatbot</Text>
      <Group mb={24}>
        <Button
          variant={settingsStore.answerLength === 'short' ? 'filled' : 'outline'}
          onClick={() => settingsStore.setAnswerLength('short')}
        >
          Short
        </Button>
        <Button
          variant={settingsStore.answerLength === 'long' ? 'filled' : 'outline'}
          onClick={() => settingsStore.setAnswerLength('long')}
        >
          Long
        </Button>
      </Group>

      {/* Model Temperature */}
      <Text>Model Temperature ({settingsStore.temperature})</Text>
      <Text mb={8} size="xs" opacity={0.4}>0 is more deterministic, 1 is more creative</Text>
      <Slider
        min={0}
        max={1}
        step={0.1}
        value={settingsStore.temperature}
        onChange={val => settingsStore.setTemperature(Number(val))}
        marks={Array.from({ length: 11 }, (_, i) => ({ value: i / 10, label: (i / 10).toFixed(1) }))}
        mb={24}
      />
    </Box>
  );
});

export default SettingsPage;
