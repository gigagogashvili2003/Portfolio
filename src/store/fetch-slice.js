import { createSlice } from "@reduxjs/toolkit";

const initialFetchState = {
  notification: null,
};

const fetchDataSlice = createSlice({
  name: "fetchSlice",
  initialState: initialFetchState,
  reducers: {
    showFetchInfo(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const fetchActions = fetchDataSlice.actions;

export default fetchDataSlice;
