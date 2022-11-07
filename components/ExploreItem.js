import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import {
  AntDesign,
  Feather,
  MaterialIcons,
  Octicons,
} from "@expo/vector-icons";

const ExploreItem = () => {
  return (
    <TouchableOpacity className="bg-white mb-5">
      <Image
        source={{ uri: "https://links.papareact.com/fls" }}
        className="h-44 w-full border-y border-gray-50 "
        resizeMode="fill"
      />
      <View className="px-5">
        <View className="flex-row space-x-1">
          <Octicons name="telescope" size={17} color="#a9a9a9" />
          <Text className="flex-1 text-gray-500">
            Based on people you follow
          </Text>
        </View>
        <View className="my-5">
          <View className="flex-row space-x-3 items-center">
            <Image
              source={{ uri: "https://links.papareact.com/wru" }}
              className="h-10 w-11 rounded-md border border-gray-500 "
              resizeMode="fill"
            />
            <View className="flex-1 ">
              <Text className="text-sm text-gray-800 ">microsoft</Text>
              <Text className="text-lg font-medium">PowerToys</Text>
            </View>
          </View>
          <Text className="text-lg my-1">
            Collection of Summer 2023 tech internships!
          </Text>
          <View className="flex-row space-x-5 my-1">
            <View className="flex-row space-x-1 items-center">
              <Feather name="star" size={20} color="#9e9e9e" />
              <Text className="text-gray-500 text-lg">81,184</Text>
            </View>
            <View className="flex-row space-x-1 items-center">
              <Octicons name="dot-fill" size={30} color="#7df030" />
              <Text className="text-lg text-gray-700">Go</Text>
            </View>
          </View>

          <TouchableOpacity className="flex-row space-x-2 items-center my-1">
            <AntDesign name="user" size={20} color="#aeaeae" />
            <Text className="text-lg  text-gray-500">116 contributors</Text>
            <MaterialIcons name="chevron-right" size={23} color="#aeaeae" />
          </TouchableOpacity>
          <TouchableOpacity className="border w-full border-gray-400 flex-row justify-center items-center space-x-2 p-2">
            <Feather name="star" size={20} color="#444444" />
            <Text className="text-lg text-gray-700">Star</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ExploreItem;
