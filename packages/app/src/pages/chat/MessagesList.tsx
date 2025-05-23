import React, { useRef, useEffect } from 'react';
import { Box, ScrollArea, Group, Button, Image, Stack } from '@mantine/core';
import { observer } from 'mobx-react-lite';
import { chatStore } from './ChatStore';
import UserMessage from './UserMessage';
import BotMessage from './BotMessage';
import { profileStore } from '../profile/ProfileStore';


const NoMessages: React.FC = observer(() => {
  return (
    <>
      <Stack style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 16, gap: 8, opacity: 0.5 }}>
        <Image src="/aviaite-logo.png" alt="Aviaite Logo" width={80} height={80} fit="contain" />
      </Stack>
      <Box style={{ marginTop: 'auto' }}>
        <Group justify="center" gap={8}>
          {profileStore.exampleQuestions.map((q, i) => (
            <Button
              key={i}
              size="sm"
              radius="xl"
              variant="light"
              color="primary"
              style={{ margin: 2, fontWeight: 400 }}
              onClick={() => chatStore.addMessage({ type: 'user', value: q })}
            >
              {q}
            </Button>
          ))}
        </Group>
      </Box>
    </>
  );
});

const MessagesList: React.FC = observer(() => {
  const noMessages = chatStore.messages.length === 0;
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
    }
  }, [chatStore.messages.length, chatStore.isLoading]);

  return (
    <Box p={0} style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      {noMessages ? (
        <Box p={16} style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
          <NoMessages />
        </Box>
      ) : (
        <ScrollArea style={{ flex: 1, height: '100%' }} viewportRef={scrollRef}>
          <Box p={16} style={{ display: 'flex', flexDirection: 'column', minHeight: '100%' }}>
            {chatStore.messages.map((msg, idx) =>
              msg.type === 'user' ? (
                <UserMessage key={idx} value={msg.value} createdOn={msg.createdOn} />
              ) : (
                <BotMessage key={idx} value={msg.value} createdOn={msg.createdOn} sources={msg.sources} />
              )
            )}
            {chatStore.isLoading && (
              <BotMessage value="" createdOn={new Date()} loading={true} sources={[]} />
            )}
          </Box>
        </ScrollArea>
      )}
    </Box>
  );
});

export default MessagesList; 