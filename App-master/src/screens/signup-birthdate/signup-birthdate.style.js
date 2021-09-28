import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 20,
  },
  backButtonContainer: {
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 37,
  },
  titleFieldContainer: {
    flex: 1,
    paddingTop: 120,
  },
  titleText: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 50,
  },
  selectedDateContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    marginTop: 40,
  },
});
