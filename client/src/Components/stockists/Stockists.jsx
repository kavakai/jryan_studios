import React from 'react';
import { Box } from '@mui/material';
import Stockist from './Stockist';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setStockists } from "../state";


function Stockists() {
  const dispatch = useDispatch();
  const stockers = useSelector((state) => state.cart.stockists);
  const heroBannerImages = useSelector((state) => state.cart.heroBanner);

  async function getStores() {
    const stores = await fetch(
      "https://smiling-joy-b1e870043b.strapiapp.com/api/stockists?populate=deep",
      { method: "GET" }
    );
    const data = await stores.json();
    dispatch(setStockists(data.data));
  }

  useEffect(() => {
    getStores();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const places = stockers.map((place) => (
    <Stockist key={place.id} place={place} />
  ));

  const { title, image } = heroBannerImages[1].attributes;
  const {
    data: {
      attributes: { url }
    },
  } = image; 

  console.log(heroBannerImages[1], 'heroBannerImages')
  return (
    <Box 
      width="80%" 
      margin="80px auto" 
      padding={2}
      >
      <img 
        src={url}
        alt={title}
        style={{
          width: '100%',
          height: '500px',
          objectFit: 'cover',
          backgroundAttachment: 'fixed',
          marginBottom: '20px'
        }}/>
        <Box
          margin="0 auto"
          display="grid"
          gridTemplateColumns="repeat(auto-fill, 300px)"
          justifyContent="space-around"
          rowGap="20px"
          columnGap="1.33%">
            {places}
        </Box>
    </Box>
  )
}

export default Stockists;