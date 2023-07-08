import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import TextMessage from "./Message/TextMessage";
import { useAppSelector } from "../hooks/redux";
import LoadingBotMessageSkeleton from "./Message/LoadingBotMessageSkeleton";

const ChatMessageSection = () => {
  const messages = useAppSelector((state) => state.messages.allMessages);
  const isNewMessageLoading = useAppSelector(state => state.messages.loadingNewMessage)

  return (
    <ScrollView style={styles.wrapper}>
      {messages.map(message => <View key={message.id} style={styles.messageContainer}>
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
    paddingBottom:80
  },
  messageContainer: {
    marginVertical: 2
  }
})