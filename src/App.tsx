import React from 'react';
import './App.css';
import  ImgList,{ Item }  from './components/ImgList';
import {
  Box,
  createTheme, CssBaseline,
  ThemeProvider,
} from '@mui/material';
import { Featured } from './components/Featured';
import { HeaderBar } from './components/HeaderBar';

const sampleTheme = createTheme({
  palette: {
    primary: {
      main: "#fbf8f8",
      light: "#AFCECC",
      dark: "#1565c0",
      contrastText: '#003b54',
    },
    background: {
      default: '#fbf8f8',
    },
    text: { primary: '#003b54' },
  }
});

const App = (props: {storedItems: Item[]})=> {
  return (
    <ThemeProvider theme={sampleTheme}>
      <CssBaseline />
      <div className="App">

        <Box sx={{ flexGrow: 1 }}>
          <HeaderBar/>
          <Featured/>
          <ImgList storedItems={props.storedItems}/>
        </Box>

      </div>
    </ThemeProvider>
  );
};

export default App;
