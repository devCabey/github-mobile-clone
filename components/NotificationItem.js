import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const NotificationItem = ({ data }) => {
  const navigator = useNavigation();

  return (
    <TouchableOpacity
      className="flex-row space-x-4 mx-5 justify-center"
      onPress={() => navigator.navigate("NContent", data)}
    >
      <Ionicons name="md-git-merge-outline" size={24} color="#7930f0" />
      <View className="flex-row flex-1 border-b border-gray-500 pb-2">
        <View className="flex-1 space-y-1">
          <Text className="text-gray-500 text-lg font-light">
            ExpressInstructor/engine-retro #4
          </Text>
          <Text className="text-lg">@feature/graphql</Text>
          <View className="flex-row space-x-1 items-center">
            <Image
              source={{ uri: "https://links.papareact.com/wru" }}
              className="h-5 w-5 rounded-full "
            />
            <Text className="text-sm text-gray-500">
              Merged #4 into develop
            </Text>
          </View>
        </View>
        <Text className="text-gray-500">4mo</Text>
      </View>
    </TouchableOpacity>
  );
};

export default NotificationItem;
