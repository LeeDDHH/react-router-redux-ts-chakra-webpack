'use strict';

import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import { store } from './reducers/store';
import { Provider } from 'react-redux';

import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './styles/Theme';

import Navigation from './components/parts/Navigation';
import PageRoutes from './components/routes';

if (process.env.NODE_ENV === 'development') {
  console.log('development');
  const { worker } = require('./mocks/browser');
  worker.start();
}

const App = () => {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <Router>
          <Navigation />
          <PageRoutes />
        </Router>
      </ChakraProvider>
    </Provider>
  );
};

const container = document.getElementById('root');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(<App />);
