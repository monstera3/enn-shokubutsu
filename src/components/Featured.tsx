import React, { FC } from 'react';
import { Box, createTheme, CssBaseline, ThemeProvider, Typography } from '@mui/material';

export const Featured:FC =()=> {

  const featureTheme = createTheme({
    palette: {
      primary: {
        main: "#fbf8f8",
        light: "#AFCECC",
        dark: "#1565c0",
        contrastText: '#003b54',
      },
      background: {
        default: '#AFCECC',
      },
      text: { primary: '#003b54' },
    }
  });

  return (
    <div>
      <ThemeProvider theme={featureTheme}>
        <CssBaseline />
      <Box m={10}>
        <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
          Featured
        </Typography>
      </Box>
      </ThemeProvider>


    </div>
  );
};
