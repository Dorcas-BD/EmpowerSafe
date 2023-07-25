import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./AuthNavigator";
import GetStarted from "../screens/GetStarted";
import SignUp from "../screens/SignUp";
import { createStackNavigator } from "@react-navigation/stack";
import OtherNavigator from "./OtherNavigator";

// const Stack = createStackNavigator();

export default () => {
  return (
    <NavigationContainer>
      <AuthNavigator />
      {/* <Stack.Screen name="Other" component={OtherNavigator} />
      <Stack.Screen name="Auth" component={AuthNavigator} /> */}
    </NavigationContainer>
  );
};
