'use strict';

import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  styles: {
    global: {
      html: {
        height: '100%',
      },
      body: {
        height: '100%',
        backgroundColor: 'gray.100',
        color: 'gray.800',
      },
      '#root': {
        height: '100%',
      },
    },
  },
});
