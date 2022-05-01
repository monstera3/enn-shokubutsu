import React, { FC } from 'react';
import { Box, Typography, useTheme } from '@mui/material';

export const Featured:FC =()=> {

  const theme = useTheme();

  return (
    <div>
      <Box m={10} style={{ backgroundColor: theme.palette.primary.light }}>
        <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
          Featured
        </Typography>
        <div>INDOOR PLANTS</div>
        <div>Monstera</div>
      </Box>
    </div>
  );
};
