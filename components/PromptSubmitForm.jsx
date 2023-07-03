import { TouchableWithoutFeedback, View, Image } from "react-native";
import { TextInput } from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import PropTypes from "prop-types";

const PromptSubmitForm = (props) => {
  return (
    <View
      className={[
        "flex flex-row mx-2 mb-2 p-2 ring border-2  border-black  rounded-md ",
        props.className ?? "",
      ].join(" ")}
    >
      <TextInput
        placeholder="Ask me anything"
        value={props.prompt}
        onChangeText={props.onChangePromptText}
        className="flex-1 text-xl text-[Nunito]"
      />
      <TouchableWithoutFeedback onPress={props.onPromptSubmit}>
        <View className={"cursor-pointer ml-2"}>
          <FeatherIcon name="send" size={30} color="#000" />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default PromptSubmitForm;

PromptSubmitForm.propTypes = {
  disabled: PropTypes.bool.isRequired,
  prompt: PropTypes.string.isRequired,
  onChangePromptText: PropTypes.func.isRequired,
  onPromptSubmit: PropTypes.func.isRequired,
  className: PropTypes.string,
};
