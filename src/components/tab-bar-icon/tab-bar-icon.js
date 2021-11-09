import React from "react";
import { View } from "react-native";
import { Image, Text } from "@components";
import styles from "./tab-bar-icon.style";

const TabBarIcon: () => React$Node = props => {
  console.log(props);

  return (
    <View style={styles.container}>
      <Image source={require("@assets/images/chat.png")} />
      <Text style={styles.activeText}>{props.name}</Text>
    </View>
  );
};

export default TabBarIcon;
