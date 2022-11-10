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

  return (
    <View>
      <ScrollView  className="flex-1 px-6 pt-10">
        <View className="border rounded-lg p-1 bg-white border-gray-300 shadow-lg shadow-gray-600">
          {HomeData.map((item) => (
            <MyWorkItem
              key={item.id}
              icon={item.icon}
              color={item.color}
              title={item.name}
              id={item.id}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default MyWork;
