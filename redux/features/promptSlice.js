import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  text: "",
};

const promptSlice = createSlice({
  name: "prompt",
  initialState,
  reducers: {
    setText: (state, action) => {
      state.text = action.payload;
    },
  },
});

export const { setText } = promptSlice.actions;

export default promptSlice.reducer;
