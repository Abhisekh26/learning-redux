import { createSlice, configureStore } from "@reduxjs/toolkit";

var counter = { counter: 0 };

var slice = createSlice({
  name: "counter",
  initialState: counter,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
  },
});

var data = configureStore({
    reducer:
 slice.reducer
    
});
export const sliceactions = slice.actions;
export default data;
