import { Text, View, Image, ActivityIndicator } from "react-native";
import React, { useState } from "react";
import { useInterval } from "usehooks-ts";
import PropTypes from "prop-types";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons";

function formatTextWithPreLine(text) {
  const lines = text.split("\n");

  const formattedLines = lines.map((line, index) => {
    const formattedLine = line.replace(/ +/g, " ");
    return <Text key={index}>{formattedLine}</Text>;
  });

  return formattedLines;
}

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
      props.sender !== "bot"
      ? null
      : 40
  );

  return (
    <View
      className={[
        "flex flex-row gap-x-2 px-2 py-1 rounded-md justify-center",
        props.className ?? "",
      ].join(" ")}
    >
      {props.sender === "bot" ? (
        <FontAwesome5 name="robot" size={40} color="#000" />
      ) : (
        <Ionicons name="person" size={40} color="#000" />
      )}
      <View className={" rounded-sm flex-1 "}>
        {props.loading ? (
          <ActivityIndicator size="large" color="#fff" />
        ) : (
          <Text
            className={
              "text-lg py-2 px-3 rounded-md font-bold bg-black text-white"
            }
          >
            {props.text &&
              (props.sender === "bot"
                ? renderedText
                : formatTextWithPreLine(props.text))}
          </Text>
        )}
      </View>
    </View>
  );
};

export default Message;

Message.propTypes = {
  text: PropTypes.string,
  sender: PropTypes.oneOf(["bot", "user"]).isRequired,
  loading: PropTypes.bool,
  className: PropTypes.string,
};

Message.defaultProps = {
  text: "",
  sender: "user",
  loading: false,
  className: "",
};
