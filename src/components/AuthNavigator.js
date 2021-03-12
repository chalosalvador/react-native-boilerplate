import React from "react";
import LoginScreen from "../screens/LoginScreen";
import { createStackNavigator } from "@react-navigation/stack";
import ResetPasswordScreen from "../screens/ResetPasswordScreen";

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ResetPassword"
        component={ResetPasswordScreen}
        options={{ title: "Restablecer clave" }}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
