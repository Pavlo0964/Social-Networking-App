import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
    paddingVertical: 20,
  },
  backButtonContainer: {
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  contentContainer: {
    flex: 1,
    paddingTop: 120,
    paddingHorizontal: 37,
  },
  titleText: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  subTitleText: {
    fontSize: 18,
    color: "rgba(255, 255, 255, 0.5)",
    fontWeight: "600",
    textAlign: "center",
    marginTop: 5,
    marginBottom: 40,
  },
  codeContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  codeInputStyle: {
    backgroundColor: "white",
    height: 42,
    color: "#9892A3",
    borderRadius: 25,
  },
  informationContainer: {
    alignItems: "center",
    marginTop: 25,
  },
  instructionText: {
    textAlign: "center",
    marginTop: 3,
    fontSize: 14,
    color: "rgba(255, 255, 255, 0.6)",
  },
  instructionContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  resendButtonContainer: {
    width: 200,
    marginTop: 10,
    marginBottom: 10,
  },
  footer: {
    marginTop: 40,
    paddingHorizontal: 37,
  },
});
