import { createSlice } from "@reduxjs/toolkit";
import generateRandomID from "../../utils/getRadomID";
import { MESSAGE_SENDER } from "../../constants";
import { ITextMessage } from "../../interfaces/Message";

interface IInitialState {
  allMessages: ITextMessage[];
  loadingNewMessage: boolean;
}

const greetingMessage = {
  id: generateRandomID(),
  text: "Hello, How can I help you?",
  sender: MESSAGE_SENDER.BOT,
};

const initialState: IInitialState = {
  allMessages: [greetingMessage],
  loadingNewMessage: false,
};

export const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    addNewMessage: (state, action) => {
      state.allMessages.push(action.payload);
    },
    setLoadingNewMessage: (state, action) => {
      state.loadingNewMessage = action.payload;
    },
  },
});

export const { addNewMessage, setLoadingNewMessage } = messagesSlice.actions;

export default messagesSlice.reducer;
