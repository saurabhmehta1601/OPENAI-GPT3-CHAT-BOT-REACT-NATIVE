import { MESSAGE_SENDER } from "../constants";

export interface ITextMessage {
  id: string;
  sender: MESSAGE_SENDER;
  text: string;
}

export interface ISkeletonMessage {
  id: string;
}
