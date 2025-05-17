import './App.css'
import { AppRouter } from './routing/Router';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { theme } from './theme';

function App() {
  return (
    <>
    <ColorSchemeScript defaultColorScheme="auto" />
    <MantineProvider theme={theme} defaultColorScheme="auto" forceColorScheme='dark'>
      <AppRouter />
    </MantineProvider>
    </>
  )
}

export default App
