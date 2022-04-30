import React from 'react';
import './App.css';
import LogoImg from './components/LogoImg';
import {
  AppBar,
  Box,
  createTheme,
  IconButton,
  ThemeProvider,
  Toolbar,
  Typography
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const sampleTheme = createTheme({
  palette: {
    primary: {
      main: "#AFCECC",
      light: "#fbf8f8",
      dark: "#1565c0"
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={sampleTheme}>
      <div className="App">
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="fixed">
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
        </Box>
        <LogoImg/>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Enn
        </Typography>
        <LogoImg/>
        <LogoImg/>
        <LogoImg/>
        <LogoImg/>
      </div>
    </ThemeProvider>
  );
}

export default App;
