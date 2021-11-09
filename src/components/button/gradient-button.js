import React, { Component } from "react";
import { ActivityIndicator } from "react-native";
import { Text, Touchable } from "@components";
import styles from "./gradient-button.style";
import LinearGradient from "react-native-linear-gradient";
import { GRADIENT } from "@config";

class GradientButton extends Component {
  render() {
    var { onPress, text, disabled, loading } = this.props;

    return (
      <Touchable disabled={disabled} onPress={onPress}>
        <LinearGradient
          colors={disabled ? GRADIENT.BUTTON_DISABLED : GRADIENT.BUTTON}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.container}
        >
          {loading ? (
            <ActivityIndicator size={"small"} color={"white"} />
          ) : (
            <Text style={disabled ? styles.buttonTextDisabled : styles.buttonText}>
              {text}
            </Text>
          )}
        </LinearGradient>
      </Touchable>
    );
  }
}

export default GradientButton;
