import { TouchableWithoutFeedback, View, Image } from "react-native";
import { TextInput } from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import PropTypes from "prop-types";

const PromptSubmitForm = (props) => {
  return (
    <View
      className={[
        "flex flex-row p-2 w-full ring border-2 mx-2 border-black  rounded-md ",
        props.className ?? "",
      ].join(" ")}
    >
      <TextInput
        value={props.prompt}
        onChangeText={props.onChangePromptText}
        className="flex-1 text-xl"
      />
      <TouchableWithoutFeedback onPress={props.onPromptSubmit}>
        <View className={"cursor-pointer mr-2"}>
          <FeatherIcon name="send" size={30} color="blue" />
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
