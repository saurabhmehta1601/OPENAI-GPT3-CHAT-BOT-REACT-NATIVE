import { StyleSheet, View } from "react-native";
import React, { useCallback } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "./components/Header";
import PromptSubmitForm from "./components/PromptSubmitForm";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import ChatMessageSection from "./components/ChatMessageSection";

SplashScreen.preventAutoHideAsync();

const customFonts = {
  Nunito: require("./assets/fonts/Nunito.ttf"),
};

// const SERVER_URL = "https://chat-buddy-express-api-7cnof6acma-el.a.run.app";

export default function App() {
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
      <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
        <Header />
        <ChatMessageSection />
        <View style={styles.formContainer}>
          <PromptSubmitForm />
        </View>
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: "white"
  },
  formContainer: {
    marginTop: "auto"
  },
});
