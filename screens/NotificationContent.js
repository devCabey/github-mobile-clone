import { View, Text, Image, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import NContentHeaderRight from "../components/NContentHeaderRight";

const NotificationContent = () => {
  const navigator = useNavigation();

  useLayoutEffect(() => {
    navigator.setOptions({
      headerTitle: "",
      headerRight: () => <NContentHeaderRight />,
    });
  }, []);
  return (
    <View className="flex-1">
      <View className="bg-white border-y border-gray-300">
        <View className="py-4 mx-4 border-b border-gray-300">
          <View className="flex-row items-center space-x-2">
            <Image
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwwVcLVZUMA6Ktb-FHCvXZ7EdTQ6A9ET4BAw&usqp=CAU",
              }}
              className="h-6 w-6 rounded-md"
            />
            <View className="flex-row flex-1  space-x-1">
              <Text>ExpressInstructor</Text>
              <Text>/</Text>
              <Text>engine-retro</Text>
              <Text>#4</Text>
            </View>
          </View>
          <Text>@feature/graphql</Text>
          <ScrollView>{/* merge colored etc */}</ScrollView>
        </View>
        <View>
          {/* Profile */}
          <View></View>
          {/* description */}
          <View></View>
        </View>
      </View>
      <View></View>
    </View>
  );
};

export default NotificationContent;
