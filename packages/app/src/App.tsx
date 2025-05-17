import './App.css'
import { AppRouter } from './routing/Router';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { theme } from './theme';
import { DrawerManager } from './utils/openFullScreenDrawer';

function App() {
  return (
    <>
    <ColorSchemeScript defaultColorScheme="auto" />
    <MantineProvider theme={theme} defaultColorScheme="auto" forceColorScheme='dark'>
      <AppRouter />
      <DrawerManager />
    </MantineProvider>
    </>
  )
}

export default App
