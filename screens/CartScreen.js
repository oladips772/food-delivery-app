/** @format */
import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import tw from "twrnc";
import { Foundation } from "react-native-vector-icons";

const CartScreen = ({ route, navigation }) => {
  const item = route.params;

  return (
    <View>
      {/* flex div */}
      <View style={[styles.flexDiv, tw`bg-white shadow rounded`]}>
        <View style={[styles.imageContainer, tw`bg-red-100 shadow`]}>
          <Image style={styles.image} source={item.picture} />
        </View>
        <View style={tw`mr-4`}>
          <Text style={tw`font-bold mb-1 text-gray-500`}>
            {item ? item.name : "keep shopping"}
          </Text>
          <Text style={tw`font-bold text-gray-500`}>{item.price}</Text>
          <TouchableOpacity style={tw`text-center`}>
            <Text style={tw`font-bold p-4 text-red-500 mt-1 -ml-4`}>
              REMOVE
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* coupon div */}
      <TouchableOpacity>
        <View style={[styles.couponDiv, tw`bg-red-100`]}>
          <Foundation name="bitcoin" size={26} color="orange" />
          <Text style={tw`text-lg font-bold ml-8 text-yellow-500`}>
            Enter Your Coupon Code
          </Text>
        </View>
      </TouchableOpacity>
      {/* subtotal div */}
      <View style={styles.flexContainer}>
        <View style={styles.flexItem}>
          <Text style={tw`font-bold text-gray-600`}>Price</Text>
          <Text style={tw`font-bold`}>{item.price}</Text>
        </View>
        <View style={styles.flexItem}>
          <Text style={tw`font-bold text-gray-600`}>Shipping</Text>
          <Text style={tw`font-bold`}>$3.00</Text>
        </View>
        <View style={styles.flexItem}>
          <Text style={tw`font-bold text-gray-600`}>Discount</Text>
          <Text style={tw`font-bold`}>$-</Text>
        </View>
      </View>
      {/* proceed to payment */}
      <TouchableOpacity onPress={() => navigation.navigate("Payment")}>
        <View style={[styles.paymentDiv, tw`bg-red-500`]}>
          <Text style={styles.paymentText}>PROCEED TO PAYMENT</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  imageContainer: {
    height: 100,
    width: 100,
    borderRadius: 4,
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
    marginRight: 7,
  },
  flexDiv: {
    marginHorizontal: 10,
    marginTop: 14,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 8,
  },
  image: {
    height: 100,
    width: 100,
    resizeMode: "contain",
  },
  couponDiv: {
    marginTop: 30,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    borderColor: "orange",
    borderWidth: 1,
    borderStyle: "dashed",
    marginHorizontal: 10,
    borderRadius: 4,
    marginBottom: 30,
  },
  flexContainer: {
    marginHorizontal: 10,
    borderBottomColor: "lightgray",
    borderBottomWidth: 1,
    borderStyle: "dashed",
    paddingBottom: 8,
    marginBottom:225,
  },
  flexItem: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 8,
  },
  paymentDiv: {
    marginHorizontal: 10,
    padding: 14,
    borderRadius: 4,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  paymentText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "white",
  },
});
