import React from 'react';
import { Box, Typography } from '@mui/material';
import image from '../../profile_pic/IMG_0451.jpg';

function About() {
  return (
    <Box width="80%" m="80px auto">
      <Box display="flex" flexWrap="wrap" columnGap="40px">
        <Box flex="1 1 40%" mb="40px">
          <img
            alt={image.name}
            width="100%"
            height="100%"
            src={image}
            style={{ objectFit: "contain", boxShadow: '5px 5px 5px #c5c2c2' }}
          />
        </Box>
        <Box flex="1 1 50%">
          <Box m="55px 0 25px 0">
            <Typography sx={{ textAlign: 'justify' }}>When I was a kid, my family had a small stained glass window. I was obsessed with the cascading light that one little window could create.  To me, the light created a vortex, linking the outside world with the inside world. It sparked in me pure magic, love, and resource. Since I have found most of my safety lies in the divine outdoors, it was a way to always stay connected. Light is a resource.<br/>
              <br/>
              In college, I explored the healing art of colors. It was called Maitri. We would spend hours a day sitting in colored rooms to experience the effects of color on our psyche. The impact was undeniable as particular colors brought different moods, released emotions, physical pain and/or comfort.<br/>
              <br/>
              I find my inspiration from our magnificent mother earth. The forests, mountains, the sea - her beauty is forever inspiring. It’s my hope that my artwork brings you more beauty, magic, healing, and inspires more connection to self and others.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default About