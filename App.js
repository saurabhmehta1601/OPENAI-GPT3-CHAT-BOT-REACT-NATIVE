import { View, StyleSheet } from "react-native";
import React, { useState, useCallback } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "./components/Header";
import Message from "./components/Message";
import PromptSubmitForm from "./components/PromptSubmitForm";
import { FlatList } from "react-native";
import generateRandomID from "./utils/getRadomID";
import { sender } from "./constants";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import ChatMessageSection from "./components/ChatMessageSection";


SplashScreen.preventAutoHideAsync();

const customFonts = {
  Nunito: require("./assets/fonts/Nunito.ttf"),
};

const SERVER_URL = "https://chat-buddy-express-api-7cnof6acma-el.a.run.app";

const greetingMessage = {
  id: generateRandomID(),
  text: "Hello, How can I help you?",
  sender: sender.BOT,
  loading: false,
};

export default function App() {
  // Load fonts and return null while fonts are loaded

  const [messages, setMessages] = useState([greetingMessage]);

  const [areFontsLoading] = useFonts(customFonts);
  const onLayoutRootView = useCallback(async () => {
    if (areFontsLoading) {
      await SplashScreen.hideAsync();
    }
  }, [areFontsLoading]);

  if (!areFontsLoading) {
    return null;
  }


  return (
    <Provider store={store}>
      <SafeAreaView
        className="bg-white"
        style={styles.container}
        onLayout={onLayoutRootView}
      >

        <Header />
        <ChatMessageSection />
        {/* <FlatList
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
        /> */}

        <View className="mt-auto">
          <PromptSubmitForm />
        </View>
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
