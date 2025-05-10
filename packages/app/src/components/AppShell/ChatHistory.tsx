import React from 'react';
import { UnstyledButton, Text, ScrollArea, Group } from '@mantine/core';

// Placeholder data for chat history
const chatHistoryItems = [
  { id: '1', title: 'Conversation with Alice', lastMessage: 'Alice: See you then!', timestamp: '10:30 AM' },
  { id: '2', title: 'Project Discussion', lastMessage: 'Bob: I will send the files over.', timestamp: 'Yesterday' },
  { id: '3', title: 'Quick Question', lastMessage: 'You: Can you check this?', timestamp: 'Mon' },
  { id: '4', title: 'Weekend Plans', lastMessage: 'Charlie: Sounds good!', timestamp: 'Oct 15' },
  { id: '5', title: 'Team Sync', lastMessage: 'Diana: Meeting at 3 PM.', timestamp: 'Oct 12' },
  { id: '6', title: 'Client Call Notes', lastMessage: 'You: Follow up on action items.', timestamp: 'Oct 10' },
];

interface ChatHistoryItemProps {
  item: typeof chatHistoryItems[0];
  onClick: (id: string) => void;
}

const ChatHistoryItem: React.FC<ChatHistoryItemProps> = ({ item, onClick }) => {
  return (
    <UnstyledButton 
      className="block w-full p-3 rounded hover:bg-[var(--mantine-color-dark-6)]"
      onClick={() => onClick(item.id)}
    >
      <Group justify="space-between" className='py-2'>
		<Text size="sm" fw={500} truncate>{item.title}</Text>
		<Text size="xs" c="dimmed">{item.timestamp}</Text>
      </Group>
    </UnstyledButton>
  );
};

const ChatHistory: React.FC = () => {
  const handleItemClick = (id: string) => {
    console.log(`Chat item clicked: ${id}`);
    // Navigate to the specific chat or handle selection
  };

  return (
    <div className="flex flex-col h-full">
      <Text size="lg" fw={700} className="p-3 pb-1">Chat History</Text>
      <ScrollArea className="flex-grow" type="auto">
        <div className="p-3 pt-1">
          {chatHistoryItems.map((item) => (
            <ChatHistoryItem key={item.id} item={item} onClick={handleItemClick} />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default ChatHistory; 