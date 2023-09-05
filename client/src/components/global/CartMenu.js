import React from 'react';
import { Box, Button, Divider, IconButton, Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import styled from '@emotion/styled';
import { shades } from '../../theme';
import { increaseCount, decreaseCount, removeFromCart, setIsCartOpen } from '../../state/index';
import { useNavigate } from 'react-router-dom';

const FlexBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center; 
`

function CartMenu() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const isCartOpen = useSelector((state) => state.cart.isCartOpen);
  console.log('cart', cart)

  const totalPrice = cart.reduce((total, item) => {
    return total + item.count * item.attributes.price;
  }, 0)
  return (
    // Overlay
    <Box
      display={isCartOpen ? 'block' : 'none'}
      backgroundColor='rgba(0, 0 , 0 , 0.4)'
      position='fixed'
      zIndex={10}
      width='100%'
      height='100%'
      left='0'
      top='0'
      overflow='auto'
    >
      {/* MODAL */}
      <Box
        position='fixed'
        right='0'
        bottom='0'
        width='max(400px, 30%)'
        height='100%'
        backgroundColor='white'
      >
        {/* HEADER */}
        <Box
          padding='30px'
          overflow='auto'
          height='100%'
        >
          <FlexBox mb='15px'>
            <Typography variant='h3'>SHOPPING BAG ({cart.length})</Typography>
            <IconButton onClick={() => dispatch(setIsCartOpen({}))}>
              <CloseIcon></CloseIcon>
            </IconButton>
          </FlexBox>

          {/* CART LIST */}
          <Box>
            {cart.map((item) => (
              <Box key={`${item.attributes.name}-${item.id}`}>
                <FlexBox p='15px 0' >
                  <Box flex='1 1 40%'>
                    <img 
                      alt={item?.name}
                      width='123px'
                      height='164px'
                      src={item?.attributes?.image?.data?.attributes?.url}
                    />
                  </Box>
                  <Box flex='1 1 60%'>
                    {/* ITEM NAME */}
                    <FlexBox mb='5px'>
                      <Typography fontWeight='bold'>
                        {item.attributes.name}
                      </Typography>
                      <IconButton onClick={() => dispatch(removeFromCart({ id: item.id }))}>
                        <CloseIcon />
                      </IconButton>
                    </FlexBox>
                    <Typography>{item.attributes.shortDescription}</Typography>
                    {/* AMOUNT */}
                    <FlexBox m='15px 0'>
                      <Box
                        display='flex'
                        alignItems='center'
                        border={`1.5px solid ${shades.neutral[500]}`}
                      >
                        <IconButton
                          onClick={() => dispatch(decreaseCount({ id: item.id }))}
                        >
                          <RemoveIcon />
                        </IconButton>
                        <Typography>{item.count}</Typography>
                        <IconButton
                          onClick={() => dispatch(increaseCount({ id: item.id }))}
                        >
                          <AddIcon />
                        </IconButton>
                      </Box>

                       {/* PRICE */}
                       <Typography fontWeight='bold'>${item.attributes.price}</Typography>
                    </FlexBox>
                  </Box>
                </FlexBox>
                <Divider />
              </Box>
            ))}
          </Box>

          {/* ACTIONS */}
          <Box m='20px 0'>
            <FlexBox m='20px 0'>
              <Typography fontWeight='bold'>SUBTOTAL</Typography>
              <Typography fontWeight='bold'>${totalPrice}</Typography>
            </FlexBox>
            {cart.length ? 
            <Button
              sx={{
                backgroundColor: shades.primary[400],
                color: 'white',
                borderRadius: 0,
                minWidth: '100%',
                padding: '20px 40px',
                m: '20px 0',
              }}
              onClick={() => {
                navigate('/checkout');
                dispatch(setIsCartOpen({}));
              }}
            >CHECKOUT</Button> 
            : <Typography fontWeight='bold' variant='h3'>Go Shop and Buy Some Glass</Typography>}
          </Box>
        </Box>
      </Box>

    </Box>
  )
}

export default CartMenu;