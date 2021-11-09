import { StyleSheet } from "react-native";
import { COLOR } from "@config";

export default StyleSheet.create({
  headerContainer: {
    backgroundColor: COLOR.HEADER_BACKGROUND,
  },
  header: {
    height: 60,
    flexDirection: "row",
  },
  backButtonContainer: {
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  backButtonTouchable: {
    width: 35,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
  },
  headerContentContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  headerImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginHorizontal: 10,
  },
  headerTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: COLOR.TEXT_PRIMARY,
  },
  reportButtonContainer: {
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  reportButtonTouchable: {
    width: 35,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
  },
});
