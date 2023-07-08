import { StyleSheet, Text, TextStyle, StyleProp } from "react-native";

interface IProps {
  text: string
  textStyles?: StyleProp<TextStyle>
}

export default function FormattedTextWithPreLines({ text, textStyles = {} }: IProps) {
  const lines = text.trim().split("\n");
  const formattedLines = lines.map((line, index) => {
    const formattedLine = line.replace(/ +/g, " ");

    return (
      <Text key={index} style={[styles.text, textStyles]}>
        {formattedLine}
      </Text>
    );
  });

  return formattedLines;
}

const styles = StyleSheet.create({
  text: {
    // fontFamily: "Nunito"
  }
})