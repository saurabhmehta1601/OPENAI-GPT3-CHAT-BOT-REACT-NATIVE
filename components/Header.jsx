import { View, Text, Image, TouchableOpacity, Linking } from "react-native";
import React from "react";
import githubIcon from "../assets/github.png";

const Header = (props) => {
  const openGithubRepository = () => {
    Linking.openURL("https://github.com/saurabhmehta1601/OPENAI-GPT3-CHAT-BOT");
  };

  return (
    <View className="p-4 flex flex-row justify-between " {...props}>
      <Text className="text-3xl text-white hover:cursor-pointer">AI BUDDY</Text>
      <View className="hover:cursor-pointer hover:ring active:ring  rounded-full bg-white">
        <TouchableOpacity onPress={openGithubRepository}>
          <Image source={githubIcon} alt="github" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
