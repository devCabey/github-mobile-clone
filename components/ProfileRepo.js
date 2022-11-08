import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { AntDesign, Octicons } from "@expo/vector-icons";

const ProfileRepo = () => {
  return (
    <TouchableOpacity className=" flex-col space-y-2 m-2 bg-white p-5 h-52 w-80 rounded-sm">
      <View className="flex-row items-center space-x-2">
        <Image
          source={{
            uri: "https://static.wikia.nocookie.net/final-space/images/4/49/Caleb_McLaughlin_Image.jpg/revision/latest?cb=20210523023325",
          }}
          className="h-6 w-6 rounded-full "
          resizeMode="cover"
        />
        <Text className="text-gray-500" style={{ fontSize: 14 }}>
          devCabey
        </Text>
      </View>
      <View className="flex-1">
        <Text className="font-bold mb-2" style={{ fontSize: 15 }}>
          Ecommerce
        </Text>
        <Text className="">
          An ecommerce application programmable interface
        </Text>
      </View>
      <View className="flex-row space-x-3 items-center">
        <View className="flex-row space-x-1 items-center ">
          <AntDesign name="star" size={14} color="#9a9a9a" />
          <Text className="text-gray-500">0</Text>
        </View>
        <View className="flex-row space-x-1 items-center">
        <Octicons name="dot-fill" size={20} color="#f7bb05" />
          <Text className="text-gray-500">JavaScript</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProfileRepo;
