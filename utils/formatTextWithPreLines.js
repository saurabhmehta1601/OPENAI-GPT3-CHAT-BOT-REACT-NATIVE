export default function formatTextWithPreLine(text) {
  const lines = text.trim().split("\n");

  const formattedLines = lines.map((line, index) => {
    const formattedLine = line.replace(/ +/g, " ");
    return (
      <Text key={index} className="font-[Nunito]">
        {formattedLine}
      </Text>
    );
  });

  return formattedLines;
}

