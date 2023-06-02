import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const Showresult = ({ navigation, route }) => {
  const { content } = route.params;
  const [totalresult, settotalresult] = [{}];
  const tt = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  return (
    <View>
      <View style={{ backgroundColor: "#edf1f2" }}>
        <View style={{ height: 41, backgroundColor: "#edf1f2" }}></View>
        <View
          style={{
            marginTop: 10,
            marginHorizontal: 15,
            borderWidth: 0.5,
            paddingVertical: 5,
            paddingHorizontal: 10,
            display: "flex",
            flexDirection: "row",
            borderRadius: 10,
            alignItems: "center",
            backgroundColor: "#fff",
            borderColor: "gray",
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
              style={{ paddingRight: 5 }}
              onPress={() => {
                navigation.goBack();
              }}
            >
              <FontAwesome name="chevron-left" size={20} color="black" />
            </TouchableOpacity>
            <TextInput
              style={{ paddingLeft: 10, paddingRight: 65 }}
              placeholder="Restaurant name or dish..."
              value={content}
              onPressIn={() => {
                navigation.navigate("Searchbar", { content: content });
              }}
            />
          </View>
          <View style={{ position: "absolute", right: 10 }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Searchbar");
              }}
            >
              <Entypo name="cross" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 7 }}>
        {Array.from(tt).map((itm, ind) => {
          return (
            <TouchableOpacity key={ind} activeOpacity={1} onPress={()=>{navigation.push("Restaurant")}}>
              <View
                style={{
                  height: 180,
                  marginHorizontal: 10,
                  borderRadius: 20,
                  display: "flex",
                  flexDirection: "row",
                  paddingHorizontal: 10,
                  alignItems: "center",
                  backgroundColor: "#e4e9f2",
                  elevation: 5,
                  shadowColor: "#487fdb",
                  marginTop: 10,
                  borderBottomWidth: 0.1,
                  borderColor: "#487fdb",
                }}
              >
                <View style={{ width: 150, height: 170, borderRadius: 20 }}>
                  <Image
                    style={{
                      width: 147,
                      height: 169,
                      borderRadius: 20,
                      resizeMode: "cover",
                    }}
                    source={require("../../assets/img1.webp")}
                  />
                </View>
                <View
                  style={{
                    marginLeft: 6,
                    height: 170,
                    justifyContent: "center",
                  }}
                >
                  <View>
                    <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                      {"Rabindra Nankin" + "..."}
                    </Text>
                  </View>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <MaterialIcons name="stars" size={17} color="green" />
                    <Text style={{ fontSize: 17, fontWeight: "500" }}>
                      {"4.4(100+) 25mins"}
                    </Text>
                  </View>
                  <View>
                    <Text style={{ fontSize: 15, fontWeight: "300" }}>
                      {"Burgers, Beverages, Caf" + "..."}
                    </Text>
                  </View>
                  <View>
                    <Text style={{ fontSize: 15, fontWeight: "300" }}>
                      {"Uttarsanda Road : 3.0 km"}
                    </Text>
                  </View>
                  <View
                    style={{
                      borderTopWidth: 0.5,
                      borderStyle: "dashed",
                      marginTop: 10,
                      borderColor: "gray",
                    }}
                  >
                    <Text style={{ fontSize: 15, fontWeight: "300" }}>
                      % Free Delivery
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
        <View style={{ height: 150 }}></View>
      </ScrollView>
    </View>
  );
};

export default Showresult;

const styles = StyleSheet.create({});
