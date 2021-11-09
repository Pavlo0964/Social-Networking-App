import React from "react";
import { View, TextInput as RNTextInput } from "react-native";
import { Image } from "@components";
import styles from "./search-input.style";
import { COLOR } from "@config";

const SearchInput: () => React$Node = prop => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Image source={require("@assets/images/search.png")} />
      </View>
      <RNTextInput
        placeholder={"Search"}
        placeholderTextColor={COLOR.TEXT_INPUT_BACKGROUND}
        style={styles.inputField}
      />
    </View>
  );
};

export default SearchInput;
