import { StyleSheet } from "react-native";
import { COLOR } from "@config";

export default StyleSheet.create({
  container: {
    margin: 0,
  },
  transparentContainer: {
    flex: 1,
  },
  datePickerContainer: {
    backgroundColor: COLOR.MODAL_BACKGROUND,
    paddingBottom: 20,
  },
  actionBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 0, 0, 0.3)",
  },
  actionBarButton: {
    paddingHorizontal: 18,
    paddingVertical: 8,
  },
  actionBarButtonText: {
    color: "blue",
    fontWeight: "bold",
  },
});
