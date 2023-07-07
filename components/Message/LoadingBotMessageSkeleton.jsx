import { View, ActivityIndicator } from "react-native";
import React from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { styles } from "./styles";
import Avatar from "./Avatar";

const LoadingBotMessageSkeleton = (props) => {
  return (
    <View className={[styles.container, props.className ?? ""].join(" ")}>
      {/* BOT AVATAR */}
      <Avatar IconPack={FontAwesome5} name="robot" />
      {/* Text Message With Activity Indicator */}
      <View className={styles.message}>
        <View className={styles.activityIndicatorWrapper}>
          <ActivityIndicator color="#000" />
        </View>
      </View>
    </View>
  );
};

export default LoadingBotMessageSkeleton;