import {
  View,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import HomeData from "../data/homeData";
import { Ionicons } from "@expo/vector-icons";

const MyWorkItem = ({ id, icon, color, title, select }) => {
  const [selectWork, setSelectWork] = useState(false);

  const onTogggle = () => {
    setSelectWork((prevState) => !prevState);
  };

  return (
    <View className="bg-white">
      <TouchableWithoutFeedback className="flex-1" onPress={() => onTogggle()}>
        <View className="flex-row  space-x-3">
          <View className="flex-row space-x-3 items-center py-3 pl-3">
            <View
              className={`${
                selectWork ? "bg-blue-500" : "white border border-gray-500"
              } h-5 w-5 rounded-full relative justify-center items-center `}
            >
              <Ionicons name="ios-checkmark-sharp" size={15} color="white" />
            </View>

            <View
              className="rounded-md  h-7 w-7  flex justify-center items-center "
              style={{ backgroundColor: color }}
            >
              {icon}
            </View>
          </View>

          <View className="flex-row border-b border-gray-300  items-center flex-1 space-x-2 py-3 pr-3">
            <Text className="flex-1" style={{ fontSize: 15 }}>
              {title}
            </Text>
            <TouchableOpacity>
              <Ionicons name="menu-outline" size={25} color="#9e9e9e" />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default MyWorkItem;
