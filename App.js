import { View, StyleSheet } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "./components/Header";
import Message from "./components/Message";
import PromptSubmitForm from "./components/PromptSubmitForm";
import { FlatList } from "react-native";
import axios from "axios";
import generateRandomID from "./utils/getRadomID";
import { sender } from "./constants";

const SERVER_URL = "https://chat-buddy-express-api-7cnof6acma-el.a.run.app";

const greetingMessage = {
  id: generateRandomID(),
  text: "Hello, How can I help you?",
  sender: sender.BOT,
  loading: false,
};

export default function App() {
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState([greetingMessage]);

  console.log({ messages });

  const handlePromptSubmission = async () => {
    if (prompt.trim() === "") return;

    // Add the user entered prompt to the messages
    const userPromptMessage = {
      id: generateRandomID(),
      text: prompt,
      sender: sender.USER,
      loading: false,
    };
    setMessages([...messages, userPromptMessage]);

    setPrompt("");

    // Add a message to show autocompletion loading by bot
    const loadingAutocompletionMessage = {
      id: generateRandomID(),
      loading: true,
      sender: sender.BOT,
    };
    setMessages([...messages, loadingAutocompletionMessage]);

    // Send the prompt to the server and get the response and add it to the messages
    try {
      const response = await axios.post(`${SERVER_URL}/autocomplete`, {
        prompt,
      });
      const { id, text } = response.data;

      const autocompletionResponseMessage = {
        id,
        text: text.trim(),
        sender: sender.BOT,
        loading: false,
      };

      // Remove autocompletion loading message and add the autocompetion message from response from backend
      setMessages([
        ...messages.filter((msg) => msg.id !== loadingAutocompletionMessage.id),
        autocompletionResponseMessage,
      ]);
    } catch (error) {
      console.log({ error });

      const errorLoadingAutocompletionMessage = {
        id: generateRandomID(),
        text: "Sorry, I didn't get that",
        sender: sender.BOT,
        loading: false,
      };

      // Remove autocompletion loading message and add error message
      setMessages([
        ...messages.filter((msg) => msg.id !== loadingAutocompletionMessage.id),
        errorLoadingAutocompletionMessage,
      ]);
    }
  };

  return (
    <SafeAreaView className="bg-white" style={styles.container}>
      <Header />
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

      <View className="mt-auto">
        <PromptSubmitForm
          disabled={Boolean(prompt.trim())}
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
