import React from "react";
import { ImageBackground, SafeAreaView, View } from "react-native";
import styles from "./screen.style";

const Screen: () => React$Node = props => {
  const ContainerComponent = props.hasHeader ? View : SafeAreaView;

  return (
    <ImageBackground
      source={require("@assets/images/bg.png")}
      style={styles.imageBackground}
    >
      <ContainerComponent style={[styles.container, props.style]}>
        {props.children}
      </ContainerComponent>
    </ImageBackground>
  );
};

export { Screen };
