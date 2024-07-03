
import Catalog from '../../features/catalog/catalog';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Header from './Header';
import { Container, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { useState } from 'react';


function App() {
  const [darkMode, setDarkmode] = useState(false);
  const paleteType = darkMode ? 'dark' : 'light';
  const theme = createTheme({
    palette: {
      mode: paleteType,
      background: {
        default: paleteType === 'light' ? '#eaeaea': '#121212'
      }
    }
  });

  function handleThemeChange() {
    setDarkmode(!darkMode);
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange}/>
      <Container>
        <Catalog  />
      </Container>
    </ThemeProvider>

  )
}

export default App
