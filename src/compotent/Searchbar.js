import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const Searchbar = ({ navigation, route }) => {
  const { content } = route.params || "";
  const [searchvalue, setsearchvalue] = useState(content);
  const searchitm = [
    ["", "pizaa", "Dish"],
    ["", "burger", "Dish"],
    ["", "pizaa hunt", "Restaurant"],
    ["", "pizaa", "Dish"],
    ["", "kaju pizaa", "Dish"],
    ["", "pizaa", "Dish"],
    ["", "chilli pizaa", "Restaurant"],
    ["", "pizaa", "Dish"],
    ["", "pizaa", "Dish"],
    ["", "pizaa", "Dish"],
  ];
  const recomanditm = [
  ["", "pizaa"],
  ["", "burger"],
  ["", "pizaa hunt"],
  ["", "pizaa"],
  ["", "kaju pizaa"],
  ["", "pizaa"],
  ["", "chilli pizaa"],
  ["", "pizaa"],
  ["", "chilli pizaa"],
  ];
  return (
    <View>
      <View style={{ height: 41, backgroundColor: "#edf1f2" }}></View>
      <View
        style={{
          marginTop: 10,
          marginHorizontal: 15,
          borderWidth: 0.5,
          borderColor:'gray',
          paddingVertical: 5,
          paddingHorizontal: 10,
          display: "flex",
          flexDirection: "row",
          borderRadius: 10,
          alignItems: "center",
          backgroundColor: "#fff",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            style={{ paddingRight: 5 }}
          >
            <FontAwesome name="chevron-left" size={20} color="black" />
          </TouchableOpacity>
          <TextInput
            style={{ paddingLeft: 10, paddingRight: 65 }}
            placeholder="Restaurant name or dish..."
            value={searchvalue}
            onChangeText={(search) => {
              setsearchvalue(search);
            }}
          />
        </View>
        <View style={{ position: "absolute", right: 10 }}>
          {searchvalue ? (
            <TouchableOpacity
              onPress={() => {
                setsearchvalue("");
              }}
            >
              <Entypo name="cross" size={24} color="black" />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity>
              <FontAwesome name="microphone" size={18} color="black" />
            </TouchableOpacity>
          )}
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={{marginTop:7}}>
        {!searchvalue && (
          <View>
            <View style={{ marginTop: 30, height: 40, paddingLeft: 15 }}>
              <Text style={{ fontSize: 20, fontWeight: "700" }}>
                Popular Cuisines
              </Text>
            </View>
            <View
              style={{
                marginHorizontal: 5,
                marginTop: 5,
                height: undefined,
              }}
            >
              <ScrollView horizontal showsHorizontalScrollIndicator={false}
              >
                {Array.from(recomanditm).map((itm, ind) => {
                  return (
                    <TouchableOpacity key={ind}>
                      <View
                        style={{
                          marginHorizontal: 10,
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <View>
                          <Image
                            style={{
                              width: 70,
                              height: 70,
                              resizeMode: "contain",
                            }}
                            source={require("../../assets/pizaa.png")}
                          />
                        </View>
                        <View>
                          <Text style={{ fontSize: 12, fontWeight: "300" }}>
                            {itm[1]}
                          </Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  );
                })}
              </ScrollView>
            </View>
          </View>
        )}
        {searchvalue && (
          <View
            style={{
              marginHorizontal: 5,
              marginTop: 10,
            }}
          >
            {Array.from(searchitm).map((itm, ind) => {
              return (
                <TouchableOpacity key={ind} style={{ marginTop: 10 }}>
                  <View
                    style={{
                      height: 70,
                      marginHorizontal: 10,
                      borderRadius: 10,
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <View
                      style={{
                        width: 70,
                        height: 70,
                        borderWidth: 0.1,
                        borderRadius: 50,
                      }}
                    >
                      <Image
                        style={{ width: 70, height: 70, resizeMode: "contain" }}
                        source={require("../../assets/burger.png")}
                      />
                    </View>
                    <View
                      style={{
                        width: 200,
                        height: 70,
                        justifyContent: "center",
                        marginLeft: 15,
                      }}
                    >
                      <View>
                        <Text style={{ fontSize: 16, fontWeight: "500" }}>
                          {itm[1]}
                        </Text>
                      </View>
                      <View>
                        <Text style={{ fontSize: 14, fontWeight: "400" }}>
                          {itm[2]}
                        </Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        )}
        <View style={{ height: 150 }}></View>
      </ScrollView>
    </View>
  );
};

export default Searchbar;

const style = StyleSheet.create({});
