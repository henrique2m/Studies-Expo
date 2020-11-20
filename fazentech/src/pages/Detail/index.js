import React, { useState, useMemo } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { useRoute } from "@react-navigation/native";

export default function Detail() {
  const [countProduct, setCountProduct] = useState(0);
  const [totalValueProduct, setTotalValueProduct] = useState(0);
  const route = useRoute();
  const { product, measure } = route.params;

  function handleOperations(action) {
    if (action === "add") {
      setCountProduct(countProduct + 1);
    } else {
      if (countProduct <= 0) {
        return;
      }
      setCountProduct(countProduct - 1);
    }
  }

  useMemo(() => {
    function handleTotal() {
      setTotalValueProduct(product.value * countProduct);
    }

    handleTotal();
  }, [countProduct]);

  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Text style={styles.titleInfo}>{product.name}</Text>
        <Text style={styles.titleInfo}>
          R$ {product.value.toFixed(2)}/{measure === "Kg" ? "Kg" : "L"}
        </Text>
      </View>

      <View style={styles.thumbnail}>
        <Image
          source={product.thumbnail}
          resizeMode="contain"
          style={styles.image}
        />
      </View>

      <View style={styles.actions}>
        <TouchableOpacity
          hitSlop={{
            top: 5,
            bottom: 5,
            left: 5,
            right: 5,
          }}
          onPress={() => handleOperations("subtract")}
        >
          <Text style={styles.operations}> - </Text>
        </TouchableOpacity>
        <Text style={styles.count}>{countProduct}</Text>
        <TouchableOpacity
          hitSlop={{
            top: 5,
            bottom: 5,
            left: 5,
            right: 5,
          }}
          onPress={() => handleOperations("add")}
        >
          <Text style={styles.operations}> + </Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.titleDescription}>Descrição</Text>
      <Text>{product.description}</Text>

      <View style={styles.containerTotal}>
        <Text style={styles.totalStrong}>
          TOTAL:
          <Text style={styles.valueTotal}>
            R$ {totalValueProduct.toFixed(2)}
          </Text>
        </Text>
      </View>

      <TouchableOpacity style={[styles.button, { backgroundColor: "#FFD700" }]}>
        <Text style={styles.buttonText}>ADICIONAR AO CARRINHO</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>FINALIZAR COMPRA</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  info: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#fff",
    marginBottom: 10,
  },
  actions: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#fff",
    marginBottom: 5,
    marginTop: 5,
    padding: 5,
  },
  operations: {
    fontWeight: "bold",
    fontSize: 28,
    width: 40,
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 20,
    justifyContent: "center",
    textAlign: "center",
  },
  count: {
    marginLeft: 10,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "#000",
    width: 40,
    height: 40,
    fontWeight: "bold",
    fontSize: 28,
    justifyContent: "center",
    textAlign: "center",
  },
  titleInfo: {
    fontWeight: "bold",
    fontSize: 24,
  },
  thumbnail: {
    backgroundColor: "#ffffff",
    borderRadius: 5,
    width: "100%",
    height: 300,
    padding: 5,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  titleDescription: {
    fontWeight: "bold",
    fontSize: 16,

    borderBottomWidth: 1,
    borderBottomColor: "#fff",
    marginTop: 10,
    marginBottom: 10,
  },
  totalStrong: {
    fontWeight: "bold",
  },
  valueTotal: {
    fontWeight: "bold",
    fontSize: 32,
  },
  containerTotal: {
    alignItems: "flex-end",
    borderBottomWidth: 1,
    borderBottomColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#fff",
    marginBottom: 5,
    marginTop: 5,
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
