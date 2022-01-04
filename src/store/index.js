import { configureStore } from "@reduxjs/toolkit";
import classesSlice from "./classes-slice";

import fetchDataSlice from "./fetch-slice";

const store = configureStore({
  reducer: {
    classSlices: classesSlice.reducer,

    fetchSlice: fetchDataSlice.reducer,
  },
});

export default store;
