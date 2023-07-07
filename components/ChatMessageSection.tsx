import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import TextMessage from "./Message/TextMessage";
import { useAppSelector } from "../hooks/redux";

const ChatMessageSection = () => {
  const messages = useAppSelector((state) => state.messages.allMessages);

  return (
    <FlatList
      data={messages}
      renderItem={({ item }) => (
        <View style={styles.messageContainer}>
          <TextMessage message={{ text: item.text, sender: item.sender }} />
        </View>
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

export default ChatMessageSection;

const styles = StyleSheet.create({
  messageContainer: {
    marginVertical: 2
  }
})