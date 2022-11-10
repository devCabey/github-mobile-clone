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
      headerRight: () => <AddHeaderButton />,
    });
  }, []);

  return (
    <SafeAreaView className="flex-1 pb-10">
      <ScrollView>
        {/* Header */}
        <View>
          <Text className="text-3xl font-extrabold ml-5 text-gray-800">
            Home
          </Text>
          <TouchableHighlight className="flex-row items-center mx-5 bg-[#cfcfcf] rounded-xl px-2 mt-2 ">
            <View className="flex-row items-center space-x-2 ">
              <MagnifyingGlassIcon size={23} color="#9b9c9e" />
              <TextInput
                className="h-11 flex-1 text-gray-700  "
                placeholder="Search GitHub"
                style={{ fontSize: 15 }}
              />
            </View>
          </TouchableHighlight>
        </View>
        {/* My Work */}
        <HomeContent topic="My Work" route="Work">
          <View className="bg-white rounded-md mt-3 pl-3 pb-1  ">
            {Data.map((e, index) => (
              <HomeNav
                icon={e.icon}
                name={e.name}
                color={e.color}
                route={e.route}
                key={index}
              />
            ))}
          </View>
        </HomeContent>
        {/* Favorites */}
        <HomeContent topic="Favorites" route="Favorite">
          <HomeEmpty buttonText="Add Favorites" route="Favorite">
            <Text className="text-center font-normal ">
              Add favourite repositeries here to have {"\n"} quick access at any
              time, without having {"\n"} to search
            </Text>
          </HomeEmpty>
        </HomeContent>
        <HomeContent topic="Shortcuts" route="Shortcut">
          <HomeEmpty buttonText="Get Started" route="Shortcut">
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
        <HomeContent topic="Recent" route="Recent">
          <RecentItem />
        </HomeContent>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
