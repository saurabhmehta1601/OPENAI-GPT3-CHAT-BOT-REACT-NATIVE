import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import { TextInput } from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import { setPromptText } from "../redux/features/promptSlice";
import axios from "axios";
import generateRandomID from "../utils/getRadomID";
import { MESSAGE_SENDER } from "../constants";
import { addNewMessage, setLoadingNewMessage } from "../redux/features/messagesSlice";
import { useAppDispatch, useAppSelector } from "../hooks/redux";

const SERVER_URL = "https://chat-buddy-express-api-7cnof6acma-el.a.run.app"

const PromptSubmitForm = () => {
  const prompt = useAppSelector((state) => state.prompt.text);
  const dispatch = useAppDispatch();

  const handlePromptSubmission = async () => {
    if (prompt.trim() === "") return;

    dispatch(setLoadingNewMessage(true));

    // Add the user entered prompt to the messages
    const userPromptMessage = {
      id: generateRandomID(),
      text: prompt,
      sender: MESSAGE_SENDER.USER,
      loading: false,
    };
    dispatch(addNewMessage(userPromptMessage));

    dispatch(setPromptText(""));

    // Add a message to show autocompletion loading by bot
    dispatch(setLoadingNewMessage(true))
    // Send the prompt to the server and get the response and add it to the messages
    try {
      const response = await axios.post(`${SERVER_URL}/autocomplete`, {
        prompt,
      });
      const { id, text } = response.data;

      const autocompletionResponseMessage = {
        id,
        text: text.trim(),
        sender: MESSAGE_SENDER.BOT,
      };

      dispatch(addNewMessage(autocompletionResponseMessage))
    }
    catch (error) {
      const errorLoadingAutocompletionMessage = {
        id: generateRandomID(),
        text: "Sorry, I didn't get that",
        sender: MESSAGE_SENDER.BOT,
      };

      // Remove autocompletion loading message and add error message
      dispatch(addNewMessage(errorLoadingAutocompletionMessage))
    }
    finally {
      dispatch(setLoadingNewMessage(false))
    }
  };

  return (
    <View style={styles.container} >
      <TextInput
        placeholder="Ask me anything"
        value={prompt}
        onChangeText={(newText) => dispatch(setPromptText(newText))}
        style={styles.promptInput}
        onSubmitEditing={handlePromptSubmission}
      />
      <TouchableWithoutFeedback onPress={handlePromptSubmission}>
        <View style={styles.sendIconWrapper}>
          <FeatherIcon name="send" size={25} color="#fff" />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default PromptSubmitForm;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    marginVertical: 16,
    marginHorizontal: 16,
    marginBottom: 2,
  },
  promptInput: {
    flex: 1,
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
    fontWeight: "700",
    backgroundColor: "#ececec",
    paddingLeft: 12,
    fontFamily: "Nunito"
  },
  sendIconWrapper: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: "#1ccf19",
    borderTopEndRadius: 4,
    borderBottomEndRadius: 4,
  }
})