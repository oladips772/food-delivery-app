/** @format */
import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { AntDesign } from "react-native-vector-icons";
import tw from "twrnc";

const DetailsScreen = ({ route, navigation }) => {
  const item = route.params;
  // const [value, setValue] = useState(item.price);

  return (
    <View style={styles.container}>
      <View style={styles.itemDiv}>
        <Image source={item.picture} style={styles.itemImage} />
      </View>
      <View style={styles.productInfo}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={{ fontWeight: "bold" }}>{item.price}</Text>
      </View>
      <View styles={styles.descriptionDiv}>
        <Text style={{ fontWeight: "bold", fontSize: 20, marginBottom: 10 }}>
          Description
        </Text>
        <Text style={{ color: "gray", fontSize: 16 }}>{item.description}</Text>
      </View>
      <View
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "row",
          marginTop: 15,
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>Quantity:</Text>
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>1</Text>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.addContainer}>
          <TouchableOpacity>
            <View style={styles.increaseBtn}>
              <AntDesign
                name="minus"
                size={22}
                style={styles.increaseBtn}
                color="white"
                style={{ marginTop: 2 }}
              />
            </View>
          </TouchableOpacity>
          <Text
            style={{ fontWeight: "bold", fontSize: 19, marginHorizontal: 12 }}
          >
            {item.price}
          </Text>
          <TouchableOpacity>
            <View style={styles.increaseBtn}>
              <AntDesign name="plus" size={22} color="white" />
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate("Cart", item)}>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 13,
                padding: 9,
                borderRadius: 4,
                width: 180,
                backgroundColor: "orangered",
                color: "white",
                textAlign: "center",
                marginLeft: 17,
              }}
            >
              ADD TO CART
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    width: "100%",
  },
  itemDiv: {
    marginTop: -15,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
  itemImage: {
    height: 220,
    width: 220,
    resizeMode: "contain",
  },
  itemName: {
    fontWeight: "bold",
    fontSize: 18,
    width: "100%",
  },
  productInfo: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginHorizontal: 10,
    borderTopColor: "lightgray",
    paddingTop: 8,
    borderTopWidth: 1,
    marginBottom: 16,
  },
  descriptionDiv: {
    marginTop: 20,
    borderTopColor: "lightgray",
    borderTopWidth: 2,
    display: "flex",
    alignItems: "center",
    marginBottom: 13,
  },

  //? add to cart button div styling

  bottomContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 125,
  },

  addContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
  },

  increaseBtn: {
    textAlign: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: 4,
    color: "white",
    height: 30,
    width: 30,
    backgroundColor: "orangered",
  },
});
