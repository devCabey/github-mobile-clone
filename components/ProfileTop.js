import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const ProfileTop = () => {
  return (
    <View className="flex-row px-5 space-x-5">
      <TouchableOpacity>
        <Ionicons name="settings-outline" size={24} color="#036bfc" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons name="share-outline" size={24} color="#036bfc" />
      </TouchableOpacity>
    </View>
  );
};

export default ProfileTop;
