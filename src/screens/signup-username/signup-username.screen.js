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
import styles from "./signup-username.style.js";
// import validator from "validator";
function hasUpperCase(str) {
  return /[A-Z]/.test(str);
}
function hasNumber(str) {
  return /[0-9]/.test(str);
}

const SignupUsername: () => React$Node = props => {
  const goBack = () => {
    props.navigation.goBack();
  };
  const navigateNext = () => {
    props.navigation.navigate("SIGNUP_IMAGE", {});
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
          <Text style={styles.titleText}>
            Select your username and choose a password.
          </Text>

          <TextInput
            onChangeText={text => props.setUsername(text)}
            value={props.username}
            placeholder={"Username"}
          />

          <View style={styles.inputFieldSeparator} />

          <TextInput
            onChangeText={text => props.setPassword(text)}
            value={props.password}
            placeholder={"Password"}
            secureTextEntry
          />

          <View style={styles.informationContainer}>
            <Text style={styles.passwordRequirementTitle}>Password requires</Text>

            <View style={styles.instructionContainer}>
              <View
                style={
                  props.password.length >= 8
                    ? styles.instructionValidIcon
                    : styles.instructionInvalidIcon
                }
              />
              <Text style={styles.passwordRequirement}>Have atleast 8 characters</Text>
            </View>
            <View style={styles.instructionContainer}>
              <View
                style={
                  hasUpperCase(props.password)
                    ? styles.instructionValidIcon
                    : styles.instructionInvalidIcon
                }
              />
              <Text style={styles.passwordRequirement}>
                Have atleast 1 capital letter
              </Text>
            </View>
            <View style={styles.instructionContainer}>
              <View
                style={
                  hasNumber(props.password)
                    ? styles.instructionValidIcon
                    : styles.instructionInvalidIcon
                }
              />
              <Text style={styles.passwordRequirement}>Have atleast 1 number</Text>
            </View>
          </View>
        </View>

        <View style={styles.footer}>
          <GradientButton
            disabled={
              !props.username ||
              !props.password ||
              props.password.length < 8 ||
              !hasUpperCase(props.password) ||
              !hasNumber(props.password)
            }
            onPress={navigateNext}
            text={"Continue"}
          />
        </View>
      </View>
    </Screen>
  );
};

export default SignupUsername;
