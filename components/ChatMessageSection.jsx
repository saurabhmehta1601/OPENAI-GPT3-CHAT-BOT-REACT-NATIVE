import React from "react";
import Message from "./Message";
import { FlatList, View } from "react-native";
import { useSelector } from "react-redux";

const ChatMessageSection = () => {
  const messages = useSelector((state) => state.messages.allMessages);

  const loadingNewMessage = useSelector(
    (state) => state.messages.loadingNewMessage
  );

  console.log({ messages });

  console.log({ loadingNewMessage });

  return (
    <FlatList
      data={messages}
      renderItem={({ item }) => (
        <View className={"my-2"}>
          <Message
            type={item.type}
            message={{ text: item.text, sender: item.sender }}
          />
        </View>
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

export default ChatMessageSection;
