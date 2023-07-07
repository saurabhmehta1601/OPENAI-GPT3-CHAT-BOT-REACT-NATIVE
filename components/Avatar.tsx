import { View, StyleSheet } from "react-native";

interface IProps {
  IconPack: any,
  name: string
  size?: number
  color?: string
}

export default function Avatar({ IconPack, name, size = 25, color = "#fff" }: IProps) {
  return (
    <View style={styles.container}>
      <IconPack name={name} size={size} color={color} />
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