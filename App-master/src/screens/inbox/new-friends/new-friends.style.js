import { StyleSheet } from "react-native";
import { COLOR } from "@config";

export default StyleSheet.create({
  container: {},
  title: {
    fontSize: 14,
    fontWeight: "700",
    color: COLOR.TEXT_PRIMARY,
    marginLeft: 13,
  },
  friendsList: {
    marginTop: 10,
  },
  friendsListContentContainerStyle: {
    paddingHorizontal: 13,
  },
  itemSeparator: {
    width: 10,
  },
  friendItemContainer: {
    paddingHorizontal: 5,
    paddingBottom: 5,
  },
  onlineIconContainer: {
    position: "absolute",
    right: 0,
    bottom: 0,
    width: 20,
    height: 20,
    borderRadius: 20,
    backgroundColor: COLOR.FRIEND_ONLINE_ICON_BACKGROUND,
    justifyContent: "center",
    alignItems: "center",
  },
  onlineIcon: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  favouriteIcon: {
    position: "absolute",
    bottom: -9,
    alignSelf: "center",
  },
});
