import React from "react";
import { Image, View } from "react-native";
import { GradientButton, ProgressBar, Screen, Text, Touchable } from "@components";
import CodeInput from "react-native-confirmation-code-input";
import styles from "./reset-password-code-verification.style.js";

const ResetPasswordCodeVerification: () => React$Node = props => {
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
          <Text style={styles.titleText}>Check your messages.</Text>
          <Text style={styles.subTitleText}>
            We've sent you a verification code to ensure you are you.
          </Text>

          <View style={styles.codeContainer}>
            <CodeInput
              className={"border-b"}
              codeLength={4}
              space={10}
              size={68}
              inputPosition='center'
              onFulfill={code => {}}
              activeColor={"#9892A3"}
              cellBorderWidth={0}
              codeInputStyle={styles.codeInputStyle}
            />
          </View>

          <View style={styles.informationContainer}>
            <View style={styles.instructionContainer}>
              <Text style={styles.instructionText}>Didn't receive it?</Text>
            </View>

            <View style={styles.resendButtonContainer}>
              <GradientButton text={"Resend"} />
            </View>

            <View style={styles.instructionContainer}>
              <Text style={styles.instructionText}>60</Text>
            </View>
          </View>
        </View>

        <View style={styles.footer}>
          <GradientButton
            onPress={() => {
              props.navigation.navigate("RESET_PASSWORD", {});
            }}
            text={"Change password"}
          />
        </View>
      </View>
    </Screen>
  );
};

export default ResetPasswordCodeVerification;
