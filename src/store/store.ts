import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { todosSlice } from './slices/todosSlice';
import { modalUpdateSlice } from './slices/updateModalSlice';


export const store = configureStore({
  reducer: {
    modalUpdate: modalUpdateSlice.reducer,
    todos: todosSlice.reducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;