import React, { FC } from 'react';
import { Box, Typography, useTheme } from '@mui/material';

export const Featured:FC =()=> {

  const theme = useTheme();

  return (
    <div>
      <Box pt={20} style={{ backgroundColor: theme.palette.primary.light}}>
        <Typography  variant="h5" sx={{textAlign: 'center',fontWeight:'light'}}>
          Featured
        </Typography>
        <Box sx={{  width:'35%',textAlign: 'right',py:5}}>
          <Typography sx={{ fontSize: '0.1rem',fontWeight:'light'}}>INDOOR PLANTS</Typography>
          <Box sx={{ borderTop:1, width:'100%'}}/>
          <Typography variant="h5">Monstera</Typography>
        </Box>
        <img src="" alt=""/>
      </Box>
    </div>
  );
};
