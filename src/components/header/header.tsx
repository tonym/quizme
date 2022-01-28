import { FunctionalComponent, h } from 'preact';
import { useContext } from 'preact/hooks';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { styled, Theme, useTheme } from '@mui/material/styles';
import ColorModeContext from '../../contexts/color-mode-context';

interface HeaderProps {
  theme: Theme;
}

const QButton = styled(Button)(({ theme }: HeaderProps) => {
  return {
    color: theme.palette.common.white
  };
});

export const Header: FunctionalComponent = () => {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar>
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1, fontFamily: '"Redressed"' }}>
            Český poslech
          </Typography>
          <nav>
            <QButton href="/" variant="text">
              Domů
            </QButton>
            <QButton href="/adjectives" variant="text">
              Přídavná jména
            </QButton>
            <QButton href="/nouns" variant="text">
              Podstatná jména
            </QButton>
            <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
              {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </nav>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
