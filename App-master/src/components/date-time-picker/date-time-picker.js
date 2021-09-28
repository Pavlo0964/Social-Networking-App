import React, { useState } from "react";
import { View } from "react-native";
import { TouchableInput, DateTimePickerModal } from "@components";
import { Format } from "@helpers";

const DateTimePicker: () => React$Node = props => {
  const [isVisible, setVisibility] = useState(props.visible);

  return (
    <View>
      <TouchableInput
        isFloatingLabel={false}
        onPress={() => setVisibility(true)}
        placeholder={"Select Date"}
        value={props.value ? Format.date(props.value, "MMMM DD YYYY") : null}
      />
      <DateTimePickerModal
        isVisible={isVisible}
        mode={"date"}
        is24Hour={true}
        display='spinner'
        onConfirm={date => {
          console.log("SELECTED DATE: ", date);
          props.onChange && props.onChange(date);
          setVisibility(false);
        }}
        onCancel={() => {
          setVisibility(false);
        }}
      />
    </View>
  );
};

export default DateTimePicker;
