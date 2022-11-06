import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const NotificationNav = ({ title, showChevron }) => {
  return (
    <TouchableOpacity className="flex-row space-x-1 px-2 py-1 mr-2  bg-gray-200 border border-gray-200 rounded-full justify-center  items-center">
      <Text className="">{title}</Text>
      {showChevron ? (
        <Ionicons name="ios-chevron-down-outline" color="#9e9e9e" size={20} />
      ) : (
        <></>
      )}
    </TouchableOpacity>
  );
};

export default NotificationNav;
