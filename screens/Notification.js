import { View, Text, SafeAreaView, ScrollView, Button } from "react-native";
import React, { useLayoutEffect } from "react";
import NotificationNav from "../components/NotificationNav";
import NotificationItem from "../components/NotificationItem";
import { useNavigation } from "@react-navigation/native";

const Notification = () => {
  const navigator = useNavigation();
  useLayoutEffect(() => {
    navigator.setOptions({
      headerLeft: () => <Button title="Select" className="ml-5" />,
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
              <NotificationNav title="Inbox" showChevron={true} />
              <NotificationNav title="Unread" showChevron={false} />
              <NotificationNav title="Repository" showChevron={true} />
            </ScrollView>
          </View>
          <View className=" border-y mt-1 pt-1 border-gray-500">
            <NotificationItem />
            <NotificationItem />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Notification;
