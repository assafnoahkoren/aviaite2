import React, { useState } from 'react';
import { Box, Stack, Text, Button, Group } from '@mantine/core';
import { profileStore } from '../profile/ProfileStore';
import { observer } from 'mobx-react-lite';
import { IconFileTypePdf, IconPdf } from '@tabler/icons-react';
import { Document, Page } from 'react-pdf';

const pdfsByProfileType: Record<string, { name: string; url: string }[]> = {
  elal7787: [
    {
      name: '250221_ELY_OMA_R23.1',
      url: 'https://drive.google.com/file/d/1jZPmhfdFvbZ8WhQ7vg3DKMnFloS436Nv/view?usp=sharing',
    },
    {
      name: '787_FCOM',
      url: 'https://drive.google.com/file/d/1QbRH1ygfjvSqGg5Ym76R5XV3ntI_bCfh/view?usp=sharing',
    },
    {
      name: '777-787_FCTM',
      url: 'https://drive.google.com/file/d/1RLcJhkMZDTap38MYoyBgp6XbrT_FtYGe/view?usp=sharing',
    },
  ],
  shirgal: [
    {
      name: 'Shirgal',
      url: 'https://www.shirgal.co.il/sites/default/files/shirgal_2024_01_01.pdf',
    },

  ]
}

const FileViewer: React.FC = observer(() => {
  const pdfs = pdfsByProfileType[profileStore.profileType] || [];
  const [selectedUrl, setSelectedUrl] = useState<string>(pdfs[0]?.url || '');

  return (
    <Box p={16}>
      <Stack>
        <Group justify="center">
          {pdfs.map((pdf) => (
            <Button
              key={pdf.url}
              variant={selectedUrl === pdf.url ? 'filled' : 'light'}
              color={selectedUrl === pdf.url ? 'primary' : 'gray'}
              onClick={() => setSelectedUrl(pdf.url)}
              radius="md"
              style={{
                minHeight: 56,
                justifyContent: 'flex-start',
                paddingLeft: 16,
                paddingRight: 16,
                gap: 12,
                boxShadow: selectedUrl === pdf.url ? '0 2px 8px var(--mantine-color-primary-light)' : undefined,
                // border: selectedUrl === pdf.url ? `2px solid var(--mantine-color-primary-filled)` : '1px solid var(--mantine-color-gray-3)',
                fontWeight: 500,
                fontSize: 16,
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <IconFileTypePdf size={28} style={{ marginRight: 10 }} />
              {pdf.name}
            </Button>
          ))}
        </Group>
        <Document file="https://retrocdn.net/images/e/e4/Pdf-sample.pdf">
          <Page pageNumber={1} />
        </Document>
      </Stack>
    </Box>
  );
});

export default FileViewer; 