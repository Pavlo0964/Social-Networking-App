import { StyleSheet } from "react-native";
import { COLOR } from "@config";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 37,
    justifyContent: "space-between",
    paddingVertical: 20,
  },
  logoContainer: {
    alignItems: "center",
  },
  titleText: {
    fontSize: 20,
    color: "white",
    fontWeight: "600",
    textAlign: "center",
    top: -40,
  },
  bottomContentContainer: {},
  buttonContainer: {
    marginTop: 20,
  },
  termPolicyContainer: {
    marginTop: 25,
  },
  termPolicyText: {
    fontSize: 11,
    color: COLOR.TEXT_PRIMARY,
    textAlign: "center",
  },
  underline: {
    fontSize: 11,
    color: COLOR.TEXT_PRIMARY,
    textAlign: "center",
    textDecorationLine: "underline",
  },
});
