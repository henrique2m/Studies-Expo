import React from "react";

import { View, Text, Image, StyleSheet } from "react-native";

const Home = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: "https://api.adorable.io/avatars/100/firebase" }}
      />

      <Text style={styles.text}>Seja bem vindo(a) a nossa comunidade...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    padding: 10,
  },

  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    left: "50%",
    marginLeft: -50,
    marginBottom: 20,
  },

  text: {
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center",
  },
});

export default Home;
