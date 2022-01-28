'use strict'

import React from 'react';

import { HStack, Box, Button } from '@chakra-ui/react'

import { useAppSelector, useAppDispatch } from '../../reducers/hooks'

import { decrement, increment } from '../../reducers/features/count'

const Users = () => {
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  return (
    <HStack>
      Users
      <Box>
        <Button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </Button>
        <Box>{count}</Box>
        <Button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </Button>
      </Box>
    </HStack>
  );
}

export default Users;
