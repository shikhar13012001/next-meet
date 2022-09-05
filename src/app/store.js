import { configureStore } from "@reduxjs/toolkit";
import fliprReducer from "../features/flipr/fliprSlice";

export const store = configureStore({
  reducer: {
    flipr: fliprReducer,
  },
});
