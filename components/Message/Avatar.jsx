import { View } from "react-native";
import { styles } from "./styles";

export default function Avatar({ IconPack, name, size, color }) {
  return (
    <View className={styles.avatarContainer}>
      <IconPack name={name} size={size ?? 25} color={color ?? "#fff"} />
    </View>
  );
}
