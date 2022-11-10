import {
  View,
  Text,
  TouchableOpacity,
  Button,
  ScrollView,
  FlatList,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import HomeData from "../data/homeData";
import MyWorkItem from "../components/MyWorkItem";

const MyWork = () => {
  const navigator = useNavigation();
  useLayoutEffect(() => {
    navigator.setOptions({
      headerTitle: "Edit My Work",
      headerRight: () => (
        <Button title="Done" onPress={() => navigator.goBack()} />
      ),
    });
  }, []);

  const renderItem = ({ item }) => (
    <MyWorkItem
      icon={item.icon}
      color={item.color}
      title={item.name}
      key={item.id}
      id={item.id}
    />
  );

  return (
    <View className="flex-1 px-6 pt-10">
      <View>
        <FlatList
          renderItem={renderItem}
          data={HomeData}
          keyExtractor={(item) => item.id}
          className="border rounded-lg border-gray-300 shadow-md"
        />
      </View>
    </View>
  );
};

export default MyWork;
