import { configureStore } from "@reduxjs/toolkit";
import messagesSlice from "./features/messagesSlice";
import promptSlice from "./features/promptSlice";

export const store = configureStore({
  reducer: {
    messages: messagesSlice,
    prompt: promptSlice,
  },
});