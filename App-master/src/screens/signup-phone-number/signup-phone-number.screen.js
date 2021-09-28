import React, { useState, useEffect } from "react";
import { View } from "react-native";
import {
  BackButton,
  GradientButton,
  ProgressBar,
  Screen,
  Text,
  TextInput,
} from "@components";
import { Notification } from "@helpers";
import styles from "./signup-phone-number.style.js";

const SignupPhoneNumber: () => React$Node = props => {
  const [phoneCode, setPhoneCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const { setPhoneNumber: setPhoneNumberAction } = props;

  const goBack = () => {
    props.navigation.goBack();
  };
  const registerAccount = () => {
    props.requestRegistration();
  };

  useEffect(() => {
    setPhoneNumberAction(phoneCode + " " + phoneNumber);
  }, [phoneCode, phoneNumber, setPhoneNumberAction]);

  useEffect(() => {
    if (props.token) {
      Notification.alert("Signup Success", "Your account has been created", null, () => {
        props.logout();
        props.navigation.popToTop();
      });
    }
  }, [props.token, props.navigation, props]);

  return (
    <Screen>
      <View style={styles.container}>
        <ProgressBar />
        <BackButton onPress={goBack} disabled={props.isRegistring} />
        <View style={styles.contentContainer}>
          <Text style={styles.titleText}>What is your phone number?</Text>

          <View style={styles.phoneContainer}>
            <View style={styles.phoneCodeContainer}>
              <Text style={styles.phoneLabel}>PHONE CODE</Text>
              <TextInput
                value={phoneCode}
                onChangeText={setPhoneCode}
                placeholder={"Code"}
              />
            </View>
            <View style={styles.phoneSeparator} />
            <View style={styles.phoneNumberContainer}>
              <TextInput
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                placeholder={"Your phone number"}
              />
            </View>
          </View>

          <View style={styles.informationContainer}>
            <View style={styles.instructionContainer}>
              <Text style={styles.instructionText}>
                We need your phone number solely for the login. Your number won't be
                visible for others.
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.footer}>
          <GradientButton
            loading={props.isRegistring}
            disabled={!phoneNumber || !phoneCode}
            onPress={registerAccount}
            text={"Create Account"}
          />
        </View>
      </View>
    </Screen>
  );
};

export default SignupPhoneNumber;
