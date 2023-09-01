import React, { useEffect } from 'react';
import { Box, Typography, IconButton, useMediaQuery } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { shades } from '../../theme';
import { useDispatch, useSelector } from 'react-redux';
import { setHeroBanner } from "../../scenes/state";
import HeroBannerImage from '../../components/HeroBannerImage';

function MainCarousel() {
  const isNonMobile = useMediaQuery('(min-width: 600px)');
  const dispatch = useDispatch();
  const heroBannerImages = useSelector((state) => state.cart.heroBanner);

  async function getHeroBanner() {
    const banner = await fetch(
      "https://classic-novelty-bafec44cf4.strapiapp.com/api/hero-banners?populate=deep",
      { method: "GET" }
    );
    const data = await banner.json();
    dispatch(setHeroBanner(data.data));
  };

  useEffect(() => {
    getHeroBanner();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const bannerImages = heroBannerImages.map((item) => {
    return <HeroBannerImage key={item.id} item={item} />  
  });

  return (
    <Carousel
      infiniteLoop={true}
      showThumbs={false}
      showIndicators={false}
      showStatus={false}
      renderArrowPrev={(onClickHandler, hasPrev, label) => (
        <IconButton
          onClick={onClickHandler}
          sx={{
            position: 'absolute',
            top: '50%',
            left: '0',
            color: 'white',
            padding: '5px',
            zIndex: '10',
          }}
        >
          <NavigateBeforeIcon sx={{ fontSize: 40 }} />
        </IconButton>
      )}
      renderArrowNext={(onClickHandler, hasNext, label) => (
        <IconButton
          onClick={onClickHandler}
          sx={{
            position: 'absolute',
            top: '50%',
            right: '0',
            color: 'white',
            padding: '5px',
            zIndex: '10',
          }}
        >
          <NavigateNextIcon sx={{ fontSize: 40 }} />
        </IconButton>
      )}
    >
      {bannerImages}
    </Carousel>
  )
};

export default MainCarousel