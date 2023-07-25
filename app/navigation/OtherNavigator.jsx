import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import GetStarted from "../screens/GetStarted";
import SignUp from "../screens/SignUp";

const Stack = createStackNavigator();

export default function OtherNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="GetStarted" component={GetStarted} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
}
