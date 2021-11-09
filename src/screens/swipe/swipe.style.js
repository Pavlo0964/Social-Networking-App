import { StyleSheet } from "react-native";
import { COLOR } from "@config";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  card: {
    flex: 1,
    borderRadius: 4,
    // borderWidth: 2,
    // borderColor: "#E8E8E8",
    justifyContent: "center",
    backgroundColor: "white",
  },
  cardImage: {
    flex: 1,
  },
  topActions: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    paddingBottom: 50,
  },
  topActionRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  topRowMargin: {
    marginTop: 20,
  },
  topRowMarginSmall: {
    marginTop: 8,
  },
  onlineStatus: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 5,
  },
  topBarName: {
    fontSize: 26,
    fontWeight: "600",
    color: COLOR.TEXT_PRIMARY,
  },
  topBarLocation: {
    fontSize: 10,
    color: COLOR.TEXT_SECONDARY_2,
    marginLeft: 5,
  },
  flexSpace: {
    flex: 1,
  },
  bottomActions: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
  },
  iconHeart: {
    // width: 100,
    // height: 100,
    // backgroundColor: "pink",
  },
  buttonRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 20,
  },
  buttonRowMargin: {
    marginBottom: 40,
    marginTop: 20,
  },
  buttonSmall: {
    marginHorizontal: 10,
  },
});
