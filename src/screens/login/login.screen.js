import React, { useEffect } from "react";
import { View } from "react-native";
import { BackButton, BorderButton, Screen, Text, Touchable } from "@components";
import LoginForm from "./login.form";
import styles from "./login.style.js";

const LoginScreen: () => React$Node = props => {
  const goBack = () => {
    props.navigation.goBack();
  };

  const onLogin = values => {
    props.login(values);
  };

  useEffect(() => {
    if (props.token) {
      alert("Login Success");
    }
  }, [props.token]);

  return (
    <Screen>
      <View style={styles.container}>
        <BackButton onPress={goBack} />
        <View style={styles.centeredContentContainer}>
          <Text style={styles.titleText}>Login</Text>
          <LoginForm isLoggingIn={props.isLoggingIn} onSubmit={onLogin} />
          <Text style={styles.orText}>OR</Text>

          <BorderButton text={"Login with phone number"} />

          <Touchable
            onPress={() => {
              props.navigation.navigate("FORGOT_PASSWORD", {});
            }}
            style={styles.forgotPasswordContainer}
          >
            <Text style={styles.forgotPasswordText}>Forgot Password</Text>
          </Touchable>
        </View>
      </View>
    </Screen>
  );
};

export default LoginScreen;
