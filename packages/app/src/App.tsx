import './App.css'
import { AppRouter } from './routing/Router';
import { MantineProvider } from '@mantine/core';
import { theme } from './theme';

function App() {
  return (
    <>
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <AppRouter />
    </MantineProvider>
    </>
  )
}

export default App
