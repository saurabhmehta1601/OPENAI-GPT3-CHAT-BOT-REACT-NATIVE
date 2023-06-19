import { View, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "./components/Header";
import Message from "./components/Message";
import PromptSubmitForm from "./components/PromptSubmitForm";
import { Alert } from "react-native";

export default function App() {
  const [prompt, setPrompt] = useState("");

  return (
    <SafeAreaView className="bg-slate-800" style={styles.container}>
      <Header />
      <Message text="Hello form User" sender={"user"} />
      <Message text="Hello form Bot" sender={"bot"} />
      <Message text="Hello form Bot" sender={"bot"} loading={true} />
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
