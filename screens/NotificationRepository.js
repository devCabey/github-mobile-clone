import { View, Button } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import FilterRepoComp from "../components/FilterRepoComp";

const NotificationRepository = () => {
  const navigator = useNavigation();

  useLayoutEffect(() => {
    navigator.setOptions({
      headerTitle: "Filter by Repository",
      headerLeft: () => (
        <Button title="Cancel" onPress={() => navigator.goBack()} />
      ),
      headerRight: () => (
        <Button title="Done" onPress={() => navigator.goBack()} />
        // this is to navigate to someplace not ggo back
      ),
    });
  }, []);
  return (
    <View className="flex-1">
      <View className="border-y border-gray-400">
        {/* Implement flatlist  */}
        <FilterRepoComp />
        <FilterRepoComp />
        <FilterRepoComp />
        <FilterRepoComp />
      </View>
    </View>
  );
};

export default NotificationRepository;
