import { View, StyleSheet, StyleProp, ViewStyle } from "react-native";

interface IProps {
  IconPack: any,
  name: string
  size?: number
  color?: string
  wrapperStyles?: StyleProp<ViewStyle>
}

export default function Avatar({ IconPack, name, size = 25, color = "#fff", wrapperStyles = undefined }: IProps) {
  return (
    <View style={[styles.container, wrapperStyles]} >
      <IconPack name={name} size={size} color={color} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    borderRadius: 4,
    padding: 8,
    width: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
})