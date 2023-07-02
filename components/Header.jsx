import Icon from "react-native-vector-icons/FontAwesome";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import React from "react";

const Header = (props) => {
  const openGithubRepository = () => {
    Linking.openURL("https://github.com/saurabhmehta1601/OPENAI-GPT3-CHAT-BOT");
  };

  return (
    <View className="p-4 flex flex-row justify-between " {...props}>
      <Text className="text-3xl hover:cursor-pointer">AI BUDDY</Text>
      <TouchableOpacity onPress={openGithubRepository}>
        <Icon name="github-square" size={45} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
