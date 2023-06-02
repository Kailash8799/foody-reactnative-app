import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const Home = ({ navigation }) => {
  const itm = [
    ["All"],
    ["Hamburgers"],
    ["Pizza"],
    ["Asian"],
    ["Local"],
    ["Non-veg"],
  ];
  const topheaderitm = [
    [
      "New italian restaurant Near You",
      "Pizaa italia has just open near you and offer 15% discount all pizzas",
      "#f7e6bc",
      require("../../assets/pizaa.png"),
    ],
    [
      "Joe's Burgers",
      "Hamburgers and fries",
      "#bcf7c3",
      require("../../assets/burger.png"),
    ],
    [
      "Joe's Burgers",
      "Hamburgers and fries",
      "#f5cdc6",
      require("../../assets/dosa.png"),
    ],
    [
      "Joe's Burgers",
      "Hamburgers and fries",
      "#dcbcf7",
      require("../../assets/biryani.png"),
    ],
    [
      "Joe's Burgers",
      "Hamburgers and fries",
      "#f7bcea",
      require("../../assets/dosa.png"),
    ],
  ];
  const leftbox_itm = [
    [
      "Joe's Burgers",
      "American style",
      "Hamburgers and fries",
      "#f7e6bc",
      require("../../assets/pizaa.png"),
    ],
    [
      "Joe's Burgers",
      "American style",
      "Hamburgers and fries",
      "#bcf7c3",
      require("../../assets/burger.png"),
    ],
    [
      "Joe's Burgers",
      "American style",
      "Hamburgers and fries",
      "#ebf0c0",
      require("../../assets/dosa.png"),
    ],
    [
      "Joe's Burgers",
      "American style",
      "Hamburgers and fries",
      "#dcbcf7",
      require("../../assets/biryani.png"),
    ],
    [
      "Joe's Burgers",
      "American style",
      "Hamburgers and fries",
      "#f7bcea",
      require("../../assets/dosa.png"),
    ],
    [
      "Joe's Burgers",
      "American style",
      "Hamburgers and fries",
      "#f5cdc6",
      require("../../assets/rolls.png"),
    ],
  ];
  const rightbox_itm = [
    [
      "Joe's Burgers",
      "American style",
      "Hamburgers and fries",
      "#f7bcea",
      require("../../assets/sandwich.png"),
    ],
    [
      "Joe's Burgers",
      "American style",
      "Hamburgers and fries",
      "#dcbcf7",
      require("../../assets/thali.png"),
    ],
    [
      "Joe's Burgers",
      "American style",
      "Hamburgers and fries",
      "#ebf0c0",
      require("../../assets/paratha.png"),
    ],
    [
      "Joe's Burgers",
      "American style",
      "Hamburgers and fries",
      "#bcf7c3",
      require("../../assets/paneer.png"),
    ],
    [
      "Joe's Burgers",
      "American style",
      "Hamburgers and fries",
      "#f7e6bc",
      require("../../assets/chaat.png"),
    ],
  ];

  const funout = (str) => {
    navigation.navigate("Showresult", {
      content: str,
    });
  };
  return (
    <View>
      <View style={{ height: 40, backgroundColor: "#fff" }}></View>

      <View
        style={[
          style.home_header,
        ]}
      >
        <View style={style.foody}>
          <Text
            style={{
              fontSize: 25,
              fontWeight: "bold",
              alignItems: "center",
              alignSelf: "center",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            Foody
          </Text>
        </View>
        <View style={style.flex_icon}>
          <TouchableOpacity
            onPress={() => {
              navigation.push("Searchbar");
            }}
          >
            <Ionicons name="search" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Cart");
            }}
          >
            <SimpleLineIcons
              style={{ marginHorizontal: 10 }}
              name="bag"
              size={24}
              color="black"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="md-ellipsis-vertical" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={[{ backgroundColor: "#fafbfc", marginBottom: 100 }]}
      >
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          style={{ marginTop: 10 }}
        >
          {Array.from(topheaderitm).map((itm, ind) => {
            return (
              <View
                key={ind}
                style={[
                  style.scrollView_card,
                  { backgroundColor: itm[2] },
                  style.elevation,
                ]}
              >
                <View style={{ width: 100 }}>
                  <Image
                    source={itm[3]}
                    style={{
                      position: "absolute",
                      left: 5,
                      resizeMode: "contain",
                      height: 100,
                      width: 100,
                    }}
                  />
                </View>
                <View style={{ width: 221, marginLeft: 5}}>
                  <View style={{marginLeft:10,marginTop:22}}><Text style={{fontSize:14,fontWeight:'bold',color:'#5a5a5e'}}>{itm[0]}</Text></View>
                  <View style={{marginLeft:10,marginTop:2}}><Text style={{fontSize:12,fontWeight:'500',color:'#5a5a5e'}}>{itm[1]}</Text></View>
                </View>
              </View>
            );
          })}
        </ScrollView>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal
          style={{ marginVertical: 20, marginHorizontal: 10 }}
        >
          {Array.from(itm).map((itm, ind) => {
            return (
              <View key={ind} style={style.item_name}>
                <TouchableOpacity
                  onPress={() => {
                    funout(itm[0]);
                  }}
                >
                  <Text style={style.text_font}>{itm[0]}</Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </ScrollView>
        <View style={style.itmcss}>
          <View style={style.itmleftcss}>
            {Array.from(leftbox_itm).map((itm, ind) => {
              return (
                <View
                  key={ind}
                  style={[
                    style.itmcardleft,
                    style.elevation,
                    { backgroundColor: itm[3] },
                  ]}
                >
                  <View style={{ height: 133 }}>
                    <Image
                      key={itm[4]}
                      style={[
                        style.cardimage,
                        {
                          position: "absolute",
                          right: 5,
                          resizeMode: "contain",
                        },
                      ]}
                      source={itm[4]}
                    />
                  </View>
                  <View style={{ height: 80 }}>
                    <View style={{ marginLeft: 7 }}>
                      <Text style={style.text_font}>{itm[0]}</Text>
                      <Text style={{ color: "#6b717d", lineHeight: 20 }}>
                        {itm[1]}
                      </Text>
                      <Text style={{ color: "#6b717d", lineHeight: 20 }}>
                        {itm[2]}
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        marginLeft: 5,
                      }}
                    >
                      <EvilIcons name="star" size={20} color="black" />
                      <Text>5.5</Text>
                    </View>
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        position: "absolute",
                        right: 10,
                      }}
                    >
                      <FontAwesome5 name="circle" size={12} color="black" />
                      <FontAwesome5 name="circle" size={12} color="black" />
                    </View>
                  </View>
                </View>
              );
            })}
          </View>
          <View style={style.itmrightcss}>
            {Array.from(rightbox_itm).map((itm, ind) => {
              return (
                <View
                  key={ind}
                  style={[
                    style.itmcardright,
                    style.elevation,
                    { backgroundColor: itm[3] },
                  ]}
                >
                  <View style={{ height: 170 }}>
                    <Image
                      style={[
                        style.cardrimage,
                        {
                          position: "absolute",
                          right: 5,
                          resizeMode: "contain",
                        },
                      ]}
                      source={itm[4]}
                    />
                  </View>
                  <View style={{ height: 80, marginTop: 10 }}>
                    <View style={{ marginLeft: 7 }}>
                      <Text style={style.text_font}>{itm[0]}</Text>
                      <Text style={{ color: "#6b717d", lineHeight: 20 }}>
                        {itm[1]}
                      </Text>
                      <Text style={{ color: "#6b717d", lineHeight: 20 }}>
                        {itm[2]}
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        marginLeft: 5,
                      }}
                    >
                      <EvilIcons name="star" size={20} color="black" />
                      <Text>5.5</Text>
                    </View>
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        position: "absolute",
                        right: 10,
                      }}
                    >
                      <FontAwesome5 name="circle" size={12} color="black" />
                      <FontAwesome5 name="circle" size={12} color="black" />
                    </View>
                  </View>
                </View>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  cardimage: {
    height: 130,
    width: 135,
  },
  cardrimage: {
    height: 160,
    width: 140,
  },
  elevation: {
    elevation: 5,
    shadowColor: "#52006A",
  },
  itmcardleft: {
    opacity: 1,
    margin: 10,
    borderRadius: 10,
    height: 250,
  },
  itmcardright: {
    opacity: 1,
    margin: 10,
    borderRadius: 10,
    height: 300,
  },
  itmcss: {
    display: "flex",
    flexDirection: "row",
  },
  itmleftcss: {
    height: undefined,
    width: 180,
  },
  itmrightcss: {
    height: undefined,
    width: 180,
  },
  item_name: {
    marginHorizontal: 9,
    fontSize: 20,
  },
  text_font: {
    fontSize: 17,
    fontWeight: "bold",
  },
  home_header: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#fff",
    height: 60,
  },
  foody: {
    marginLeft: 10,
    alignSelf: "center",
  },
  flex_icon: {
    display: "flex",
    flexDirection: "row",
    alignSelf: "center",
    position: "absolute",
    right: 10,
  },
  scrollView_card: {
    width: 327,
    height: 100,
    marginVertical: 5,
    marginHorizontal: 16,
    borderRadius: 5,
    overflow: "hidden",
    display: "flex",
    flexDirection: "row",
  },
});

export default Home;
