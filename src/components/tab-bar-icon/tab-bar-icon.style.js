import { StyleSheet } from "react-native";
import { COLOR } from "@config";

export default StyleSheet.create({
  container: {
    backgroundColor: "#211533",
    alignItems: "center",
    width: 100,
    paddingVertical: 4,
    borderRadius: 25,
  },
  activeText: {
    color: COLOR.TEXT_PRIMARY,
    marginTop: 2,
  },
});
