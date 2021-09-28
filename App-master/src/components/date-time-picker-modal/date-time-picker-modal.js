import React, { useState } from "react";
import { Platform, View } from "react-native";
import { Text, Touchable } from "@components";
import Modal from "react-native-modal";
import DateTimePicker from "@react-native-community/datetimepicker";

import styles from "./date-time-picker-modal.style";

const DateTimePickerModal: () => React$Node = props => {
  const { isVisible, ...rest } = props;
  const [selectedDate, setDate] = useState(new Date());

  return Platform.OS === "ios" ? (
    <Modal style={styles.container} isVisible={props.isVisible}>
      <View style={styles.transparentContainer} />
      <View style={styles.datePickerContainer}>
        <View style={styles.actionBar}>
          <Touchable onPress={props.onCancel}>
            <View style={styles.actionBarButton}>
              <Text style={styles.actionBarButtonText}>{"Cancel"}</Text>
            </View>
          </Touchable>
          <Touchable onPress={() => props.onConfirm && props.onConfirm(selectedDate)}>
            <View style={styles.actionBarButton}>
              <Text style={styles.actionBarButtonText}>{"Done"}</Text>
            </View>
          </Touchable>
        </View>
        <DateTimePicker
          testID='dateTimePicker'
          value={selectedDate}
          onChange={(event, date) => setDate(date)}
          {...rest}
        />
      </View>
    </Modal>
  ) : (
    !!isVisible && (
      <DateTimePicker
        testID='dateTimePicker'
        value={selectedDate}
        onChange={(event, date) => props.onConfirm && props.onConfirm(date)}
        {...rest}
      />
    )
  );
};

export default DateTimePickerModal;
