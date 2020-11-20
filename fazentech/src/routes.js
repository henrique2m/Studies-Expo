import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Detail from "./pages/Detail";

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{ title: "Login" }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ title: "Cadastro" }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Produtos", headerLeft: null }}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{ title: "Detalhes do produto" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
