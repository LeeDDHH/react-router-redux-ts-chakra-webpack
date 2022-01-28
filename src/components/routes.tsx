'use strict'

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import About from './pages/About';
import Users from './pages/Users';
import Home from './pages/Home';

const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/users" element={<Users />} />
      <Route path="/" element={<Home />} />
    </Routes>
  )
};

export default PageRoutes;
