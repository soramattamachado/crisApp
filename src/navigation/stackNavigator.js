import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Image } from "react-native";
import BottomTabNavigator from "./tabNavigator";
import Splash from "../screens/Splash";
import Login from "../screens/Login";
import Quiz from "../screens/Quiz";

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
    <Stack.Screen
        name="Splash"
        component={Splash}
        options={{ headerShown: false, tabBarVisible: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: true,
          headerTransparent: true,
          title: '',
        }}
      />
      <Stack.Screen
        name="Home"
        component={BottomTabNavigator}
        options={{
          headerTransparent: true
        }}
      />
      <Stack.Screen name="Quiz" component={Quiz} />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
