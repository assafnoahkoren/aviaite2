import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'uno.css'
import '@mantine/core/styles.css';
import App from './App.tsx'
import { ClickToComponent } from "click-to-react-component";
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <App />
      <ClickToComponent editor="cursor" />
  </StrictMode>,
)
