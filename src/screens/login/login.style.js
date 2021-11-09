import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  centeredContentContainer: {
    justifyContent: "center",
    flex: 1,
    paddingHorizontal: 37,
  },
  titleText: {
    fontSize: 32,
    color: "white",
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 25,
  },
  inputFieldSeparator: {
    marginBottom: 24,
  },
  buttonContainer: {
    marginTop: 25,
  },
  orText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 11,
  },
  forgotPasswordContainer: {
    marginTop: 30,
    alignItems: "center",
  },
  forgotPasswordText: {
    fontSize: 14,
    color: "white",
    textDecorationLine: "underline",
  },
});
