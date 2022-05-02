import React, { FC } from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import sampleImg from '../assets/images/sample1.png'
export const Featured:FC =()=> {

  const theme = useTheme();

  return (
    <div>
      <Box pt={2} style={{ backgroundColor: theme.palette.primary.light}}>
        <Typography  variant="h5" sx={{textAlign: 'center',fontWeight:'light'}}>
          Featured
        </Typography>
        <Box sx={{  width:'35%',textAlign: 'right',pt:5}}>
          <Typography sx={{ fontSize: '0.6rem',fontWeight:'light'}}>INDOOR PLANTS</Typography>
          <Box sx={{ borderTop:1, width:'100%'}}/>
          <Typography variant="h5">Monstera</Typography>
        </Box>

        <Box sx={{ width:'65%',textAlign: 'center',py:5,mx:'auto'}}>
          <img  src={sampleImg} alt=""/>

          <Typography sx={{ textAlign: 'center',fontWeight:'light',mt:3,ml:3}}>View All</Typography>
          <Box  sx={{ borderTop:1, width:'60%',ml:13}}/>
        </Box>
      </Box>
    </div>
  );
};
