import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Feather, Ionicons } from "@expo/vector-icons";

const NContentHeaderRight = () => {
  return (
    <View className="flex-row space-x-6">
      <TouchableOpacity>
        <Ionicons name="ios-share-outline" size={25} color="#1b6af2" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Feather name="more-horizontal" size={25} color="#1b6af2" />
      </TouchableOpacity>
    </View>
  );
};

export default NContentHeaderRight;
