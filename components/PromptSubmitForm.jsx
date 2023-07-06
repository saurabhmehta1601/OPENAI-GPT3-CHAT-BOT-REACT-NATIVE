import { TouchableWithoutFeedback, View, Image } from "react-native";
import { TextInput } from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import { useDispatch, useSelector } from "react-redux";
import { setPromptText } from "../redux/features/promptSlice";
import axios from "axios";
import generateRandomID from "../utils/getRadomID";
import { sender } from "../constants";

const PromptSubmitForm = (props) => {
  const prompt = useSelector((state) => state.prompt.text);

  const dispatch = useDispatch();

  console.log({ prompt });

  const handlePromptSubmission = async () => {
    if (prompt.trim() === "") return;

    // Add the user entered prompt to the messages
    const userPromptMessage = {
      id: generateRandomID(),
      text: prompt,
      sender: sender.USER,
      loading: false,
    };
    setMessages([...messages, userPromptMessage]);

    setPrompt("");

    // Add a message to show autocompletion loading by bot
    const loadingAutocompletionMessage = {
      id: generateRandomID(),
      loading: true,
      sender: sender.BOT,
    };
    setMessages([...messages, loadingAutocompletionMessage]);

    // Send the prompt to the server and get the response and add it to the messages
    try {
      const response = await axios.post(`${SERVER_URL}/autocomplete`, {
        prompt,
      });
      const { id, text } = response.data;

      const autocompletionResponseMessage = {
        id,
        text: text.trim(),
        sender: sender.BOT,
        loading: false,
      };

      // Remove autocompletion loading message and add the autocompetion message from response from backend
      setMessages([
        ...messages.filter((msg) => msg.id !== loadingAutocompletionMessage.id),
        autocompletionResponseMessage,
      ]);
    } catch (error) {
      console.log({ error });

      const errorLoadingAutocompletionMessage = {
        id: generateRandomID(),
        text: "Sorry, I didn't get that",
        sender: sender.BOT,
        loading: false,
      };

      // Remove autocompletion loading message and add error message
      setMessages([
        ...messages.filter((msg) => msg.id !== loadingAutocompletionMessage.id),
        errorLoadingAutocompletionMessage,
      ]);
    }
  };

  return (
    <View
      className={[
        "flex flex-row mx-2 mb-2 p-2 ring border-2  border-black  rounded-md ",
        props.className ?? "",
      ].join(" ")}
    >
      <TextInput
        placeholder="Ask me anything"
        value={prompt}
        onChangeText={(newText) => dispatch(setPromptText(newText))}
        className="flex-1 text-xl text-[Nunito]"
        onSubmitEditing={handlePromptSubmission}
      />
      <TouchableWithoutFeedback onPress={handlePromptSubmission}>
        <View className={"cursor-pointer ml-2"}>
          <FeatherIcon name="send" size={30} color="#000" />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default PromptSubmitForm;
