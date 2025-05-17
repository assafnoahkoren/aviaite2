import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'uno.css'
import '@mantine/core/styles.css';
import App from './App.tsx'
import { ClickToComponent } from "click-to-react-component";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <App />
      <ClickToComponent editor="cursor" />
  </StrictMode>,
)
