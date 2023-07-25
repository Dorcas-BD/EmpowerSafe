import { createStackNavigator } from "@react-navigation/stack";

import React from "react";
import GetStarted from "../screens/GetStarted";
import SignUp from "../screens/SignUp";
import SignIn from "../screens/SignIn";
import VerifyEmail from "../screens/VerifyEmail";
import ForgotPassword from "../screens/ForgotPassword";
import Home from "../screens/Home";
import ReportIncidentNext from "../screens/ReportIncidentNext";
import ReportIncidentSubmit from "../screens/ReportIncidentSubmit";
import CreateNewPassword from "../screens/CreateNewPassword";

const Stack = createStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen name="GetStarted" component={GetStarted} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="VerifyEmail" component={VerifyEmail} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="CreateNewPassword" component={CreateNewPassword} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="Home" component={Home} /> */}
      <Stack.Screen name="ReportIncidentNext" component={ReportIncidentNext} />
      {/* <Stack.Screen
        name="ReportIncidentSubmit"
        component={ReportIncidentSubmit}
      /> */}
    </Stack.Navigator>
  );
}
