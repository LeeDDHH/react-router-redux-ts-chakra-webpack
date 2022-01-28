'use strict';

import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

// Storeで管理するオブジェクト（slice）の型
interface CounterState {
  value: number
}

// Storeで管理するオブジェクトの初期化
const initialState: CounterState = {
  value: 0,
};

// Reduxで使うロジックとアクションがまとまったものをsliceと呼ぶ
// ルートにあるReduxのstateオブジェクトを複数の「スライス」に分割することに由来する
export const counterSlice = createSlice({
  // ReduxのStore内でオブジェクトを識別するための名称
  name: 'counter',
  initialState: initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    // PayloadActionを使うことで、渡されるactionの中身の値の型が指定できる
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
})

// 生成したsliceからAction Creatorを関数ごとに生成する
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// Action Creator以外で生成する必要がある関数には、RootStateタイプを指定することでReuxのStoreが管理する値を参照できる
export const selectCount = (state: RootState) => state.counter.value;

export default counterSlice.reducer;
