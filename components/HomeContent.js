import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { EllipsisHorizontalIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";

const HomeContent = (props) => {
  const navigator = useNavigation();
  return (
    <View className="mt-5 mx-5 ">
      <View className="flex-row items-center justify-between ">
        <Text className="text-xl font-medium">{props.topic}</Text>
        <TouchableOpacity
          className="mt-2"
          onPress={() => navigator.navigate(props.route)}
        >
          <EllipsisHorizontalIcon size={33} color="#5b5c5e" />
        </TouchableOpacity>
      </View>
      <View className="">{props.children}</View>
    </View>
  );
};

export default HomeContent;
