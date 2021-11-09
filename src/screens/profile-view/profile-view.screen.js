import React from "react";
import { View } from "react-native";
import { Image } from "@components";
import Header from "./header";
import LinearGradient from "react-native-linear-gradient";
import { GRADIENT } from "@config";
import styles from "./profile-view.style";

const ProfileView: () => React$Node = props => {
  return (
    <LinearGradient
      colors={GRADIENT.SCREEN_BACKGROUND}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      <Header />
      <View style={styles.contentContainer}>
        <Image
          resizeMode={"cover"}
          style={styles.picture}
          source={{ uri: "https://placeimg.com/1080/1080/any" }}
        />
      </View>
    </LinearGradient>
  );
};

export default ProfileView;
