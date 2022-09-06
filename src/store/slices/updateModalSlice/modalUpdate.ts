import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store';

interface modalUpdateInterface {
  isModalOpen: boolean;
  message: string;
}
const initialState: modalUpdateInterface = {
  isModalOpen: false,
  message: ''
}

export const modalUpdateSlice = createSlice({
  name: 'modalUpdate',
  initialState,
  reducers: {
    openCloseModal: ( state, action: PayloadAction<string> ) => {
      state.isModalOpen = !state.isModalOpen;
      state.message = action.payload
    },
  }
});
// Action creators are generated for each case reducer function
export const { openCloseModal } = modalUpdateSlice.actions;