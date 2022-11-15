import { View, Text, Button } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import FilterComponent from "../components/FilterComponent";
import { Feather } from "@expo/vector-icons";

const InboxModal = () => {
  const navigator = useNavigation();
  // implement ref here
  const [selector, setSelector] = useState("");

  useLayoutEffect(() => {
    navigator.setOptions({
      headerTitle: "Filters",
      headerRight: () => (
        <Button title="Done" onPress={() => navigator.goBack()} />
      ),
    });
  }, []);
  return (
    <View className=" flex-1">
      <View className="border-y border-gray-300 mb-10">
        <FilterComponent
          icon="inbox"
          title="Inbox"
          select={selector}
          onPress={() => setSelector("Inbox")}
        />
        <FilterComponent
          icon="bookmark"
          title="Saved"
          select={selector}
          onPress={() => setSelector("Saved")}
        />
        <FilterComponent
          icon="check"
          title="Done"
          select={selector}
          onPress={() => setSelector("Done")}
        />
      </View>
      <View>
        <FilterComponent
          emoji="🎯"
          title="Assigned"
          select={selector}
          onPress={() => setSelector("Assigned")}
        />
        <FilterComponent
          emoji="💬"
          title="Participating"
          select={selector}
          onPress={() => setSelector("Participating")}
        />
        <FilterComponent
          emoji="✋"
          title="Mentioned"
          select={selector}
          onPress={() => setSelector("Mentioned")}
        />
        <FilterComponent
          emoji="🙌"
          title="Team mentioned"
          select={selector}
          onPress={() => setSelector("Team mentioned")}
        />
        <FilterComponent
          emoji="👀"
          title="Review requested"
          select={selector}
          onPress={() => setSelector("Review requested")}
        />
      </View>
    </View>
  );
};

export default InboxModal;
