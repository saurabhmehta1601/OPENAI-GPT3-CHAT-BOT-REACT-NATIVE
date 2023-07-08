import { View, ActivityIndicator, StyleSheet } from "react-native";
import React from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Avatar from "../Avatar";

const LoadingBotMessageSkeleton = () => {
  return (
    <View style={styles.container}>
      {/* BOT AVATAR */}
      <Avatar IconPack={FontAwesome5} name="robot" />
      {/* Text Message With Activity Indicator */}
      <View style={styles.message}>
        <ActivityIndicator color="#000" />
      </View>
    </View>
  );
};

export default LoadingBotMessageSkeleton;

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-start",
    columnGap: 6,
    paddingHorizontal: 4,
    paddingVertical: 1,
    marginHorizontal: 8,
    borderRadius: 4,
  },
  message: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#eee",
    borderRadius: 4,
    height: "100%",
  },
  activityIndicatorWrapper: {
    borderRadius: 4,
    height: "100%",
    padding: 2,
  },
});
