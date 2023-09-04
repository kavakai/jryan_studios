import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Badge, Box, IconButton, useTheme, Typography } from '@mui/material';
import { PersonOutline, ShoppingBagOutlined, MenuOutlined, SearchOutlined } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { shades } from '../../theme'; 
import { setIsCartOpen } from '../state_2/state';
import useMediaQuery from '@mui/material/useMediaQuery';


function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const { 
    palette: { neutral }
  } = useTheme();
  const isNonMobile = useMediaQuery('(min-width: 600px)')


  return (
    <Box
      display='flex'
      alignItems='center'
      width='100%'
      height='60px'
      // backgroundColor='rgba(255, 255, 255, 0.95)'
      backgroundColor={neutral.light}
      color='black'
      position='fixed'
      top='0'
      left='0'
      zIndex='1'
    >
      <Box 
        width='83%'
        margin='auto'
        display='flex'
        justifyContent='space-between'
        alignItems='center'
      >
        <Box
          ml={isNonMobile ? -8 : -4}
          display='flex'
        >
          <Typography 
            variant='h4' 
            mr={isNonMobile ? '2em' : '.5em'}
            fontSize={isNonMobile ? null : '12px'} 
            sx={{ cursor: 'pointer' }} 
            onClick={() => navigate('/about')}>About Me</Typography>
          <Typography 
            variant='h4' 
            mr='-2em' 
            fontSize={isNonMobile ? null : '12px'} 
            sx={{ cursor: 'pointer' }} 
            onClick={() => navigate('/stockists')}>Stockists</Typography>
        </Box>
        <Box 
          onClick={() => navigate('/')}
          sx={{ '&:hover': { cursor: 'pointer' }}}
          color={shades.primary[500]}
          fontSize={isNonMobile ? 'x-large' : 'large'}
          mr='40px' 
        >
          J Ryan Studios
        </Box>
        <Box 
          display='flex'
          justifyContent='space-between'
          columnGap='20px'
          zIndex='2'
        >
          {/* FUTURE ITEMS */}

          {/* <IconButton sx={{ color: 'black' }}>
            <SearchOutlined />
          </IconButton>
          <IconButton sx={{ color: 'black' }}>
            <PersonOutline />
          </IconButton> */}
          <Badge 
            badgeContent={cart.length}
            color='secondary'
            invisible={cart.length === 0}
            sx={{
              '& .MuiBadge-badge': {
                right: 5,
                top: 5,
                padding: '0 4px',
                height: '14px',
                minWidth: '13px'
              }
            }}
          >
            <IconButton 
              onClick={() => dispatch(setIsCartOpen({}))}
              sx={{ color: 'black' }}
            >
              <ShoppingBagOutlined />
            </IconButton>
          </Badge>
          
          {/* FUTURE DROPDOWN MENU */}

          {/* <IconButton sx={{ color: 'black' }}>
            <MenuOutlined />
          </IconButton> */}
        </Box>
      </Box>
    </Box>
  )
}

export default Navbar;