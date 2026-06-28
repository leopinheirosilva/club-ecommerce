import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { AnyAction } from 'redux'
import { ThunkDispatch } from 'redux-thunk'
import { RootState } from '../store/store'

export type AppDispatch = ThunkDispatch<RootState, unknown, AnyAction>

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
