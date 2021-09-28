import React, { useEffect } from "react";
import { Platform, View } from "react-native";
import { Screen } from "@components";
import Header from "./header";
import { GiftedChat } from "react-native-gifted-chat";
import KeyboardManager from "react-native-keyboard-manager";
import MessageBubble from "./message-bubble";
import Avatar from "./avatar";
import InputToolbar from "./input-toolbar";

import styles from "./chat.style";

const messages = [
  {
    _id: 1,
    text:
      "Hi, how are you? Typing this really long message just to test Pluzo development. A long message will just help me test what happens when something this long gets sent.",
    createdAt: new Date(),
    user: {
      _id: 2,
      name: "React Native",
    },
  },
  {
    _id: 2,
    text:
      "HELLOOOO! Typing this really long message just to test Pluzo development. A long message will just help me test what happens when something this long gets sent.",
    createdAt: new Date(),
    image: "https://placeimg.com/640/640/any",
    user: {
      _id: 1,
      name: "React Native",
      avatar: "https://placeimg.com/140/140/any",
    },
  },
];

const Chat: () => React$Node = props => {
  useEffect(() => {
    if (Platform.OS === "ios") {
      KeyboardManager.setKeyboardDistanceFromTextField(0);
      KeyboardManager.setEnable(false);
    }

    return () => {
      if (Platform.OS === "ios") {
        KeyboardManager.setKeyboardDistanceFromTextField(65);
        KeyboardManager.setEnable(true);
      }
    };
  });

  return (
    <Screen hasHeader style={styles.container}>
      <Header />
      <View style={styles.body}>
        <GiftedChat
          messages={messages}
          isTyping={true}
          isKeyboardInternallyHandled={true}
          renderBubble={bubbleProps => (
            <MessageBubble
              {...bubbleProps}
              onLongPress={this._onOpenActionSheet}
              onPress={this._openAttachment}
            />
          )}
          renderAvatar={avatarProps => {
            return <Avatar {...avatarProps} />;
          }}
          renderInputToolbar={InputToolbar}
          user={{
            _id: 2,
          }}
        />
      </View>
    </Screen>
  );
};

export default Chat;
