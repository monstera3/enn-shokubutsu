import React from 'react';
import './App.css';
import LogoImg from './components/LogoImg';
import {
  AppBar,
  Box,
  createTheme, CssBaseline,
  IconButton,
  ThemeProvider,
  Toolbar,
  Typography
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const sampleTheme = createTheme({
  palette: {
    primary: {
      main: "#fbf8f8",
      light: "#fbf8f8",
      dark: "#1565c0",
      contrastText: '#003b54',
    },
    background: {
      default: '#fbf8f8',
    },
    text: { primary: '#003b54' },
  }
});

function App() {
  return (
    <ThemeProvider theme={sampleTheme}>
      <CssBaseline />
      <div className="App">
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="fixed" >
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Enn
              </Typography>
              <IconButton
                size="large"
                edge="end"
                color="inherit"
                aria-label="menu"
              >
                <MenuIcon />
              </IconButton>


            </Toolbar>
          </AppBar>
          <LogoImg/>
          <Typography  component="div" >
            Enn
          </Typography>
          <LogoImg/>
          <LogoImg/>
          <LogoImg/>
          <LogoImg/>
        </Box>

      </div>
    </ThemeProvider>
  );
}

export default App;
