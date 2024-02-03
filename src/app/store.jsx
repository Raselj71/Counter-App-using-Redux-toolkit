import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "../features/counterFeatures/CounterSlice";

const store = configureStore({
  reducer: {
    counter: CounterSlice,
  },
});

export default store;
