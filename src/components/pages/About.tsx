import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Stack, Box } from '@chakra-ui/react'

const About = () => {
  let navigate = useNavigate();
  const navigateToHome = () => {
    navigate('/?class=C#home-hash', { state: { test:'string'}});
  }

  return (
    <Stack>
      <Box>About</Box>
      <Box cursor="pointer" onClick={navigateToHome}>ToHome</Box>
    </Stack>
  );
}

export default About;
