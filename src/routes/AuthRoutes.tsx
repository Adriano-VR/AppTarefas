import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import Criar from "../screens/AddTask";
import React from "react"

const Stack = createNativeStackNavigator();

export const AuthRoutes = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
    
    </Stack.Navigator>
  );
};