import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "./components/Header";
import Message from "./components/Message";

export default function App() {
  return (
    <SafeAreaView className="bg-slate-800" style={styles.container}>
      <Header />
      <Message text="Hello form User" sender={"user"} />
      <Message text="Hello form Bot" sender={"bot"} />
      <Message text="Hello form Bot" sender={"bot"} loading={true} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
