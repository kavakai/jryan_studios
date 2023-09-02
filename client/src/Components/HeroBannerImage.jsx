import React from 'react';
import { Box } from "@mui/material";

function HeroBannerImage({ item }) {
  const { title, image } = item.attributes;
  const {
    data: {
      attributes: { url }
    },
  } = image; 
  
  return (
    <Box key={`carousel-image-${item.index}`}>
      <img 
        src={url}
        alt={`carousel-${title}`}
        style={{
          width: '100%',
          height: '500px',
          objectFit: 'cover',
          backgroundAttachment: 'fixed',
        }}
      />
    </Box>
  )
}

export default HeroBannerImage;