import { StyleSheet } from "react-native";
import { FontHelper } from "@helpers";
import { COLOR } from "@config";

export default StyleSheet.create({
  container: {
    borderRadius: 50,
    height: 45,
    backgroundColor: COLOR.TEXT_INPUT_BACKGROUND,
  },
  touchableInputContainer: {
    flex: 1,
    flexDirection: "row",
    paddingLeft: 16,
    paddingRight: 16.96,
    paddingBottom: 2,
    paddingTop: 2,
    justifyContent: "space-between",
  },
  placeholderContainer: {
    position: "absolute",
    right: 0,
    left: 0,
    zIndex: 1,
    flexDirection: "row",
  },
  placeholder: FontHelper.font({
    paddingLeft: 1,
    fontSize: 14,
    fontWeight: "700",
    color: COLOR.TEXT_INPUT_PLACEHOLDER,
  }),
  inputFieldContainer: {
    flexDirection: "row",
    flex: 1,
    paddingTop: 20,
  },
  inputField: FontHelper.font({
    flex: 1,
    fontSize: 14,
    fontWeight: "600",
    color: COLOR.TEXT_INPUT,
    paddingTop: 0,
    paddingBottom: 5,
    paddingLeft: 0,
  }),
  iconContainer: {
    justifyContent: "center",
    paddingLeft: 5,
  },
});
