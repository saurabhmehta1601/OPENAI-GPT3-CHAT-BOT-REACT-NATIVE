import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import TextMessage from "./Message/TextMessage";
import { useAppSelector } from "../hooks/redux";
import LoadingBotMessageSkeleton from "./Message/LoadingBotMessageSkeleton";
import { ITextMessage } from "../interfaces/Message";

const ChatMessageSection = () => {
  const messages = useAppSelector((state) => state.messages.allMessages);
  const isNewMessageLoading = useAppSelector(state => state.messages.loadingNewMessage)

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={messages}
        renderItem={({ item }: { item: ITextMessage }) => <View style={styles.messageContainer}>
          <TextMessage message={item} />
        </View>
        }
        keyExtractor={(item) => item.id}
      />
      {isNewMessageLoading && <LoadingBotMessageSkeleton />}
    </View>
  );
};

export default ChatMessageSection;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  messageContainer: {
    marginVertical: 2
  }
})