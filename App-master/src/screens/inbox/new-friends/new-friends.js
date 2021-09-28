import React from "react";
import { FlatList, View } from "react-native";
import { Image, Text } from "@components";
import data from "./new-friends.json";
import LinearGradient from "react-native-linear-gradient";
import styles from "./new-friends.style";
import { GRADIENT } from "@config";

const NewFriends: () => React$Node = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{"New Friends!"}</Text>
      <FlatList
        horizontal
        style={styles.friendsList}
        contentContainerStyle={styles.friendsListContentContainerStyle}
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item: friend, index }) => (
          <View style={styles.friendItemContainer}>
            <Image source={require("./data/friend-1.png")} />
            {friend.favourite ? (
              <View style={styles.favouriteIcon}>
                <Image source={require("@assets/images/favourite.png")} />
              </View>
            ) : null}
            {friend.online ? (
              <View style={styles.onlineIconContainer}>
                <LinearGradient
                  colors={GRADIENT.FRIEND_ONLINE_ICON}
                  from={{ x: 0, y: 0 }}
                  to={{ x: 1, y: 0 }}
                  style={styles.onlineIcon}
                />
              </View>
            ) : null}
          </View>
        )}
        // ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
      />
    </View>
  );
};

export default NewFriends;
