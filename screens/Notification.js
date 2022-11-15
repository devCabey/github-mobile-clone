import { View, Text, SafeAreaView, ScrollView, Button } from "react-native";
import React, { useLayoutEffect } from "react";
import NotificationNav from "../components/NotificationNav";
import NotificationItem from "../components/NotificationItem";
import { useNavigation } from "@react-navigation/native";

const Notification = () => {
  const navigator = useNavigation();
  useLayoutEffect(() => {
    navigator.setOptions({
      headerLeft: () => <Button title="Select"  />,
      headerTitle: "",
      headerShown: true,
    });
  }, []);
  return (
    <View className="bg-white flex-1">
      <SafeAreaView className="flex-1">
        <ScrollView className="flex-1">
          <View className="px-5  py-3 ">
            <Text className="text-3xl font-bold">Inbox</Text>
            <ScrollView className="flex-row mt-3  " horizontal>
              <NotificationNav title="Inbox" showChevron={true} route="Inbox" />
              <NotificationNav
                title="Unread"
                showChevron={false}
                route="NUnread"
              />
              <NotificationNav
                title="Repository"
                showChevron={true}
                route="NRepository"
              />
            </ScrollView>
          </View>
          <View className=" border-y mt-1 pt-1 border-b-gray-300 border-t-gray-500">
            <NotificationItem />
            <NotificationItem />
            <NotificationItem />
            <NotificationItem />
            <NotificationItem />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Notification;
