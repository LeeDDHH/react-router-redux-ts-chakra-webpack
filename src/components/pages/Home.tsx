'use strict';

import React, { useEffect } from 'react';
import { Box } from '@chakra-ui/react';

const Home = () => {
  useEffect(() => {
    const loginAccess = async () => {
      const res = await fetch('/login', { method: 'POST' });
      console.log(res);
    };
    const fetchUserData = async () => {
      const res = await fetch('/user');
      console.log(res);
    };
    loginAccess();
    fetchUserData();
  }, []);
  return <Box>Home</Box>;
};

export default Home;
