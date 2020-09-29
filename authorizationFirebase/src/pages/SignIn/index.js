import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

import firebase from "firebase";

function SignIn() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [register, setRegister] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    function loadFirebase() {
      const firebaseConfig = {
        apiKey: "",
        authDomain: "",
        databaseURL: "",
        projectId: "",
        storageBucket: "",
        messagingSenderId: "",
        appId: "",
      };

      try {
        firebase.initializeApp(firebaseConfig);
      } catch (err) {
        if (!/already exists/.test(err.message)) {
          console.error("erro");
        }
      }
    }

    loadFirebase();
  }, []);

  const Home = () => {
    setRegister(false);
    navigation.navigate("Home");
  };

  function signUp() {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(Home)
      .catch((error) => {
        console.log(error.code);
      });
  }

  function login() {
    if (email === "" || password === "") {
      console.log("Por favor preencha todos os campos.");
      return;
    }

    setLoading(true);

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(Home)
      .catch((error) => {
        if (error.code == "auth/user-not-found") {
          setRegister(true);
          console.warn(error);
        } else {
          console.log(error);
        }
      });

    setLoading(false);
  }

  function handleLoading() {
    if (loading) {
      <ActivityIndicator />;
    }
  }

  return (
    <View style={styles.container}>
      {!register ? (
        <>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{ uri: "https://api.adorable.io/avatars/100/firebase" }}
            />
          </View>
          <TextInput
            placeholder="Email"
            onChangeText={(text) => setEmail(text)}
            style={styles.input}
          />
          <TextInput
            secureTextEntry
            placeholder="Senha"
            onChangeText={(text) => setPassword(text)}
            style={styles.input}
          />
          <TouchableOpacity style={styles.button} onPress={login}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
        </>
      ) : (
        <View style={styles.container}>
          <Text style={styles.textRegister}>
            Parece que você ainda não está cadastrado. Gostaria de fazer parte
            da nossa comunidade?
          </Text>
          <View style={styles.containerRegister}>
            <TouchableOpacity
              style={[styles.buttonRegister, { backgroundColor: "#9BFFB1" }]}
              onPress={signUp}
            >
              <Text style={styles.buttonText}>SIM</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.buttonRegister, { backgroundColor: "#FF766D" }]}
              onPress={() => setRegister(false)}
            >
              <Text style={styles.buttonText}>NÃO</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
      {handleLoading}
    </View>
  );
}

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
  input: {
    backgroundColor: "#fff",
    width: 300,
    height: 48,
    borderRadius: 24,
    marginBottom: 20,
    paddingLeft: 10,
    fontWeight: "bold",
    fontSize: 18,
  },

  button: {
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#7D4CAF",
    width: 300,
    height: 48,
    borderRadius: 24,
    marginBottom: 20,
    paddingLeft: 10,
  },

  buttonText: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#fff",
  },

  containerRegister: {
    justifyContent: "center",
    alignItems: "center",
  },

  textRegister: {
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center",
  },

  buttonRegister: {
    justifyContent: "center",
    alignItems: "center",
    width: 200,
    height: 32,
    borderRadius: 16,
    marginTop: 10,
  },
});

export default SignIn;
