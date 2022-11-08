import { View, SafeAreaView, FlatList } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import ExploreItem from "../components/ExploreItem";
import ExploreData from "../data/exploreData";
import ExplorePager from "../components/ExplorePager";
import ExploreFooter from "../components/ExploreFooter";
const Explore = () => {
  const navigator = useNavigation();

  useLayoutEffect(() => {
    navigator.setOptions({
      headerShown: true,
    });
  }, []);

  const renderItem = ({ item }) => (
    <ExploreItem
      cover={item.cover}
      name={item.user.name}
      username={item.user.username}
      starred={item.starred}
      description={item.description}
      contributors={item.contributors.length}
      profile={item.user.profileImg}
      language={item.language.name}
      color={item.language.color}
    />
  );

  return (
    <SafeAreaView className="flex-1 ">
      <View className=" w-full  absolute bottom-5 z-50 px-5 ">
        <ExplorePager />
      </View>
      <FlatList
        data={ExploreData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListFooterComponent={<ExploreFooter />}
        refreshing={false}
        onRefresh={() => {}}
      />
    </SafeAreaView>
  );
};

export default Explore;
