import React from "react";

import {
  View,
  FlatList,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

import Vegetais from "../../database/Vegetais";
import Derivados from "../../database/Derivados";
import Outros from "../../database/Outros";

export default function Home() {
  const navigation = useNavigation();
  const vegetais = Vegetais();
  const derivados = Derivados();
  const outros = Outros();

  function handleDetailProduct(product, measure) {
    navigation.navigate("Detail", { product, measure: measure });
  }

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Vegetais</Text>
        <FlatList
          contentContainerStyle={styles.listStyle}
          horizontal
          data={vegetais}
          keyExtractor={(item) => String(item.name)}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.containerItem}
              onPress={() => handleDetailProduct(item, "Kg")}
            >
              <Image
                source={item.thumbnail}
                style={styles.thumbnail}
                resizeMode="contain"
              />
              <View style={styles.info}>
                <Text>{item.name}</Text>
                <Text> R$ {item.value} Kg</Text>
              </View>
            </TouchableOpacity>
          )}
        />
        <Text style={styles.title}>Derivados</Text>
        <FlatList
          contentContainerStyle={styles.listStyle}
          horizontal
          data={derivados}
          keyExtractor={(item) => String(item.name)}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.containerItem}
              onPress={() => handleDetailProduct(item, "L")}
            >
              <Image
                source={item.thumbnail}
                style={styles.thumbnail}
                resizeMode="contain"
              />
              <View style={styles.info}>
                <Text>{item.name}</Text>
                <Text> R$ {item.value} L</Text>
              </View>
            </TouchableOpacity>
          )}
        />
        <Text style={styles.title}>Outros</Text>
        <FlatList
          contentContainerStyle={styles.listStyle}
          horizontal
          data={outros}
          keyExtractor={(item) => String(item.name)}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.containerItem}
              onPress={() => handleDetailProduct(item, "Kg")}
            >
              <Image
                source={item.thumbnail}
                style={styles.thumbnail}
                resizeMode="contain"
              />
              <View style={styles.info}>
                <Text>{item.name}</Text>
                <Text> R$ {item.value} Kg</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    paddingLeft: 10,
  },
  listStyle: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginHorizontal: 10,
    marginTop: 10,
    backgroundColor: "#eee",
  },
  title: {
    marginTop: 10,
    fontWeight: "bold",
    fontSize: 24,
  },
  containerItem: {
    width: 200,
    height: 120,
    padding: 5,
    borderRadius: 5,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  info: {
    borderTopColor: "#eee",
    borderTopWidth: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
  },
  thumbnail: {
    width: 100,
    height: 80,
  },
});
