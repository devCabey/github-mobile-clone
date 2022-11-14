import { View, Text, Button } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import FilterComponent from "../components/FilterComponent";

const InboxModal = () => {
  const navigator = useNavigation();

  const [selector, setSelector] = useState(null);

  useLayoutEffect(() => {
    navigator.setOptions({
      headerTitle: "Filters",
      headerRight: () => (
        <Button title="Done" onPress={() => navigator.goBack()} />
      ),
    });
  }, []);
  return (
    <View className="bg-white flex-1">
      <FilterComponent title="Inbox" key={1} select={true} />
      <FilterComponent title="Saved" />
      <FilterComponent title="Done" />
    </View>
  );
};

export default InboxModal;
