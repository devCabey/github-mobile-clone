import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TailwindProvider } from "tailwindcss-react-native";
import HomeStack from "./navigation/HomeStack";

import { FontAwesome5, Ionicons, Octicons } from "@expo/vector-icons";
import Explore from "./screens/Explore";
import Profile from "./screens/Profile";
import NotificationStack from "./navigation/NotificationStack";

// Screens

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <TailwindProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: "#0561f5",
            tabBarInActiveTintColor: "#a2a2a3",
          }}
        >
          <Tab.Screen
            component={HomeStack}
            name="HomeStack"
            options={{
              title: "Home",
              tabBarIcon: ({ focused, color, size }) =>
                focused ? (
                  <Ionicons name="md-home-sharp" size={size} color={color} />
                ) : (
                  <Ionicons name="md-home-outline" size={size} color={color} />
                ),
            }}
          />
          <Tab.Screen
            component={NotificationStack}
            name="NotificationStack"
            options={{
              tabBarIcon: ({ focused, color, size }) =>
                focused ? (
                  <Ionicons
                    name="notifications-sharp"
                    size={size}
                    color={color}
                  />
                ) : (
                  <Ionicons
                    name="notifications-outline"
                    size={size}
                    color={color}
                  />
                ),
            }}
          />

          <Tab.Screen
            component={Explore}
            name="Explore"
            options={{
              tabBarIcon: ({ focused, color, size }) =>
                focused ? (
                  <Octicons name="telescope-fill" size={size} color={color} />
                ) : (
                  <Octicons name="telescope" size={size} color={color} />
                ),
            }}
          />

          <Tab.Screen
            component={Profile}
            name="Profile"
            options={{
              tabBarIcon: ({ focused, color, size }) =>
                focused ? (
                  <FontAwesome5 name="user-alt" size={size} color={color} />
                ) : (
                  <FontAwesome5 name="user" size={size} color={color} />
                ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </TailwindProvider>
  );
}
