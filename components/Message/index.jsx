import { Text, View } from "react-native";
import React, { useState } from "react";
import { useInterval } from "usehooks-ts";
import PropTypes from "prop-types";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons";
import { sender } from "../../constants";
import formatTextWithPreLine from "../../utils/formatTextWithPreLines";
import { styles } from "./styles";
import Avatar from "./Avatar";

const Message = (props) => {
  const [renderedText, setRenderedText] = useState("");
  const [cursor, setCursor] = useState(0);

  useInterval(
    () => {
      if (!props.text || cursor >= props.text.length) {
        return;
      }
      setRenderedText((text) => text + props.text[cursor]);
      setCursor((cursor) => cursor + 1);
    },
    (props.text && cursor >= props.text.length) ||
      props.loading ||
      props.sender !== sender.BOT
      ? null
      : 40
  );

  return (
    <View className={[styles.container, props.className ?? ""].join(" ")}>
      {/* AVATAR of Message Sender */}
      {props.sender === sender.BOT ? (
        <Avatar IconPack={FontAwesome5} name="robot" />
      ) : (
        <Avatar IconPack={Ionicons} name="person" />
      )}
      {/* Text Message */}
      <View className={styles.message}>
        <Text className={styles.text}>
          {props.text &&
            (props.sender === sender.BOT
              ? renderedText
              : formatTextWithPreLine(props.text))}
        </Text>
      </View>
    </View>
  );
};

export default Message;

Message.propTypes = {
  text: PropTypes.string,
  sender: PropTypes.oneOf([sender.BOT, sender.USER]).isRequired,
  className: PropTypes.string,
};

Message.defaultProps = {
  text: "",
  sender: sender.USER,
  className: "",
};
