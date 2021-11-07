import { FunctionalComponent, h } from 'preact';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { styled, Theme } from '@mui/material/styles';

interface HeaderProps {
  theme: Theme;
}

const QButton = styled(Button)(({ theme }: HeaderProps) => {
  return {
    color: theme.palette.common.white
  };
});

const Header: FunctionalComponent = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            QuizMe
          </Typography>
          <nav>
            <QButton href="/" variant="text">
              Home
            </QButton>
          </nav>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
