import { View, Text, SafeAreaView, Image, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import ProfileTop from "../components/ProfileTop";
import {
  AntDesign,
  Feather,
  FontAwesome5,
  Ionicons,
  Octicons,
} from "@expo/vector-icons";
import HomeNav from "../components/HomeNav";
import ProfileRepo from "../components/ProfileRepo";

const Profile = () => {
  const navigator = useNavigation();

  useLayoutEffect(() => {
    navigator.setOptions({
      headerShown: true,
      headerTitle: "",
      headerRight: () => <ProfileTop />,
    });
  }, []);
  return (
    <SafeAreaView className="relative">
      <ScrollView className="flex-1">
        <View className="bg-white pt-5 px-5">
          <View className="flex-row items-center space-x-4">
            <Image
              source={{
                uri: "https://static.wikia.nocookie.net/final-space/images/4/49/Caleb_McLaughlin_Image.jpg/revision/latest?cb=20210523023325",
              }}
              className="h-16 w-16 rounded-full"
              resizeMode="cover"
            />
            <View>
              <Text className="text-xl font-bold">Caleb Okyere</Text>
              <Text className="text-gray-500" style={{ fontSize: 16 }}>
                devCabey
              </Text>
            </View>
          </View>
          {/* About */}
          <Text className="text-sm my-3" style={{ fontSize: 16 }}>
            Doing What Makes Me Happy{" "}
          </Text>
          {/* User Details */}
          <View>
            <View className="flex-row space-x-2">
              <Ionicons name="ios-location-outline" size={15} color="#828282" />
              <Text className="text-[#828282]">Accra,Ghana</Text>
            </View>
            <View className="flex-row space-x-2 my-1">
              <AntDesign name="user" size={15} color="#828282" />
              <View className="flex-row space-x-1">
                <Text className="font-bold">14</Text>
                <Text className="text-[#828282]">followers</Text>
              </View>
              <Text className="font-extrabold text-gray-700">.</Text>
              <View className="flex-row space-x-1">
                <Text className="font-bold">18</Text>
                <Text className="text-[#828282]">following</Text>
              </View>
            </View>
          </View>
          {/* Nav */}
          <View className="pt-3 border-y border-gray-300 mt-5 ">
            <HomeNav
              icon={<Feather name="book" size={18} color="white" />}
              name="Repositories"
              color="#2b2b2b"
              route="Repository"
              length={17}
            />
            <HomeNav
              icon={<AntDesign name="star" size={18} color="white" />}
              name="Starred"
              color="#fad102"
              route="Starred"
              length={28}
            />
            <HomeNav
              icon={<Octicons name="organization" size={18} color="white" />}
              name="Organizations"
              color="#f5952f"
              route="Organization"
              length={8}
            />
          </View>
        </View>
        <View className="mt-10">
          <View className="flex-row space-x-2 items-center px-5 mb-3">
            <FontAwesome5 name="star" size={16} color="#9e9e9e" />
            <Text className="text-gray-600" style={{ fontSize: 16 }}>
              Popular
            </Text>
          </View>
          <ScrollView
            horizontal
            className=""
            showsHorizontalScrollIndicator={false}
          >
            <ProfileRepo />
            <ProfileRepo />
            <ProfileRepo />
            <ProfileRepo />
            <ProfileRepo />
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
