import React, { useState } from 'react';
import { Box, InputBase, Divider, Typography, IconButton } from '@mui/material';
import  MarkEmailReadOutlinedIcon  from '@mui/icons-material/MarkEmailReadOutlined';

function Subscribe() {
  const [email, setEmail] = useState('');
  
  return (
    <Box width='80%' margin='80px auto' textAlign='center'>
      <IconButton>
        <MarkEmailReadOutlinedIcon fontSize='large' />
      </IconButton>
      <Typography variant='h3'>Subscribe To Our Newsletter</Typography>
      <Typography>and receive 10% off first order at checkout</Typography>
      <Box
        p='2px 4px'
        m='15px auto'
        display='flex'
        alignItems='center'
        width='75%'
        backgroundColor='#f2f2f2'
      >
        <InputBase 
          sx={{ ml: 1, flex: 1 }}
          placeholder='Enter email'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <Divider sx={{ m: 0.5, height:28 }} orientation='vertical' />
        <Typography sx={{ p:'10px', ':hover':{cursor: 'pointer'} }}>Subscribe</Typography>
      </Box>
    </Box>
  )
}

export default Subscribe