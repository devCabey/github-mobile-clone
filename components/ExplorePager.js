import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const ExplorePager = () => {
  return (
    <View className="bg-gray-100 w-full h-12 rounded-full flex-row items-center p-2 opacity-95">
      <TouchableOpacity className="h-9 flex-1 bg-blue-500 rounded-full justify-center items-center">
        <Text className="text-lg font-semibold text-white">For You</Text>
      </TouchableOpacity>
      <TouchableOpacity className="h-9 flex-1  rounded-full justify-center items-center">
        <Text className="text-lg font-semibold ">Trending</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ExplorePager;
