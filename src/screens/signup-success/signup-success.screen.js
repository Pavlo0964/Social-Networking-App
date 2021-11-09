import React from "react";
import { Image, View } from "react-native";
import { GradientButton, ProgressBar, Screen, Text, Touchable } from "@components";
import styles from "./signup-success.style.js";

const SignupSuccess: () => React$Node = props => {
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
          <Text style={styles.titleText}>Congratulations!</Text>
          <Text style={styles.subTitleText}>
            You've verified your account and can now use it.
          </Text>

          <View style={styles.successIconContainer}>
            <Image source={require("@assets/images/tick.png")} />
          </View>
        </View>

        <View style={styles.footer}>
          <GradientButton onPress={() => {}} title={"Get into PLUZO"} />
        </View>
      </View>
    </Screen>
  );
};

export default SignupSuccess;
