import React from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  View,
  StyleSheet,
  Platform,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

export default function SignIn() {
  const navigation = useNavigation();

  function handleNavigationToHome() {
    navigation.navigate("Home", {});
  }

  function handleNavigationToSignUp() {
    navigation.navigate("SignUp");
  }
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "IOS" ? "padding" : "height"}
    >
      <View style={styles.logo}>
        <Text style={styles.logoText}>FazenTECH</Text>
      </View>
      <TextInput
        placeholder="Email"
        style={styles.textInput}
        autoCorrect={false}
      />
      <TextInput
        secureTextEntry
        placeholder="Senha"
        style={styles.textInput}
        autoCorrect={false}
      />
      <TouchableOpacity style={styles.button} onPress={handleNavigationToHome}>
        <Text style={styles.buttonText}>ENTRAR</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleNavigationToSignUp}>
        <Text>Criar uma conta</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ddd",
    padding: 30,
  },
  logoText: {
    fontWeight: "bold",
    fontSize: 24,
    marginBottom: 10,
  },
  textInput: {
    width: "100%",
    height: 48,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 10,
    paddingLeft: 10,
  },
  button: {
    width: "100%",
    height: 48,
    backgroundColor: "#0F0",
    borderRadius: 10,
    marginBottom: 10,

    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
});
