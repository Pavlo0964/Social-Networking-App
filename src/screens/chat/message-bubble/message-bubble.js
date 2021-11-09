import React from "react";
import { View } from "react-native";
import { Image, Text } from "@components";
import styles from "./message-bubble.style.js";

const MessageBubble: () => React$Node = props => {
  const { currentMessage, user } = props;
  const isCurrentUser = currentMessage.user._id === user._id;
  const hasImage = currentMessage.image ? true : false;

  return (
    <View style={styles.container}>
      {hasImage ? (
        <Image
          source={{ uri: currentMessage.image + " asd " }}
          style={styles.messageImage}
          resizeMode={"cover"}
        />
      ) : null}
      <View
        style={[
          styles.textContainer,
          isCurrentUser ? styles.currentUserTextContainer : styles.otherUserTextContainer,
        ]}
      >
        <Text
          style={[
            styles.text,
            isCurrentUser ? styles.currentUserText : styles.otherUserText,
          ]}
        >
          {currentMessage.text}
        </Text>
      </View>
    </View>
  );
};

export default MessageBubble;
