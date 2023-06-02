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
import { MaterialIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from '@expo/vector-icons';

const Restaurant = ({ navigation, route}) => {
  const  {content}  = route.params || "";
  
  const [searchvalue, setsearchvalue] = useState(content);
  const [heart, setheart] = useState(false);
  const [color, setcolor] = useState("#e3dede");
  const [upd, setupd] = useState(true);
  const [itmqty,setitmqty] = useState([{itm:1,qty:0},{itm:2,qty:0},{itm:3,qty:0},{itm:4,qty:0},{itm:5,qty:0},{itm:6,qty:0}]);
  const looking_itm = [1, 2, 3, 4, 5,6];
  return (
    <View>
      <View style={{ height: 40, backgroundColor: color }}></View>
      <View
        style={{
          paddingTop: 15,
          paddingBottom: 20,
          borderColor: "gray",
          paddingVertical: 5,
          paddingLeft: 23,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: color,
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
        </View>
      </View>
      <ScrollView>
        <View
          style={{
            backgroundColor: "#e3dede",
            height: 250,
            borderBottomRightRadius: 40,
            borderBottomLeftRadius: 40,
          }}
        >
          <View
            style={{
              marginHorizontal: 20,
              marginVertical: 10,
              backgroundColor: "#fff",
              height: 216,
              borderRadius: 30,
              elevation: 1,
              shadowColor: "red",
              paddingVertical: 15,
              paddingHorizontal: 17,
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <View>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                  {"Jay Bhavani Vadapav"}
                </Text>
              </View>
              <View style={{ position: "absolute", right: 20 }}>
                {heart && (
                  <AntDesign
                    onPress={() => {
                      setheart(!heart);
                    }}
                    name="heart"
                    size={21}
                    color="red"
                  />
                )}
                {!heart && (
                  <AntDesign
                    onPress={() => {
                      setheart(!heart);
                    }}
                    name="hearto"
                    size={21}
                    color="gray"
                  />
                )}
              </View>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <MaterialIcons name="stars" size={17} color="green" />
              <Text style={{ fontSize: 16, fontWeight: "500", lineHeight: 25 }}>
                {"4.4(100+ ratings) ₹180 for two"}
              </Text>
            </View>
            <View>
              <Text style={{ fontSize: 15, fontWeight: "300", lineHeight: 25 }}>
                {"North Indian, Burgers"}
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
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 5,
                }}
              >
                <Octicons name="dot-fill" size={16} color="gray" />
                <View style={{ marginLeft: 10 }}>
                  <Text style={{ fontSize: 15, fontWeight: "700" }}>
                    Outlet
                  </Text>
                </View>
                <View style={{ position: "absolute", left: 90 }}>
                  <Text style={{ fontSize: 15, fontWeight: "00" }}>
                    Kailash Township
                  </Text>
                </View>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 5,
                }}
              >
                <Octicons name="dot-fill" size={16} color="gray" />
                <View style={{ marginLeft: 10 }}>
                  <Text style={{ fontSize: 15, fontWeight: "700" }}>
                    {"24 mins"}
                  </Text>
                </View>
                <View style={{ position: "absolute", left: 90 }}>
                  <Text style={{ fontSize: 15, fontWeight: "400" }}>
                    {"Delivery to nadiad"}
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                borderTopWidth: 0.5,
                borderStyle: "dashed",
                marginTop: 10,
                borderColor: "gray",
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 5,
                }}
              >
                <Ionicons name="md-bicycle-sharp" size={20} color="black" />
                <View style={{ marginLeft: 4 }}>
                  <Text style={{ fontSize: 15, fontWeight: "700" }}>
                    {"2.3 km " + "l "}
                  </Text>
                </View>
                <View
                  style={{
                    position: "absolute",
                    left: 85,
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: "300",
                      textDecorationLine: "line-through",
                    }}
                  >
                    ₹10
                  </Text>
                  <Text
                    style={{ marginLeft: 2, fontSize: 15, fontWeight: "300" }}
                  >
                    Free Delivery on your order
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{ marginTop: 30 }}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text
              style={{ fontSize: 20, fontWeight: "800", marginHorizontal: 15 }}
            >
              Looking for "{"Pizaa"}" (8)
            </Text>
            {upd && (
              <View style={{ position: "absolute", right: 15, top: 4 }}>
                <Entypo
                  onPress={() => {
                    setupd(!upd);
                  }}
                  name="chevron-up"
                  size={26}
                  color="black"
                />
              </View>
            )}
            {!upd && (
              <View style={{ position: "absolute", right: 15, top: 4 }}>
                <Entypo
                  onPress={() => {
                    setupd(!upd);
                  }}
                  name="chevron-down"
                  size={26}
                  color="black"
                />
              </View>
            )}
          </View>
          <View style={{ marginTop: 10 }}>
            {Array.from(looking_itm).map((itm, ind) => {
              return (
                <View
                  key={ind}
                  style={{
                    height: 170,
                    marginVertical: 10,
                    marginHorizontal: 15,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      width: 150,
                      height: 165,
                      justifyContent: "center",
                    }}
                  >
                    <MaterialCommunityIcons
                      name="square-circle"
                      size={18}
                      color="green"
                    />
                    <Text
                      style={{ fontSize: 18, fontWeight: "700", color: "gray" }}
                    >
                      Italian Double Cheese pizza
                    </Text>
                    <Text
                      style={{ fontSize: 18, fontWeight: "700", color: "gray" }}
                    >
                      ₹120
                    </Text>
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: "500",
                        color: "gray",
                        marginTop: 5,
                      }}
                    >
                      Image used are for representat...more{" "}
                    </Text>
                    {/* <Text>ion purposes only, and do not indicate size, portion, quantity or color of the actual dish.</Text> */}
                  </View>
                  <View
                    style={{
                      width: 150,
                      height: 150,
                      position: "absolute",
                      right: 0,
                    }}
                  >
                    <Image
                      style={{
                        width: 150,
                        height: 150,
                        resizeMode: "cover",
                        borderRadius: 20,
                      }}
                      source={require("../../assets/img1.webp")}
                    />
                  </View>
                 {false && <View
                    style={{
                      borderWidth: 0.5,
                      width: 90,
                      alignItems: "center",
                      justifyContent: "center",
                      position: "absolute",
                      right: 30,
                      top: 130,
                      borderRadius:10,
                      backgroundColor:'#fff',
                      borderColor:'gray'
                    }}
                  >
                    <Text onPress={()=>{}} style={{marginVertical:7,fontWeight:'bold',fontSize:17}}>ADD</Text>
                  </View>}
                 {true && <View
                    style={{
                      borderWidth: 0.5,
                      width: 90,
                      alignItems: "center",
                      justifyContent: "center",
                      position: "absolute",
                      right: 30,
                      top: 130,
                      borderRadius:10,
                      backgroundColor:'#fff',
                      borderColor:'gray',
                      display:'flex',
                      flexDirection:'row'
                    }}
                  >
                    <TouchableOpacity onPress={()=>{}}>
                    <Feather name="minus" size={22} color="black" />
                    </TouchableOpacity>
                    <Text style={{marginVertical:7,marginHorizontal:8,fontWeight:'bold',fontSize:17}}>{1}</Text>
                    <TouchableOpacity onPress={()=>{}}>
                    <Feather name="plus" size={22} color="black" />
                    </TouchableOpacity>
                  </View>}
                </View>
              );
            })}
          </View>
        </View>
        <View style={{ height: 150 }}></View>
      </ScrollView>
    </View>
  );
};

export default Restaurant;
