import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import InboxModal from "../screens/InboxModal";
import Notification from "../screens/Notification";
import NotificationRepository from "../screens/NotificationRepository";
import NotificationUnread from "../screens/NotificationUnread";
import NotificationContent from "../screens/NotificationContent";

const Stack = createNativeStackNavigator();

const NotificationStack = () => {
  return (
    <Stack.Navigator initialRouteName="Notification">
      <Stack.Screen component={Notification} name="Notification" />
      <Stack.Screen component={NotificationContent} name="NContent" />
      <Stack.Screen component={NotificationUnread} name="NUnread" />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen component={InboxModal} name="Inbox" />
        <Stack.Screen component={NotificationRepository} name="NRepository" />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default NotificationStack;
