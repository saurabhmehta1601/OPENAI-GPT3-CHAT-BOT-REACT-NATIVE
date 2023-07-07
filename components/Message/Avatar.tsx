import { View, StyleSheet } from "react-native";

export default function Avatar({ IconPack, name, size, color }) {
  return (
    <View style={styles.container}>
      <IconPack name={name} size={size ?? 25} color={color ?? "#fff"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    borderRadius: 4,
    padding: 2
  }
})