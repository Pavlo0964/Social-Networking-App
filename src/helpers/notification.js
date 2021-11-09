import { Alert } from "react-native";

export class Notification {
  static alert(title = "", message, config, onPress = () => {}) {
    Alert.alert(title, message, [{ text: "OK", onPress: onPress }]);
  }
}
