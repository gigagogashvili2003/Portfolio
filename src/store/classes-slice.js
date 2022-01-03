import { createSlice } from "@reduxjs/toolkit";

const classesInitialState = {
  isOpen: false,
};

const classesSlice = createSlice({
  name: " classesSlice",
  initialState: classesInitialState,
  reducers: {
    open(state) {
      state.isOpen = !state.isOpen;
    },
    close(state) {
      state.isOpen = false;
    },
  },
});

export const classesSliceActions = classesSlice.actions;

export default classesSlice;
