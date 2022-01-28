'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { store } from './reducers/store';
import { Provider } from 'react-redux'

import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './styles/Theme';

import Navigation from './components/parts/Navigation';
import PageRoutes from './components/routes';

const App = () => {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <Router>
          <Navigation/>
          <PageRoutes/>
        </Router>
      </ChakraProvider>
    </Provider>
  )
};

ReactDOM.render(<App/>, document.getElementById('root'));
