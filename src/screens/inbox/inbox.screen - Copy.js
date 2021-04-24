import React, { Component } from "react";
import { SafeAreaView, View } from "react-native";
import { Image, SearchInput, Touchable } from "@components";
import LinearGradient from "react-native-linear-gradient";
import { GRADIENT } from "@config";
import NewFriends from "./new-friends";
import Messages from "./messages";

import styles from "./inbox.style.js";

class Inbox extends Component {
  render() {
    return (
      <LinearGradient
        colors={GRADIENT.SCREEN_BACKGROUND}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.container}
      >
        <SafeAreaView style={styles.safeAreaContainer}>
          <View style={styles.header}>
            <View style={styles.searchFieldContainer}>
              <SearchInput />
            </View>

            <View style={styles.newChatIconContainer}>
              <Touchable>
                <Image source={require("@assets/images/new-chat.png")} />
              </Touchable>
            </View>
          </View>
          <View style={styles.contentContainer}>
            <NewFriends />
            <View style={styles.separator} />
            <Messages onPressItem={() => this.props.navigation.navigate("CHAT", {})} />
          </View>
        </SafeAreaView>
      </LinearGradient>
    );
  }
}

export default Inbox;
