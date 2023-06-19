import { View, StyleSheet } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "./components/Header";
import Message from "./components/Message";
import PromptSubmitForm from "./components/PromptSubmitForm";
import { Alert } from "react-native";
import { FlatList } from "react-native";

export default function App() {
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState([
    { id: 1, text: "How how are you", sender: "user" },
    { id: 2, text: "I am fine", sender: "bot" },
    { id: 3, text: "What about you", sender: "user" },
    {
      id: 4,
      text: "How is life going. What can I sau this is goog but ofsdfsodf fmfekmfkm wekrw lrm weklrwkemrm klwrk werkmlw emkr",
      sender: "bot",
    },
    { id: 5, text: "How is life going", sender: "bot" },
    { id: 6, text: "How is life going", sender: "bot" },
    { id: 7, text: "How is life going", sender: "bot" },
    { id: 8, text: "How is life going", sender: "bot" },
    { id: 9, text: "How is life going", sender: "bot" },
    { id: 10, text: "How is life going", sender: "bot" },
    { id: 11, text: "How is life going", sender: "bot" },
    { id: 12, text: "How is life going", sender: "bot" },
    { id: 435, text: "How is life going", sender: "bot" },
    { id: 26, text: "How is life going", sender: "bot" },
    { id: 2357, text: "How is life going", sender: "bot" },
    { id: 85, text: "How is life going", sender: "bot" },
    { id: 923, text: "How is life going", sender: "bot" },
    { id: 14560, text: "How is life going", sender: "bot" },
    { id: 1251, text: "How is life going", sender: "bot" },
    { id: 16572, text: "How is life going", sender: "bot" },
  ]);
  return (
    <SafeAreaView className="bg-slate-800" style={styles.container}>
      <Header />
      <FlatList
        data={messages}
        renderItem={({ item }) => (
          <View className={"my-1"}>
            <Message text={item.text} sender={item.sender} />
          </View>
        )}
        keyExtractor={(item) => item.id}
      />

      <View className="mt-auto">
        <PromptSubmitForm
          prompt={prompt}
          onPromptSubmit={() => {
            Alert.alert("Prompt Submitted");
          }}
          onChangePromptText={(text) => setPrompt(text)}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
