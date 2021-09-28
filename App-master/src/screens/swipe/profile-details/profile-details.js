import React from "react";
import { View } from "react-native";
import { Image, Text, Touchable } from "@components";
import LinearGradient from "react-native-linear-gradient";
import { GRADIENT } from "@config";

import styles from "./profile-details.style";

const ProfileDetails: () => React$Node = props => {
  return (
    <LinearGradient
      colors={GRADIENT.SCREEN_BACKGROUND}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      <Touchable style={styles.closeButton}>
        <Image source={require("@assets/images/swipe-screen/swipe-arrow-up.png")} />
      </Touchable>
      <View style={styles.row}>
        <Text style={styles.largeText}>Lara Cruse</Text>
        <LinearGradient
          colors={GRADIENT.BUTTON}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={styles.onlineStatus}
        />
        <Text style={styles.largeText}>21</Text>
        <View style={styles.flexSpace} />
        <Image source={require("@assets/images/swipe-screen/info.png")} />
        <LinearGradient
          colors={GRADIENT.BUTTON}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={styles.followerContainer}
        >
          <Text style={styles.followerCount}>10</Text>
          <Text style={styles.followerUnit}>MI</Text>
        </LinearGradient>
      </View>
      <View style={[styles.row, styles.rowMarginTop]}>
        <Image source={require("@assets/images/swipe-screen/location.png")} />
        <Text style={styles.smallText}>LOS ANGELES, CALIFORNIA</Text>
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionText}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
          tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
        </Text>
      </View>
      <View style={[styles.buttonRow, styles.buttonRowMargin]}>
        <Touchable>
          <Image source={require("@assets/images/swipe-screen/swipe-cross.png")} />
        </Touchable>
        <Touchable>
          <Image source={require("@assets/images/swipe-screen/swipe-star.png")} />
        </Touchable>
        <Touchable>
          <Image source={require("@assets/images/swipe-screen/swipe-heart.png")} />
        </Touchable>
      </View>
    </LinearGradient>
  );
};

export default ProfileDetails;
