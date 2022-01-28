'use strict'

import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { HStack, Box } from '@chakra-ui/react'

const linkStyle = (isActive: boolean) => {
  return (
    {
      color: isActive ? '#fff' : '#545e6f',
      background: isActive ? '#7600dc' : '#f0f0f0',
      marginRight: '10px'
    }
  )
}

const aboutToProps = {
  pathname: '/about',
  search: '?class=B',
  hash: '#about-hash'
};

const usersToProps = {
  pathname: '/users',
  search: '?class=A',
  hash: '#user-hash'
};

const Navigation = () => {
  const location = useLocation();
  const currentLocationInfo = () => {
    console.log('location: ' + JSON.stringify(location, null, 2));
    if (!location) return;
    return (
      <>
        <Box>pathname：{location.pathname}</Box>
        <Box>search：{location.search}</Box>
        <Box>hash：{location.hash}</Box>
        <Box>state：{JSON.stringify(location.state)}</Box>
      </>
    );
  };
  return (
    <>
      <HStack>
        <NavLink to="/" style={({ isActive }) => linkStyle(isActive)}>Home</NavLink>
        <NavLink to={aboutToProps} style={({ isActive }) => linkStyle(isActive)}>About</NavLink>
        <NavLink to={usersToProps} style={({ isActive }) => linkStyle(isActive)}>Users</NavLink>
      </HStack>
      {currentLocationInfo()}
    </>
  );
};

export default Navigation;
