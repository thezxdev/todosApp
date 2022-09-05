import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store';

interface modalUpdateInterface {
  isModalOpen: boolean;
}
const initialState: modalUpdateInterface = {
  isModalOpen: false
}

export const modalUpdateSlice = createSlice({
  name: 'modalUpdate',
  initialState,
  reducers: {
    openCloseModal: ( state ) => {
      state.isModalOpen = !state.isModalOpen;
    }
  }
});
// Action creators are generated for each case reducer function
export const { openCloseModal } = modalUpdateSlice.actions;