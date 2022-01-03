import { configureStore } from "@reduxjs/toolkit";
import classesSlice from "./classes-slice";

const store = configureStore({
  reducer: {
    classSlices: classesSlice.reducer,
  },
});

export default store;
