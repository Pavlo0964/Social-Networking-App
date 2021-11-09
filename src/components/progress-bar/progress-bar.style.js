import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 10,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    alignItems: "center",
    paddingHorizontal: 4,
  },
  gradientFill: {
    width: "20%",
    height: 2,
  },
  remainingFill: {
    flex: 1,
    backgroundColor: "white",
    height: 2,
  },
  separator: {
    width: 4,
  },
});
