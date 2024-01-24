import { Box, Container } from '@mui/material';
import React from 'react';

function Contacts() {
  return (
    <Box 
      paddingX='24px'
      height='46px'
      display='flex'
      flexDirection='row'
      justifyContent='space-between'  
      alignItems='center'
      bgcolor='#23856D'
    >
      <Box
        display='flex'
        flexDirection='row'
        justifyContent='space-between'  
        alignItems='center'
      >
        <Box p='10px'>(225) 555-0118</Box>
        <Box p='10px'>michelle.rivera@example.com</Box>
      </Box>
      <Box>
        <span>Follow Us  and get a chance to win 80% off</span>
      </Box>
      <Box>
        <span>Follow Us:</span>
      </Box>
    </Box>
  )
}

export default Contacts