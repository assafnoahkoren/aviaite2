import React, { useState } from 'react';
import { Box, Button, Loader, Stack, Text, useMantineTheme, Modal } from '@mantine/core';
import { IconBook } from '@tabler/icons-react';
import Markdown from 'react-markdown'
import { observer } from 'mobx-react-lite';
import { settingsStore } from '../settings/SettingsStore';
import type { DocuChatSourceChunk } from '../../api/chatApi';

interface BotMessageProps {
	value: string;
	createdOn: Date;
	loading?: boolean;
	sources?: DocuChatSourceChunk[];
}

const BotMessage: React.FC<BotMessageProps> = observer(({ value, createdOn, loading, sources }) => {
	const theme = useMantineTheme();
	const [modalOpen, setModalOpen] = useState(false);
	const [selectedSource, setSelectedSource] = useState<DocuChatSourceChunk | null>(null);

	const handleOpenSource = (source: DocuChatSourceChunk) => {
		setSelectedSource(source);
		setModalOpen(true);
	};

	return (
		<Box style={{ display: 'flex', alignItems: 'flex-end', alignSelf: 'flex-start', marginBottom: 8, flexDirection: 'column' }}>
			<Box
				style={{
					background: theme.colors.shades[8],
					color: theme.colors.shades[1],
					padding: '10px 16px',
					borderRadius: 18,
					borderTopRightRadius: 18,
					borderTopLeftRadius: 4,
					fontSize: 16,
					wordBreak: 'break-word' as 'break-word',
					minWidth: loading ? 60 : undefined,
					minHeight: loading ? 40 : undefined,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'flex-start',
					justifyContent: 'center',
				}}
			>
				<Text size="sm" style={{ marginBottom: 2, opacity: 0.7, fontWeight: 500 }}>
					Aviaite
				</Text>
				{loading ? (
					<Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 20, minWidth: 32 }}>
						<Loader color={theme.primaryColor} size={20} />
					</Box>
				) : (
					<Box style={{ direction: settingsStore.language === 'he' ? 'rtl' : 'ltr' }}>
						<Markdown>{value}</Markdown>
					</Box>
				)}
				<Text size="xs" c={theme.colors.shades[1]} opacity={0.7} style={{ marginTop: 4, textAlign: 'right' }}>
					{createdOn instanceof Date
						? createdOn.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
						: ''}
				</Text>
			</Box>
			{!loading && sources && sources.length > 0 && (
				<Stack gap={4} style={{ width: 'max-content', marginTop: 4 }}>
					{sources.map((source, idx) => (
						<Button
							key={idx}
							variant="subtle"
							color={theme.colors.shades[8]}
							ml={8}
							pe={8}
							ps={8}
							aria-label={source.fileName}
							onClick={() => handleOpenSource(source)}
						>
							<IconBook size={20} style={{ position: 'relative', bottom: 1 }} />
							&nbsp;&nbsp;
							<Text size="xs" style={{ whiteSpace: 'nowrap' }}>
								{source.fileName}
								{source.metaData?.page ? ` • Page ${source.metaData.page}` : ''}
							</Text>
						</Button>
					))}
				</Stack>
			)}
			<Modal
				opened={modalOpen}
				onClose={() => setModalOpen(false)}
				title={selectedSource ? `${selectedSource.fileName}${selectedSource.metaData?.page ? ` • Page ${selectedSource.metaData.page}` : ''}` : ''}
				size="lg"
			>
				<Box style={{ whiteSpace: 'pre-wrap', fontFamily: 'inherit', fontSize: 15 }}>
					{selectedSource?.content?.replace(/(\r\n|\n|\r)/g, '').replace(/\./g, '.\n')}
				</Box>
			</Modal>
		</Box>
	);
});

export default BotMessage; 