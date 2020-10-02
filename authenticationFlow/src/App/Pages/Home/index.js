import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
function Home() {
  const route = useRoute();
  const { signOut } = route.params.authDispatch;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <TouchableOpacity style={styles.button} onPress={signOut}>
        <Text style={styles.textButton}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  button: {
    width: 300,
    height: 42,
    backgroundColor: '#FF8D8D',
    marginBottom: 20,
    borderRadius: 21,

    justifyContent: 'center',
    alignItems: 'center',
  },

  textButton: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default Home;
