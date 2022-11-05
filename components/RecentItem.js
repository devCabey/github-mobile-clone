import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const RecentItem = () => {
  return (
    <TouchableOpacity className="flex-row space-x-2 bg-white rounded-lg p-5">
      <View>
        <Ionicons name="git-pull-request-outline" size={25} color="#3470fa" />
      </View>
      <View className="flex-1">
        <Text className="text-lg text-gray-500">
          ExpressInstructor..engineeree #10
        </Text>
        <Text className="text-lg">@feature/messaging-setup</Text>
        <Text className="text-gray-500">You created</Text>
      </View>
      <Text className="text-lg text-gray-500">1d</Text>
    </TouchableOpacity>
  );
};

export default RecentItem;
