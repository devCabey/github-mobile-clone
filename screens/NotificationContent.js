import { View, Text } from "react-native";
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
    <View>
      <Text>NotificationContent</Text>
    </View>
  );
};

export default NotificationContent;
