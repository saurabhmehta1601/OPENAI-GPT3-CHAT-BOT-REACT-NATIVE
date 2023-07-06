import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  text: "",
};

const promptSlice = createSlice({
  name: "prompt",
  initialState,
  reducers: {
    setPromptText: (state, action) => {
      state.text = action.payload;
    },
  },
});

export const { setPromptText } = promptSlice.actions;

export default promptSlice.reducer;
