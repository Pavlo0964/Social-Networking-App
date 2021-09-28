import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
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
    fontSize: 20,
    color: "rgba(255, 255, 255, 0.5)",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 40,
  },
  imageUploadContainer: {
    alignSelf: "center",
  },
  imageContainer: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: "white",
    alignSelf: "center",
    marginHorizontal: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  imageSeparator: {
    height: 25,
  },
  footer: {
    marginTop: 40,
    paddingHorizontal: 37,
  },
});
