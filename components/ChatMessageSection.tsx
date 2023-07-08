import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import TextMessage from "./Message/TextMessage";
import { useAppSelector } from "../hooks/redux";
import LoadingBotMessageSkeleton from "./Message/LoadingBotMessageSkeleton";

const ChatMessageSection = () => {
  const messages = useAppSelector((state) => state.messages.allMessages);
  const isNewMessageLoading = useAppSelector(state => state.messages.loadingNewMessage)
  console.log({ line: 11, totalMesssage: messages.length, messages })

  return (
    <ScrollView>
      {messages.map(message => <View style={styles.messageContainer}>
        <TextMessage key={message.id} message={message} />
      </View>
      )}
      {isNewMessageLoading && <View style={{ marginVertical: 8 }} ><LoadingBotMessageSkeleton /></View>}
    </ScrollView>
  );
};

export default ChatMessageSection;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "purple"
  },
  messageContainer: {
    marginVertical: 2
  }
})