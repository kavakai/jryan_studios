import React from 'react';
import { useTheme } from '@mui/material';
import { Box, Typography } from '@mui/material';
import { shades } from '../../theme';
import { useNavigate } from 'react-router-dom';
import logo from '../../logo/logo.png';
import useMediaQuery from '@mui/material/useMediaQuery';


function Footer() {
  const { 
    palette: { neutral }
  } = useTheme();
  const navigate = useNavigate();
  const isNonMobile = useMediaQuery('(min-width: 600px)')

  return (
    <Box mt='70px' p='40px 0' backgroundColor={neutral.light}>
      <Box
        width='90%'
        m='auto'
        display='flex'
        justifyContent='space-between'
        flexWrap='wrap'
        rowGap='30px'
        columnGap='clamp(20px, 30px, 40px)'
      >
        {/* <Box width='clamp(20%, 30%, 40%)'> */}
        <Box>
          <Typography 
            variant='h4' 
            fontWeight='bold' 
            mb='30px' 
            color={shades.primary[500]}
            sx={{ cursor: 'pointer' }} 
            fontSize={isNonMobile ? 'undefined' : '12px'}
          >
            <a style={{ 'textDecoration': 'none', 'color': 'inherit' }} href='#top'>J Ryan Studios</a>
          </Typography>
          <Typography>All Items Handmade in Santa Fe, NM</Typography>
        </Box>
        <Box>
          <img src={logo} alt='logo' width={isNonMobile ? '150px' : '80px'} height={isNonMobile ? '150px' : '80px'} style={{ borderRadius: '5px', boxShadow: '5px 5px 5px #c5c2c2' }}/>
        </Box>
        {/* <Box>
          <Typography variant='h4' fontWeight='bold' mb='30px' sx={{ cursor: 'pointer' }} onClick={() => navigate('/about')}>About Me</Typography>
          <Typography mb='30px'>Terms and Conditions</Typography>
          <Typography mb='30px'>Privacy Policy</Typography>
        </Box> */}
        {/* <Box>
          <Typography variant='h4' fontWeight='bold' mb='30px'>Customer Care</Typography>
          <Typography mb='30px'>FAQ</Typography>
          <Typography mb='30px'>Track Your Order</Typography>
          <Typography mb='30px'>Returns & Refunds</Typography>
        </Box> */}
        {/* <Box width='clamp(20%, 25%, 30%)'> */}
        <Box>
          {/* <Typography variant='h4' mb='30px' sx={{ cursor: 'pointer' }} onClick={() => navigate('/about')}>About Me</Typography> */}
          {/* <Typography variant='h4' mb='30px'>Contact Me</Typography> */}
          <Typography mb={isNonMobile ? '30px' : '10px'} fontSize={isNonMobile ? 'undefined' : '10px'}>Email: jryanreeves@gmail.com</Typography>
          <Typography mb={isNonMobile ? '30px' : '10px'} fontSize={isNonMobile ? 'undefined' : '10px'}>
            <a style={{ 'textDecoration': 'none', 'color': 'inherit' }} href='https://www.instagram.com/jryanreeves/?hl=en' rel='noreferrer' target='_blank'>@jryanreeves</a>
          </Typography>
          <Typography
            fontSize={isNonMobile ? 'undefined' : '10px'}
            variant='h4'   
            color={shades.primary[200]}>
              <a style={{ 'textDecoration': 'none', 'color': 'inherit' }} href='https://www.kai-the-dev.com/' rel='noreferrer' target='_blank'>Website created by: Kai</a>
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default Footer;