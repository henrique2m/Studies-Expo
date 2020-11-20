import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./Pages/Login";
import Home from "./Pages/Home";

import Store from "./store/dispatch/auth";

const AuthContext = React.createContext();
const AppStack = createStackNavigator();

function Routes() {
  const store = Store();
  const { state, authDispatch } = store;

  React.useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await AsyncStorage.getItem("userToken");
      } catch (e) {}

      authDispatch.restoreToken(userToken);
    };

    bootstrapAsync();
  }, []);

  function SplashScreen() {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <AuthContext.Provider>
      <NavigationContainer>
        <AppStack.Navigator>
          {state.isLoading ? (
            <AppStack.Screen name="Splash" component={SplashScreen} />
          ) : state.userToken == null ? (
            <AppStack.Screen
              name="Login"
              component={Login}
              initialParams={store}
            />
          ) : (
            <AppStack.Screen
              name="Home"
              component={Home}
              initialParams={store}
            />
          )}
        </AppStack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Routes;
