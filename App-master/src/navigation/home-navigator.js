import React from "react";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { TabBarIcon } from "@components";
import Inbox from "../screens/inbox";

// export const HomeNavigator = null;
export const HomeNavigator = createBottomTabNavigator(
  {
    INBOX_TAB: {
      screen: Inbox,
      navigationOptions: {
        tabBarIcon: props => <TabBarIcon {...props} name='Chat' />,
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: "red",
      inactiveTintColor: "grey",
      showLabel: false,
      labelStyle: {
        // fontFamily: "Lato-Bold",
        fontSize: 11,
      },
      style: {
        backgroundColor: "#0B0516",
        shadowOpacity: 0.05,
        shadowRadius: 5,
        borderTopWidth: 0,
        elevation: 15,
      },
    },
  },
);
