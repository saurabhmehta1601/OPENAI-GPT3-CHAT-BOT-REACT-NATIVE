import { StyleSheet, Text } from "react-native";

interface IProps {
  text: string
}

export default function FormattedTextWithPreLines({ text }: IProps) {
  const lines = text.trim().split("\n");
  const formattedLines = lines.map((line, index) => {
    const formattedLine = line.replace(/ +/g, " ");

    return (
      <Text key={index} style={styles.text}>
        {formattedLine}
      </Text>
    );
  });

  return formattedLines;
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "Nunito"
  }
})