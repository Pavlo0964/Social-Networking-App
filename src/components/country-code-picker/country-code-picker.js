import React from "react";
import { View } from "react-native";
import { TouchableInput } from "@components";

const CountryCodePicker: () => React$Node = props => {
  return (
    <View>
      <TouchableInput {...props} />
    </View>
  );
};

export default CountryCodePicker;
