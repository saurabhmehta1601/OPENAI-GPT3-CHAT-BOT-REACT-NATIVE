import React from "react";
import Message from "./Message";
import { FlatList, View } from "react-native";
import { useSelector } from "react-redux";
import LoadingMessageSkeleton from "./Message/LoadingBotMessageSkeleton";

const ChatMessageSection = () => {
  const messages = useSelector((state) => state.messages.allMessages);

  return (
    <FlatList
      data={messages}
      renderItem={({ item }) => (
        <View className={"my-2"}>
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
