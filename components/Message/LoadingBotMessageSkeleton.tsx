import { View, ActivityIndicator } from "react-native";
import React from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { styles } from "./styles";
import Avatar from "../Avatar";

const LoadingBotMessageSkeleton = () => {
  return (
    <View style={styles.container}>
      {/* BOT AVATAR */}
      <Avatar IconPack={FontAwesome5} name="robot" />
      {/* Text Message With Activity Indicator */}
      <View style={styles.message}>
        <View style={styles.activityIndicatorWrapper}>
          <ActivityIndicator color="#000" />
        </View>
      </View>
    </View>
  );
};

export default LoadingBotMessageSkeleton;
