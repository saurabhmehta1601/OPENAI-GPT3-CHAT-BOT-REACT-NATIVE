import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const [input, setInput] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ color: "white" }} className="text-3xl bg-yellow-400">
        expo!
      </Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#343541",
    color: "#fff",
  },
});
