import React from 'react';
import { Box, Button, Group, Loader, Text, useMantineTheme } from '@mantine/core';
import { IconBook } from '@tabler/icons-react';

interface BotMessageProps {
	value: string;
	createdOn: Date;
	loading?: boolean;
}

const BotMessage: React.FC<BotMessageProps> = ({ value, createdOn, loading }) => {
	const theme = useMantineTheme();
	return (
		<Box style={{ display: 'flex', alignItems: 'flex-end', alignSelf: 'flex-start', marginBottom: 8 }}>
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
					<Text size="md">{value}</Text>
				)}
				<Text size="xs" c={theme.colors.shades[1]} opacity={0.7} style={{ marginTop: 4, textAlign: 'right' }}>
					{createdOn instanceof Date
						? createdOn.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
						: ''}
				</Text>
			</Box>
			{!loading && (
				<Group gap={4} style={{ width: 'max-content' }} wrap="nowrap">
					<Button
						variant="subtle"
						color={theme.colors.shades[8]}
						ml={8}
						pe={8}
						ps={8}
						aria-label="Book"
					>
						<IconBook size={20} style={{ position: 'relative', bottom: 1 }} />
						&nbsp;&nbsp;
						<Text size="xs" style={{ whiteSpace: 'nowrap' }}>
							Page 1
						</Text>
					</Button>
				</Group>
			)}
		</Box>
	);
};

export default BotMessage; 