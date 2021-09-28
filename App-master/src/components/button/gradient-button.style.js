import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    height: 45,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    lineHeight: 30,
    color: "white",
  },
  buttonTextDisabled: {
    fontSize: 18,
    fontWeight: "bold",
    lineHeight: 30,
    color: "rgba(200, 200, 200, 1)",
  },
});
