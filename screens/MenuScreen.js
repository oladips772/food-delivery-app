/** @format */
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView
} from "react-native";
import {
  FontAwesome,
  Ionicons,
  Entypo,
  AntDesign,
} from "react-native-vector-icons";
import Snacks from "../data/Food";
import tw from "twrnc";

const MenuScreen = ({ navigation }) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <View style={tw`p-2 rounded-full shadow-md justify-center flex text-center bg-white`}>
            <FontAwesome name="navicon" size={22} style={tw`shadow-lg`} color="black"/>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome name="bell-o" size={23} style={tw`shadow-lg`} />
          </TouchableOpacity>
        </View>
        <TextInput
          style={styles.input}
          placeholder="search your favorite snacks!"
        />
        <ScrollView>
        <View style={styles.letSee}>
          {Snacks.map((item) => (
            <View style={styles.snackContainer} key={item.id}>
              <TouchableOpacity
                onPress={() => navigation.navigate("Details", item)}
              >
                <View style={[styles.snackDiv, tw`shadow-lg`]}>
                  <Image source={item.picture} style={styles.snackImage} />
                  <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                    {item.name}
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: "bold",
                      paddingBottom: 10,
                    }}
                  >
                    {item.price}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          ))}
        </View>
        </ScrollView>
        <View style={styles.bottomNav}>
          <Entypo name="home" size={27} />
          <Ionicons name="cart-outline" size={29} />
          <FontAwesome name="heart-o" size={27} />
          <AntDesign name="filetext1" size={26} />
        </View>
      </View>
    </>
  );
};

export default MenuScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 5,
    backgroundColor: "#f5f5f4",
    height: "100%",
    flex: 1,
  },
  header: {
    marginTop: 20,
    paddingHorizontal: 20,
    marginBottom: 30,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  order: {
    fontSize: 30,
    paddingHorizontal: 20,
    marginBottom: 30,
    color: "gray",
  },
  input: {
    paddingHorizontal: 30,
    marginHorizontal: 9,
    backgroundColor: "lightgray",
    padding: 7,
    borderRadius: 4,
    fontSize: 15,
    color: "white",
  },
  snackContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-around",
    margin: 7,
  },
  snackDiv: {
    height: 170,
    width: 160,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    shadowColor: "black",
    borderRadius: 5,
    overflow: "hidden",
    paddingBottom: 17,
    backgroundColor: "whitesmoke",
  },
  snackImage: {
    height: 110,
    width: 110,
    padding: 3,
    resizeMode: "contain",
    marginTop: 10,
  },
  letSee: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginTop: 20,
  },
  bottomNav: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 10,
  },
});
