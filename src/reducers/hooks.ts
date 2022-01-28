'use strict';

import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from './store'

// アプリ全体で呼び出せるよう、react-reduxで提供されているuseDispatch, useSelectorに型をつける
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
