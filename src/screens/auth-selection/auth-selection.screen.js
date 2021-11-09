import React from "react";
import { View } from "react-native";
import { Image, SolidButton, GradientButton, Screen, Text } from "@components";
import styles from "./auth-selection.style.js";

const AuthSelection: () => React$Node = props => {
  const { t } = props;
  const navigateToLogin = () => {
    props.navigation.navigate("LOGIN", {});
  };

  const navigateToSignup = () => {
    props.navigation.navigate("SIGNUP_FIRST_NAME", {});
  };

  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={require("@assets/images/logo.png")} />
          <Text style={styles.titleText}>{t("authSelection.logoText")}</Text>
        </View>

        <View style={styles.bottomContentContainer}>
          <View style={styles.buttonContainer}>
            <GradientButton onPress={navigateToLogin} text={t("authSelection.login")} />
          </View>
          <View style={styles.buttonContainer}>
            <SolidButton onPress={navigateToSignup} text={t("authSelection.register")} />
          </View>

          <View style={styles.termPolicyContainer}>
            <Text style={styles.termPolicyText}>{t("authSelection.termsPolicy")}</Text>
            <Text style={styles.termPolicyText}>
              <Text style={styles.underline}>{t("authSelection.terms")}</Text>{" "}
              {t("authSelection.and")}{" "}
              <Text style={styles.underline}>{t("authSelection.policy")}</Text>
            </Text>
          </View>
        </View>
      </View>
    </Screen>
  );
};

export default AuthSelection;
