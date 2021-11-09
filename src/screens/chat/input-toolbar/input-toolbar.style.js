import { StyleSheet } from "react-native";
import { COLOR } from "@config";
import { FontHelper } from "@helpers";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.MESSAGE_INPUT_TOOLBAR_BACKGROUND,
    borderTopWidth: 1,
  },
  safeAreaContainer: {
    flex: 1,
  },
  contentContainer: {
    flexDirection: "row",
    flex: 1,
  },
  attachmentsButtonContainer: {
    paddingHorizontal: 10,
  },
  attachmentIcon: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
    justifyContent: "center",
    alignItems: "center",
  },
  inputFieldContainer: {
    flex: 1,
    flexDirection: "row",
    height: 35,
    borderRadius: 25,
    backgroundColor: "white",
    paddingHorizontal: 15,
    marginRight: 10,
  },
  inputField: FontHelper.font({
    flex: 1,
    fontSize: 12,
    fontWeight: "600",
    color: COLOR.SEARCH_INPUT_TEXT,
    backgroundColor: "white",
  }),
});
