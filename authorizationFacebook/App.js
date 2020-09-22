import React, { useState, Fragment} from "react";

import {
   StyleSheet,
   Text, 
   View, 
   Button,
   TouchableOpacity,
   Image, 
   SafeAreaView 
} from "react-native";

import * as Facebook from "expo-facebook";

export default function App() {
  const [user, setUser] = useState(null);

  const signUpFacebook = async () => {
    try {
      await Facebook.initializeAsync(process.env.EXPO_KEY_FACEBOOK_APP);

      const { 
        type,
        token,
        expirationDate,
        permissions,
        declinedPermissions,
      } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ["public_profile", "email"],
      });

      if (type === "success") {
        
        const response = await fetch(
          `https://graph.facebook.com/me?fields=id,name,picture.type(large),email&access_token=${token}`
        );
      
        const data = await response.json();

        setUser(data);
      } else {
        // type === 'cancel'
         console.log('Fazer login novamente.')
      }

    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {user ? (
        <Fragment>
          <View style={styles.fotoContainer}>
            <Image style={styles.image} source={{ uri: user.picture.data.url }} />
            <Text style={styles.text}>{user.name}</Text>
            <Text style={styles.text}>{user.email}</Text>
         </View>

        </Fragment>
        
      ) : (
        <Button title="Login" onPress={signUpFacebook} style={styles.button}/>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
    alignItems: "center",
    justifyContent: "center",
  },
  fotoContainer: {
    width: 250,
    height: 250,
    backgroundColor: '#e24',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  button: {
    width: 200,
    height: 38,
  },
  image: { 
    width: 100, 
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#fff",
    marginBottom: 10
  },
  text: {
    fontSize: 18, 
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold"
  },
});