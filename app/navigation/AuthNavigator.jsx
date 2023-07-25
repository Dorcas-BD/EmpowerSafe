import { createStackNavigator } from "@react-navigation/stack";

import React from "react";
import GetStarted from "../screens/GetStarted";
import SignUp from "../screens/SignUp";
import SignIn from "../screens/SignIn";
import VerifyEmail from "../screens/VerifyEmail";
import ForgotPassword from "../screens/ForgotPassword";
import Home from "../screens/Home";
import ReportIncident from "../screens/ReportIncident";
import CreateNewPassword from "../screens/CreateNewPassword";
import HomeCounsellor from "../screens/HomeCounsellor";

const Stack = createStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="GetStarted" component={GetStarted} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="VerifyEmail" component={VerifyEmail} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="CreateNewPassword" component={CreateNewPassword} />
      <Stack.Screen name="Home" component={Home} />
      {/* <Stack.Screen name="ReportIncident" component={ReportIncident} /> */}

      <Stack.Screen name="HomeCounsellor" component={HomeCounsellor} />
    </Stack.Navigator>
  );
}
