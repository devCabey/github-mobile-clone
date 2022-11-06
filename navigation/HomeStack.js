import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens
import HomeScreen from "../screens/HomeScreen";
import IssueScreen from "../screens/IssueScreen";
import PullRequest from "../screens/PullRequest";
import Discussion from "../screens/Discussion";
import Repository from "../screens/Repository";
import Organization from "../screens/Organization";
import Starred from "../screens/Starred";
import MyWork from "../screens/MyWork";
import Favorite from "../screens/Favorite";
import Shortcut from "../screens/Shortcut";

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      {/* screens */}
      <Stack.Group>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Issue" component={IssueScreen} />
        <Stack.Screen name="Pull Request" component={PullRequest} />
        <Stack.Screen name="Discussion" component={Discussion} />
        <Stack.Screen name="Repository" component={Repository} />
        <Stack.Screen name="Organization" component={Organization} />
        <Stack.Screen name="Starred" component={Starred} />
      </Stack.Group>
      {/* modals */}
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Work" component={MyWork} />
        <Stack.Screen name="Favorite" component={Favorite} />
        <Stack.Screen name="Shortcut" component={Shortcut} />
        <Stack.Screen name="Recent" component={HomeScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default HomeStack;
