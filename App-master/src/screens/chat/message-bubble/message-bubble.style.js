import { StyleSheet, Dimensions } from "react-native";
import { COLOR } from "@config";
const { width: SCREEN_WIDTH } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    maxWidth: SCREEN_WIDTH * 0.7,
  },
  textContainer: {
    borderRadius: 20,
    paddingTop: 10,
    paddingBottom: 12,
    paddingLeft: 14,
    paddingRight: 35,
    top: -15,
  },
  otherUserTextContainer: {
    borderBottomLeftRadius: 10,
    backgroundColor: COLOR.MESSAGE_BUBBLE_BACKGROUND,
  },
  currentUserTextContainer: {
    borderBottomRightRadius: 10,
    backgroundColor: COLOR.MESSAGE_BUBBLE_BACKGROUND_USER,
  },
  text: {
    fontSize: 12,
    fontWeight: "600",
    lineHeight: 16,
  },
  otherUserText: {
    color: COLOR.MESSAGE_BUBBLE_TEXT,
  },
  currentUserText: {
    color: COLOR.MESSAGE_BUBBLE_TEXT_USER,
  },
  messageImage: {
    width: SCREEN_WIDTH * 0.7,
    height: SCREEN_WIDTH * 0.55,
    backgroundColor: COLOR.HEADER_BACKGROUND,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
