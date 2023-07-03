import { View, StyleSheet } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "./components/Header";
import Message from "./components/Message";
import PromptSubmitForm from "./components/PromptSubmitForm";
import { FlatList } from "react-native";
import axios from "axios";
import generateRandomID from "./utils/getRadomID";

const SERVER_URL = "https://chat-buddy-express-api-7cnof6acma-el.a.run.app";

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
      const response = await axios.post(`${SERVER_URL}/autocomplete`, {
        prompt,
      });
      console.log({ response });
      const { id, text } = response.data;
      setMessages([
        ...messages.filter((msg) => msg.loading === false),
        {
          id,
          text: text.trim(),
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
