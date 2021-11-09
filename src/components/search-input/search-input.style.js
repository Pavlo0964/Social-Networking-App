import { StyleSheet } from "react-native";
import { FontHelper } from "@helpers";
import { COLOR } from "@config";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 35,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: COLOR.SEARCH_INPUT_BORDER,
  },
  iconContainer: {
    width: 30,
    justifyContent: "center",
    alignItems: "flex-end",
    paddingRight: 5,
    paddingTop: 1,
  },
  inputField: FontHelper.font({
    flex: 1,
    fontSize: 12,
    fontWeight: "600",
    color: COLOR.SEARCH_INPUT_TEXT,
  }),
});
