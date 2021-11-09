import React from "react";
import { View, SafeAreaView } from "react-native";
import { Image, Text, Touchable } from "@components";
import styles from "./header.style";

const Header: () => React$Node = props => {
  return (
    <View style={styles.headerContainer}>
      <SafeAreaView>
        <View style={styles.header}>
          <View style={styles.backButtonContainer}>
            <Touchable style={styles.backButtonTouchable}>
              <Image source={require("@assets/images/chevron-left.png")} />
            </Touchable>
          </View>
          <View style={styles.headerContentContainer}>
            <Text style={styles.headerTitle}>{"@larac.97"}</Text>
          </View>
          <View style={styles.reportButtonContainer}>
            <Touchable style={styles.reportButtonTouchable}>
              <Image source={require("@assets/images/report.png")} />
            </Touchable>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Header;
