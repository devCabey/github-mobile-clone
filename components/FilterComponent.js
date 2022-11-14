import { View, Text } from "react-native";
import React from "react";
import { Feather, Ionicons } from "@expo/vector-icons";

const FilterComponent = ({ icon, title, select }) => {
  return (
    <View className="flex-row space-x-5 px-4 h-16 pt-4">
      <View>
        <Feather
          name="inbox"
          size={24}
          color={select ? "#387df5" : "#19191a"}
        />
      </View>
      <View className="flex-row flex-1 border-b border-gray-300 space-x-2">
        <Text
          className={`flex-1 text-lg ${
            select ? "text-[#387df5]" : "text-[#19191a]"
          } `}
        >
          {title}
        </Text>

        <View>
          {select ? (
            <Ionicons name="checkmark-outline" size={23} color="#387df5" />
          ) : (
            <></>
          )}
        </View>
      </View>
    </View>
  );
};

export default FilterComponent;
