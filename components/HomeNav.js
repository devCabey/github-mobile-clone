import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { ChevronRightIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";

const HomeNav = ({ icon, color, name, route, length }) => {
  const navigator = useNavigation();
  return (
    <TouchableOpacity
      className="flex-row  items-center space-x-3  h-14 pr-1"
      onPress={() => navigator.navigate(route)}
    >
      <View
        className="rounded-md  h-7 w-7  flex justify-center items-center mb-4"
        style={{ backgroundColor: color }}
      >
        {icon}
      </View>
      <View className="flex-1 flex-row  border-gray-300 border-b pb-4 items-center  space-x-2">
        <Text className="flex-1 " style={{ fontSize: 15 }}>
          {name}
        </Text>
        {length ? (
          <Text className="text-gray-500" style={{ fontSize: 15 }}>
            {length}
          </Text>
        ) : (
          <></>
        )}
        <ChevronRightIcon size={20} color="#9a9a9a" />
      </View>
    </TouchableOpacity>
  );
};

export default HomeNav;
