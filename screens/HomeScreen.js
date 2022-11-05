import {
  View,
  Text,
  Button,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import AddHeaderButton from "../components/AddHeaderButton";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";

import Data from "../data/homeData";
import HomeNav from "../components/HomeNav";
import HomeContent from "../components/HomeContent";
import HomeEmpty from "../components/HomeEmpty";
import RecentItem from "../components/RecentItem";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="pb-5">
      <ScrollView>
        {/* Header */}
        <View>
          <Text className="text-3xl font-extrabold ml-5 text-gray-800">
            Home
          </Text>
          <TouchableHighlight className="flex-row items-center mx-5 bg-gray-200 rounded-lg px-1 mt-2">
            <View className="flex-row items-center justify-center ">
              <MagnifyingGlassIcon size={23} color="#9b9c9e" />
              <TextInput
                className="h-11 px-2 text-center "
                placeholder="Search GitHub"
              />
            </View>
          </TouchableHighlight>
        </View>
        {/* My Work */}
        <HomeContent topic="My Work">
          <View className="bg-white rounded-md mt-3 pl-3 pb-1  ">
            {Data.map((e) => (
              <HomeNav icon={e.icon} name={e.name} color={e.color} />
            ))}
          </View>
        </HomeContent>
        {/* Favorites */}
        <HomeContent topic="Favorites">
          <HomeEmpty buttonText="Add Favorites">
            <Text className="text-center font-normal ">
              Add favourite repositeries here to have {"\n"} quick access at any
              time, without having {"\n"} to search
            </Text>
          </HomeEmpty>
        </HomeContent>
        <HomeContent topic="Shortcuts">
          <HomeEmpty buttonText="Get Started">
            <View className="flex justify-center items-center">
              <View>{/* Icons */}</View>
              <Text className=" font-bold my-1">
                The things you need, one tap away
              </Text>
              <Text className="text-center">
                Fast access to your lists of issues, Pull Requests, or
                Discussions.
              </Text>
            </View>
          </HomeEmpty>
        </HomeContent>
        <HomeContent topic="Recent">
          <RecentItem />
        </HomeContent>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
