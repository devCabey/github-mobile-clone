import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import InboxModal from "../screens/InboxModal";
import Notification from "../screens/Notification";
import NotificationRepository from "../screens/NotificationRepository";
import NotificationUnread from "../screens/NotificationUnread";

const Stack = createNativeStackNavigator();

const NotificationStack = () => {
  return (
    <Stack.Navigator initialRouteName="Notification">
      <Stack.Screen component={Notification} name="Notification" />
      <Stack.Screen component={NotificationUnread} name="NUnread" />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen component={InboxModal} name="Inbox" />
        <Stack.Screen component={NotificationRepository} name="NRepository" />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default NotificationStack;
