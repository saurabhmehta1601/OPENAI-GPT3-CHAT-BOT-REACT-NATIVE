import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    columnGap: 2,
    paddingHorizontal: 4,
    paddingVertical: 1,
    borderRadius: 4,
  },
  message: {
    flex: 1,
    border: 2,
    borderColor: "#000",
    backgroundColor: "#eee",
    borderRadius: 4,
    height: "100%",
  },
  text: {
    paddingVertical: 2,
    paddingHorizontal: 3,
    fontFamily: "Nunito",
    fontWeight: "bold",
  },
  activityIndicatorWrapper: {
    borderRadius: 4,
    padding: 2,
  },
});
