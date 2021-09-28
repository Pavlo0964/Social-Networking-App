import { Dimensions, StyleSheet } from "react-native";
const { width: SCREEN_WIDTH } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
  picture: {
    width: SCREEN_WIDTH - 30,
    flex: 1,
    borderRadius: 22,
    marginBottom: 40,
  },
});
