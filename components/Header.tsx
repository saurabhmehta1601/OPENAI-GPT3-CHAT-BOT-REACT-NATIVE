import Icon from "react-native-vector-icons/FontAwesome";
import { View, Text, StyleSheet, TouchableOpacity, Linking } from "react-native";
import React from "react";

const Header = () => {
  const openGithubRepository = () => {
    Linking.openURL("https://github.com/saurabhmehta1601/OPENAI-GPT3-CHAT-BOT");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logoText}>
        AI BUDDY
      </Text>
      <TouchableOpacity onPress={openGithubRepository}>
        <Icon name="github-square" size={45} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    padding: 4,
    paddingHorizontal: 12,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  logoText: {
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "Nunito",
    color: "black",
  }
})