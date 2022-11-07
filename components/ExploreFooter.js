import { View, Text } from "react-native";
import React from "react";
import { Octicons } from "@expo/vector-icons";

const ExploreFooter = () => {
  return (
    <View className=" bg-white h-64 w-full flex  items-center pt-7 ">
      <Octicons name="telescope" size={34} color="#1176fa" />
      <Text className="text-xl font-semibold m-3">That's all for now</Text>
      <Text className="text-center text-lg text-gray-500">
        Check back later to see what {"\n"}repositories are currently trending.
      </Text>
    </View>
  );
};

export default ExploreFooter;
