import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'uno.css'
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { theme } from './theme';
import App from './App.tsx'
import { ClickToComponent } from "click-to-react-component";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider theme={theme} >
      <App />
      <ClickToComponent editor="cursor" />
    </MantineProvider>
  </StrictMode>,
)
