import { Text, View, Image, ActivityIndicator } from "react-native";
import React, { useState } from "react";
import { useInterval } from "usehooks-ts";
import PropTypes from "prop-types";

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
      if (cursor >= props.text.length) {
        return;
      }
      setRenderedText((text) => text + props.text[cursor]);
      setCursor((cursor) => cursor + 1);
    },
    cursor >= props.text.length || props.loading || props.sender !== "bot"
      ? null
      : 40
  );

  return (
    <View
      className={[
        "flex flex-row gap-x-2 px-2 py-1 rounded-md",
        props.className ?? "",
      ].join(" ")}
    >
      <Image
        source={
          props.sender === "bot"
            ? require("../assets/bot.png")
            : require("../assets/user.png")
        }
        className="w-10 h-10"
      />
      <View className={" rounded-sm flex-1 "}>
        {props.loading ? (
          <ActivityIndicator size="large" color="#fff" />
        ) : (
          <Text
            className={
              "text-lg py-2 px-3 rounded-md font-bold bg-slate-700 text-gray-200"
            }
          >
            {props.sender === "bot"
              ? renderedText
              : formatTextWithPreLine(props.text)}
          </Text>
        )}
      </View>
    </View>
  );
};

export default Message;

Message.propTypes = {
  text: PropTypes.string.isRequired,
  sender: PropTypes.oneOf(["bot", "user"]).isRequired,
  loading: PropTypes.bool.isRequired,
  className: PropTypes.string,
};

Message.defaultProps = {
  sender: "user",
  loading: false,
  className: "",
};
