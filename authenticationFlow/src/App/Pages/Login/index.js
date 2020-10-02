import * as React from 'react';
import { useRoute } from '@react-navigation/native';
import {
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';

function Login() {
  const route = useRoute();
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const { signIn } = route.params.authDispatch;

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => signIn(username, password)}
      >
        <Text style={styles.textButton}>SIGN IN</Text>
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
  textInput: {
    width: 300,
    height: 42,
    backgroundColor: '#fff',
    marginBottom: 20,
    borderRadius: 21,
    paddingLeft: 5,
    fontWeight: 'bold',
    color: '#000',
  },
  button: {
    width: 300,
    height: 42,
    backgroundColor: '#7E25D9',
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

export default Login;
