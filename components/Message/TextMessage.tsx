import { Text, View } from "react-native"
import React, { useState } from "react";
import { useInterval } from "usehooks-ts";
import { MESSAGE_SENDER } from "../../constants";
import Avatar from "../Avatar";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import Ionicons from "react-native-vector-icons/Ionicons"
import FormattedTextWithPreLines from "../FormatedTextWithPreLines";
import { styles } from "./styles"

interface IProps {
  message: {
    id?: string
    text: string
    sender: MESSAGE_SENDER,
  }
}
const TextMessage = ({ message }: IProps) => {
  const [renderedText, setRenderedText] = useState("");
  const [cursor, setCursor] = useState(0);

  useInterval(
    () => {
      if (!message.text || cursor >= message.text.length) {
        return;
      }
      setRenderedText((text) => text + message.text[cursor]);
      setCursor((cursor) => cursor + 1);
    },
    (message.text && cursor >= message.text.length) ||
      message.sender !== MESSAGE_SENDER.BOT
      ? null
      : 20
  );

  return (
    <View style={styles.container}>
      {/* AVATAR of Message Sender */}
      {message.sender === MESSAGE_SENDER.BOT ? (
        <Avatar IconPack={FontAwesome5} name="robot" />
      ) : (
        <Avatar
          IconPack={Ionicons} name="person"
          color="white"
          wrapperStyles={{ backgroundColor: "#096ced" }}
        />
      )}
      {/* Text Message */}
      <View style={[styles.message, message.sender === MESSAGE_SENDER.USER ? styles.userTextWrapper : undefined]}>
        {message.sender === MESSAGE_SENDER.BOT ?
          <Text style={styles.text}> {renderedText} </Text>
          : <FormattedTextWithPreLines textStyles={[styles.text, styles.userText]} text={message.text} />
        }
      </View>
    </View>
  );
};

export default TextMessage;