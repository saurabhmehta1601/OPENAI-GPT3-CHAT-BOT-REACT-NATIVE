import React from "react";
import PropTypes from "prop-types";
import Message from "./Message";
import { FlatList, View } from "react-native";

const ChatMessageSection = ({ messages }) => {
  return (
    <FlatList
      data={messages}
      renderItem={({ item }) => (
        <View className={"my-1"}>
          <Message
            text={item.text}
            sender={item.sender}
            loading={item.loading}
          />
        </View>
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

export default ChatMessageSection;

ChatMessageSection.prototype = {
  messages: PropTypes.array.isRequired,
};
