import React from "react";
import PropTypes from "prop-types";
import { MESSAGE_TYPE } from "../../constants";
import LoadingBotMessageSkeleton from "./LoadingBotMessageSkeleton";
import TextMessage from "./TextMessage";

// MESSAGE_TYPE.SKELETON returns skeleton message component with no props
// MESSAGE_TYPE.TEXT returns TextMessage component with message props having text and sender fields and optional className field
const Message = (props) => {
  if (props.type === MESSAGE_TYPE.SKELETON) {
    return <LoadingBotMessageSkeleton />;
  } else {
    return <TextMessage message={props.message} />;
  }
};

export default Message;

Message.propTypes = {
  type: PropTypes.oneOf([MESSAGE_TYPE.SKELETON, MESSAGE_TYPE.TEXT]).isRequired,
};

Message.defaultProps = {
  type: MESSAGE_TYPE.TEXT,
};