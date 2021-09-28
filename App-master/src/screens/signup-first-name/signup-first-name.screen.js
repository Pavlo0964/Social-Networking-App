import React from "react";
import { Image, View } from "react-native";
import {
  GradientButton,
  ProgressBar,
  Screen,
  Text,
  TextInput,
  Touchable,
} from "@components";
import styles from "./signup-first-name.style.js";

const SignupFirstName: () => React$Node = props => {
  const goBack = () => {
    props.navigation.goBack();
  };
  const navigateNext = () => {
    props.navigation.navigate("SIGNUP_BIRTH_DATE", {});
  };

  return (
    <Screen>
      <View style={styles.container}>
        <ProgressBar />
        <Touchable onPress={goBack}>
          <View style={styles.backButtonContainer}>
            <Image source={require("@assets/images/chevron-left.png")} />
          </View>
        </Touchable>
        <View style={styles.contentContainer}>
          <View style={styles.titleFieldContainer}>
            <Text style={styles.titleText}>What's your first name?</Text>

            <TextInput
              value={props.firstName}
              onChangeText={text => {
                props.setFirstName(text);
              }}
              placeholder={"First name"}
            />
          </View>

          <View style={styles.buttonContainer}>
            <GradientButton
              disabled={!props.firstName}
              onPress={navigateNext}
              text={"Continue"}
            />
          </View>
        </View>
      </View>
    </Screen>
  );
};

export default SignupFirstName;
