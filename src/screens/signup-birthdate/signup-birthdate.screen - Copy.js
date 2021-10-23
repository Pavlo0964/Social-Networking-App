import React from "react";
import { Image, View } from "react-native";
import {
  DateTimePicker,
  GradientButton,
  ProgressBar,
  Screen,
  Text,
  Touchable,
} from "@components";
import styles from "./signup-birthdate.style.js";

const SignupFirstName: () => React$Node = props => {
  const goBack = () => {
    props.navigation.goBack();
  };
  const navigateNext = () => {
    props.navigation.navigate("SIGNUP_GENDER_SELECT", {});
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
            <Text style={styles.titleText}>When were you born?</Text>
            <DateTimePicker
              onChange={date => props.setBirthDate(date)}
              value={props.birthDate}
            />
          </View>

          <View style={styles.buttonContainer}>
            <GradientButton
              disabled={!props.birthDate}
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
