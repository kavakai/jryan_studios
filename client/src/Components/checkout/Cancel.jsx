import React from 'react';
import { Box, Alert, AlertTitle } from '@mui/material';

function Cancel() {
  return (
    <Box m='90px auto' width='80%' height='50vh'>
    <Alert severity='success'>
      <AlertTitle>Order Canceled</AlertTitle>
      Something went wrong and your order has been canceled - {' '}
      <strong>Please try and purchase again, or email us if you have questions</strong>
    </Alert>
  </Box>
  )
}

export default Cancel;