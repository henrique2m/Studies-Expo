import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./src/pages/Home";

import SignIn from "./src/pages/SignIn";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={SignIn}
          options={{ title: "Login" }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Home", headerLeft: null }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
