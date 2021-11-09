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
import styles from "./reset-password.style.js";

const ResetPassword: () => React$Node = props => {
  const goBack = () => {
    props.navigation.goBack();
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

          <TextInput placeholder={"Password"} secureTextEntry />

          <View style={styles.inputFieldSeparator} />

          <TextInput placeholder={"Enter your password again"} secureTextEntry />

          <View style={styles.informationContainer}>
            <Text style={styles.passwordRequirementTitle}>Password requires</Text>

            <View style={styles.instructionContainer}>
              <View style={styles.instructionValidIcon} />
              <Text style={styles.passwordRequirement}>Have atleast 8 characters</Text>
            </View>
            <View style={styles.instructionContainer}>
              <View style={styles.instructionValidIcon} />
              <Text style={styles.passwordRequirement}>
                Have atleast 1 capital letter
              </Text>
            </View>
            <View style={styles.instructionContainer}>
              <View style={styles.instructionValidIcon} />
              <Text style={styles.passwordRequirement}>Have atleast 1 number</Text>
            </View>
          </View>
        </View>

        <View style={styles.footer}>
          <GradientButton
            onPress={() => {
              props.navigation.navigate("SIGNUP_IMAGE", {});
            }}
            text={"Continue"}
          />
        </View>
      </View>
    </Screen>
  );
};

export default ResetPassword;
