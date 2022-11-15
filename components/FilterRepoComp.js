import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

const FilterRepoComp = () => {
  const [select, setSelect] = useState(false);
  return (
    <TouchableOpacity
      className="flex-row bg-white h-20 items-center pl-4  space-x-3"
      onPress={() => setSelect((prevState) => !prevState)}
    >
      <Image
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwwVcLVZUMA6Ktb-FHCvXZ7EdTQ6A9ET4BAw&usqp=CAU",
        }}
        className="h-9 w-9 rounded-lg"
      />
      <View className=" flex-1 flex-row border-b border-gray-300 h-20 items-center pr-4 space-x-2">
        <View className="flex-1">
          <Text className="text-gray-500 ">TGX-Android</Text>
          <Text className="font-normal" style={{ fontSize: 18 }}>
            Telegram X
          </Text>
        </View>
        <View>
          {select ? (
            <Ionicons name="checkmark-outline" size={23} color="#387df5" />
          ) : (
            <></>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default FilterRepoComp;
