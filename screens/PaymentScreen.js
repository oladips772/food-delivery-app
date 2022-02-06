/** @format */
import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import tw from "twrnc";
import { Foundation } from "react-native-vector-icons";

const PaymentScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* header div */}
      <View
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
          marginTop: 13,
          marginHorizontal: 3,
        }}
      >
        <Text style={tw`font-bold text-lg`}>Address</Text>
        <Text style={tw`text-red-500 font-bold text-lg`}>Change</Text>
      </View>
      {/* addres div */}
      <View style={[styles.flexDiv, tw`bg-white shadow rounded`]}>
        <View style={[styles.imageContainer, tw`bg-red-100 shadow`]}>
          <Image
            style={styles.image}
            source={{
              uri: "https://www.freepnglogos.com/uploads/pin-png/location-pin-connectsafely-37.png",
            }}
          />
        </View>
        <View style={tw`mr-4`}>
          <Text style={tw`font-bold mb-1 text-gray-700`}>My Home</Text>
          <Text style={tw`font-bold text-gray-400`}>
            Plateau state jos north, pole:333.3, landmark-330
          </Text>
        </View>
      </View>
      {/* payment div */}
      <View>
        <Text style={tw`font-bold text-lg`}>Payment Method</Text>
        <View style={styles.cardDiv}>
          <Image
            style={styles.cardImage}
            source={{
              uri: "https://www.pngkey.com/png/full/13-134753_e-gift-cards-mastercard-logo-mastercard-gift-card.png",
            }}
          />

          <Image
            style={styles.cardImage}
            source={{
              uri: "http://assets.stickpng.com/thumbs/58482363cef1014c0b5e49c1.png",
            }}
          />

          <Image
            style={styles.cardImage}
            source={{
              uri: "https://www.pngkey.com/png/full/395-3955460_-paypal-chad-hurley-paypal-logo.png",
            }}
          />
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
      {/* discound div */}
      <View style={styles.flexContainer}>
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
      <View>
        <TouchableOpacity onPress={() => navigation.navigate("Success")}>
          <View style={[styles.paymentDiv, tw`bg-red-500`]}>
            <Text style={styles.paymentText}>PAY NOW</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  flexDiv: {
    marginTop: 14,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    padding: 8,
    marginBottom: 16,
  },
  imageContainer: {
    height: 70,
    width: 70,
    borderRadius: 4,
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
    marginRight: 7,
  },
  image: {
    height: 40,
    width: 40,
    resizeMode: "contain",
  },
  cardDiv: {
    marginTop: 20,
    margin: 13,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
  },
  cardImage: {
    height: 35,
    width: 180,
    resizeMode: "contain",
    marginLeft: -7,
  },
  couponDiv: {
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    borderColor: "orange",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 4,
    marginBottom: 30,
  },
  flexContainer: {
    marginHorizontal: 10,
    borderBottomColor: "lightgray",
    borderBottomWidth: 1,
    borderStyle: "dashed",
    paddingBottom: 8,
    marginBottom: 150,
  },
  flexItem: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 8,
  },
  paymentDiv: {
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
