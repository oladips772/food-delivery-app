/** @format */
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageBackground,
} from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.backgroundImage}
        source={{
          uri: "https://images.freeimages.com/images/large-previews/239/buger-1320556.jpg",
        }}
        blurRadius={0}
      >
        <View style={styles.loginDiv}>
          <Text style={styles.foodText}>Good Food*</Text>
          <Text style={styles.foodText}>Tasty Food*</Text>
          <TouchableOpacity onPress={() => navigation.navigate("MenuScreen")}>
            <Text style={styles.Order}>Order Your Burger</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    flex: 1,
  },
  backgroundImage: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
  },
  loginDiv: {
    zIndex: 9999,
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    marginTop: 560,
  },
  foodText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    marginLeft: -100,
  },
  Order: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    marginTop: 20,
    backgroundColor: "orangered",
    padding: 10,
    borderRadius: 5,
    width: 270,
    alignItems: "center",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
  },
});
