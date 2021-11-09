import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  safeAreaContainer: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    height: 70,
    paddingHorizontal: 20,
  },
  searchFieldContainer: {
    flex: 1,
    justifyContent: "center",
  },
  newChatIconContainer: {
    width: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  contentContainer: {
    flex: 1,
  },
  separator: {
    height: 1,
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    marginTop: 20,
  },
});
