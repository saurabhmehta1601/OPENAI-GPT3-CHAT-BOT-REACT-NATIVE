import { TouchableWithoutFeedback, View, Image } from "react-native";
import { TextInput } from "react-native";
import sendMessageIcon from "../assets/icon-send-message.png";
import PropTypes from "prop-types";

const PromptSubmitForm = (props) => {
  return (
    <View className="flex flex-row p-2 bg-white rounded-sm w-full ring">
      <TextInput
        value={props.prompt}
        onChangeText={props.onChangePromptText}
        className="flex-1 rounded-md "
      />
      <TouchableWithoutFeedback
        className="p-2 cursor-pointer"
        onPress={props.onPromptSubmit}
      >
        <Image source={sendMessageIcon} className={"w-8 h-8"} />
      </TouchableWithoutFeedback>
    </View>
  );
};

export default PromptSubmitForm;

PromptSubmitForm.propTypes = {
  prompt: PropTypes.string.isRequired,
  onChangePromptText: PropTypes.func.isRequired,
  onPromptSubmit: PropTypes.func.isRequired,
};
