import { FunctionalComponent, h } from 'preact';
import { Route, Router } from 'preact-router';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Home from '../routes/home';
import Profile from '../routes/profile';
import NotFoundPage from '../routes/notfound';
import Header from './header';

const theme = createTheme({});

const App: FunctionalComponent = () => {
  return (
    <div id="preact_root">
      <ThemeProvider theme={theme}>
        <Header />
        <Router>
          <Route path="/" component={Home} />
          <Route path="/profile/" component={Profile} user="me" />
          <Route path="/profile/:user" component={Profile} />
          <NotFoundPage default />
        </Router>
      </ThemeProvider>
    </div>
  );
};

export default App;
