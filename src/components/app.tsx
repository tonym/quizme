import { FunctionalComponent, h } from 'preact';
import { useMemo, useState } from 'preact/hooks';
import { Route, Router } from 'preact-router';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, styled, Theme, ThemeProvider } from '@mui/material/styles';
import ColorModeContext from '../contexts/color-mode-context';
import { Home } from '../routes/home/home';
import NotFoundPage from '../routes/notfound';
import { Header } from './header/';

const QContainer = styled(Container)({
  paddingTop: 80
});

const App: FunctionalComponent = () => {
  return (
    <QContainer>
      <Header />
      <Router>
        <Route path="/" component={Home} />
        <NotFoundPage default />
      </Router>
    </QContainer>
  );
};

export default function ToggleColorMode() {
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: (): void => {
        setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
      }
    }),
    []
  );

  const theme: Theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode
        }
      }),
    [mode]
  );

  return (
    <div id="preact_root">
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </div>
  );
}
