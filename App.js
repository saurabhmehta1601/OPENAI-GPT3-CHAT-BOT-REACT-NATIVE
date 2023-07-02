import { View, StyleSheet } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "./components/Header";
import Message from "./components/Message";
import PromptSubmitForm from "./components/PromptSubmitForm";
import { FlatList } from "react-native";
import axios from "axios";
import generateRandomID from "./utils/getRadomID";

const SERVER_URL = "https://if0b8vdgxc.execute-api.us-east-1.amazonaws.com/v1";

const greetingMessage = {
  id: generateRandomID(),
  text: "Hello, How can I help you?",
  sender: "bot",
  loading: false,
};

export default function App() {
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState([greetingMessage]);

  const handlePromptSubmission = async () => {
    if (prompt.trim() === "") return;

    // Add the prompt to the messages
    setMessages([
      ...messages,
      { id: generateRandomID(), text: prompt, sender: "user", loading: false },
      { id: generateRandomID(), loading: true, sender: "bot" },
    ]);
    setPrompt("");

    // Send the prompt to the server and get the response and add it to the messages
    try {
      const response = await axios.post(`${SERVER_URL}/get-autocomplete`, {
        prompt,
      });
      console.log({ response });
      const { id, autoComplete } = response.data;
      setMessages([
        ...messages.filter((msg) => msg.loading === false),
        {
          id,
          text: autoComplete,
          sender: "bot",
          loading: false,
        },
      ]);
    } catch (error) {
      console.log({ error });
      setMessages([
        ...messages.filter((msg) => msg.loading === false),
        {
          id: generateRandomID(),
          text: "Sorry, I didn't get that",
          sender: "bot",
          loading: false,
        },
      ]);
    }
  };

  return (
    <SafeAreaView className="bg-slate-800" style={styles.container}>
      <Header />
      <FlatList
        data={messages}
        renderItem={({ item }) => (
          <View className={"my-1"}>
            <Message
              text={item.text}
              sender={item.sender}
              loading={item.loading ?? false}
            />
          </View>
        )}
        keyExtractor={(item) => item.id}
      />

      <View className="mt-auto">
        <PromptSubmitForm
          prompt={prompt}
          onPromptSubmit={handlePromptSubmission}
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
