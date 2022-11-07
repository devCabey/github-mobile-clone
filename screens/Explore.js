import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import ExploreItem from "../components/ExploreItem";

const Explore = () => {
  const navigator = useNavigation();

  useLayoutEffect(() => {
    navigator.setOptions({
      headerShown: true,
    });
  }, []);
  return (
    <SafeAreaView className="">
      <ScrollView>
        <ExploreItem />
        <ExploreItem />
        <ExploreItem />
      </ScrollView>
      <View className=" w-full  absolute bottom-10 z-50 px-5 ">
        <View className="bg-gray-200 w-full h-12 rounded-full flex-row items-center p-2 opacity-95">
          <TouchableOpacity className="h-9 flex-1 bg-blue-500 rounded-full justify-center items-center">
            <Text className="text-lg font-semibold text-white">For You</Text>
          </TouchableOpacity>
          <TouchableOpacity className="h-9 flex-1  rounded-full justify-center items-center">
            <Text className="text-lg font-semibold ">Trending</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Explore;
