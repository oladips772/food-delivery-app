/** @format */
import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import tw from "twrnc";

const SuccessScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.succesImage}
          source={{
            uri: "https://www.pngkit.com/png/full/285-2857793_previous-dispatch-rider-cartoon-png.png",
          }}
        />
        <Text style={tw`font-bold text-green-500 text-lg mt-4 ml-2`}>
          Hurray!!, your order was succesfull and its beign picked up by the
          courier
        </Text>
      </View>
      {/* back to home div */}
      <View
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 30,
        }}
      >
        <TouchableOpacity
          style={{
            textAlign: "center",
            padding: 7,
            width: 180,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 4,
            backgroundColor: "black",
          }}
        >
          <Text style={tw`font-bold text-lg text-white`}>Track Order</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("MenuScreen")}>
          <Text style={tw`font-bold text-lg mt-2 text-red-600 p-2 rounded `}>
            Back to Shopping
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SuccessScreen;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 40,
    marginTop: 80,
    alignItems: "center",
    justifyContent: "center",
  },
  succesImage: {
    height: 180,
    width: 180,
    resizeMode: "contain",
    marginLeft: 33,
  },
});
