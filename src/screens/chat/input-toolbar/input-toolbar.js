import React from "react";
import { SafeAreaView, TextInput as RNTextInput, View } from "react-native";
import { Image } from "@components";
import styles from "./input-toolbar.style";
import LinearGradient from "react-native-linear-gradient";

const InputToolbar: () => React$Node = props => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeAreaContainer}>
        <View style={styles.contentContainer}>
          <View style={styles.attachmentsButtonContainer}>
            <LinearGradient
              colors={["#02FFF3", "#617FFF"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.attachmentIcon}
            >
              <Image source={require("@assets/images/message-attachment-icon.png")} />
            </LinearGradient>
            {/*<Image style={{backgroundColor: "white"}} source={require("@assets/images/message-attachment.png")} /> */}
          </View>
          <View style={styles.inputFieldContainer}>
            <RNTextInput
              placeholder={"Search"}
              // placeholderTextColor={COLOR.TEXT_INPUT_BACKGROUND}
              style={styles.inputField}
            />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default InputToolbar;
