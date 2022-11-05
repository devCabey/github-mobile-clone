import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { ChevronRightIcon } from "react-native-heroicons/outline";

const HomeNav = ({ icon, color, name }) => {
  return (
    <TouchableOpacity className="flex-row  items-center pt-3 ">
      <View
        className={`p-2 rounded-md mr-3 `}
        style={{ backgroundColor: color }}
      >
        {icon}
      </View>
      <View className="flex-1 flex-row border-b border-gray-300 items-center pr-3 pb-3">
        <Text className="flex-1 text-sm">{name}</Text>
        <ChevronRightIcon size={20} color="#9a9a9a" />
      </View>
    </TouchableOpacity>
  );
};

export default HomeNav;