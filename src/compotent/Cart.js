import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Image,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Cart = ({ navigation }) => {
  const [colorhead, setcolorhead] = useState("#edf1f2");
  const [colortip30, setcolortip30] = useState("gray");
  const [colortip50, setcolortip50] = useState("gray");
  const [colortip70, setcolortip70] = useState("gray");
  const [colortipother, setcolortipother] = useState("gray");
  const changecolor = () => {
    setcolorhead("#fff");
  };
  const cart = [
    {
      storename: "Punjabi thaba the restaurant and new chiness food going ",
      foodname: "Pizza chilli",
      price: 100,
      quantity: 3,
    },
    {
      storename: "Punjabi thaba the restaurant and new chiness food going ",
      foodname: "Jalebi",
      price: 500,
      quantity: 2,
    },
    {
      storename: "Punjabi thaba the restaurant and new chiness food going ",
      foodname: "Pizza chilli",
      price: 100,
      quantity: 3,
    },
  ];
  return (
    <View>
      <View style={{ height: 41, backgroundColor: "#fff" }}></View>
      <View
        style={{
          paddingVertical: 10,
          paddingHorizontal: 25,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: colorhead,
          height: 60,
          shadowColor: "gray",
          elevation: 10,
          borderRadius: 10,
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
          {cart.length != 0 && (
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                {cart && cart[0].storename}
              </Text>
            </View>
          )}
        </View>
      </View>
      {cart.length != 0 && (
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ marginBottom: 50 }}
        >
          <View
            style={{
              height: 70,
              elevation: 2,
              shadowColor: "#b3193a",
              borderRadius: 15,
              marginHorizontal: 17,
              padding: 10,
              marginTop: 20,
              backgroundColor: "#dbf2d8",
            }}
          >
            <Text style={{ paddingLeft: 5, fontSize: 18, fontWeight: "bold" }}>
              ₹20 total savigs
            </Text>
            <Text style={{ paddingLeft: 5, fontSize: 16, fontWeight: "400" }}>
              with FREE delivery on your order
            </Text>
          </View>
          <View
            style={{
              marginTop: 30,
              marginHorizontal: 15,
              backgroundColor: "#fff",
              borderRadius: 15,
              elevation: 5,
              shadowColor: "gray",
              marginBottom: 5,
            }}
          >
            {cart &&
              Array.from(cart).map((itm, ind) => {
                return (
                  <View
                    key={ind}
                    style={{
                      height: 50,
                      marginHorizontal: 10,
                      marginVertical: 5,
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <MaterialCommunityIcons
                      name="square-circle"
                      size={18}
                      color="green"
                    />
                    <View style={{ marginLeft: 8 }}>
                      <Text style={{ fontWeight: "600", color: "gray" }}>
                        {itm.foodname}
                      </Text>
                    </View>
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        borderWidth: 1,
                        paddingVertical: 5,
                        paddingHorizontal: 5,
                        borderRadius: 5,
                        borderColor: "gray",
                        position: "absolute",
                        right: 50,
                      }}
                    >
                      <TouchableOpacity>
                        <Entypo name="minus" size={18} color="gray" />
                      </TouchableOpacity>
                      <Text style={{ marginHorizontal: 5, color: "gray" }}>
                        {itm.quantity}
                      </Text>
                      <TouchableOpacity>
                        <Entypo name="plus" size={18} color="gray" />
                      </TouchableOpacity>
                    </View>
                    <View style={{ position: "absolute", right: 5 }}>
                      <Text style={{ color: "gray" }}>₹{itm.price}</Text>
                    </View>
                  </View>
                );
              })}
          </View>
          <View
            style={{ marginHorizontal: 17, marginBottom: 15, marginTop: 25 }}
          >
            <Text style={{ fontSize: 18, fontWeight: "700" }}>
              Offers & Benefits
            </Text>
          </View>
          <View
            style={{
              marginHorizontal: 15,
              backgroundColor: "#fff",
              borderRadius: 15,
              elevation: 5,
              shadowColor: "gray",
              marginBottom: 5,
            }}
          >
            <View
              style={{
                marginHorizontal: 10,
                marginVertical: 5,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                paddingVertical: 10,
              }}
            >
              <Image
                style={{ width: 25, height: 25 }}
                source={require("../../assets/discount.png")}
              />
              <View style={{ marginLeft: 8, width: 230 }}>
                <Text style={{ fontWeight: "600", color: "gray" }}>
                  WELCOME offer
                </Text>
                <Text style={{ color: "gray" }}>
                  Save onother ₹70 on this order dfd cvfg ffdg
                </Text>
              </View>

              <View style={{ position: "absolute", right: 5 }}>
                <TouchableOpacity>
                  <Text style={{ color: "orange" }}>Apply</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                borderTopWidth: 1,
                borderStyle: "dashed",
                borderColor: "gray",
                height: 40,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                style={{
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Text style={{ color: "gray", alignItems: "center" }}>
                  View more coupons
                </Text>
                <Entypo
                  name="chevron-right"
                  size={18}
                  color="gray"
                  style={{ marginTop: 3 }}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{ marginHorizontal: 17, marginBottom: 15, marginTop: 25 }}
          >
            <Text style={{ fontSize: 18, fontWeight: "700" }}>
              Tip your delivery partner
            </Text>
          </View>
          <View
            style={{
              marginHorizontal: 15,
              backgroundColor: "#fff",
              borderRadius: 15,
              elevation: 5,
              shadowColor: "gray",
              marginBottom: 5,
            }}
          >
            <View
              style={{
                marginHorizontal: 10,
                marginVertical: 5,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                paddingVertical: 10,
              }}
            >
              <View style={{ marginLeft: 8 }}>
                <Text style={{ color: "gray" }}>
                  Thank your delivery partner by leaving them a tip. 100% of the
                  tip will go to your delivery partner.
                </Text>
              </View>
            </View>
            <View
              style={{
                height: 40,
                justifyContent: "space-evenly",
                alignItems: "center",
                display: "flex",
                flexDirection: "row",
                marginBottom: 10,
              }}
            >
              <TouchableOpacity
                style={{
                  alignItems: "center",
                  borderWidth: 1,
                  borderColor: colortip30,
                  paddingHorizontal: 13,
                  paddingVertical: 4,
                  borderRadius: 5,
                  elevation: 5,
                  shadowColor: "gray",
                  backgroundColor: "#fff",
                }}
                onPress={() => {
                  setcolortip30(colortip30 == "gray" ? "orange" : "gray");
                  setcolortip50("gray");
                  setcolortip70("gray");
                  setcolortipother("gray");
                }}
              >
                <Text style={{ color: colortip30, alignItems: "center" }}>
                  ₹30
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  alignItems: "center",
                  borderWidth: 1,
                  borderColor: colortip50,
                  paddingHorizontal: 13,
                  paddingVertical: 4,
                  borderRadius: 5,
                  elevation: 5,
                  shadowColor: "gray",
                  backgroundColor: "#fff",
                }}
                onPress={() => {
                  setcolortip30("gray");
                  setcolortip50(colortip50 == "gray" ? "orange" : "gray");
                  setcolortip70("gray");
                  setcolortipother("gray");
                }}
              >
                <Text style={{ color: colortip50, alignItems: "center" }}>
                  ₹50
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  alignItems: "center",
                  borderWidth: 1,
                  borderColor: colortip70,
                  paddingHorizontal: 13,
                  paddingVertical: 4,
                  borderRadius: 5,
                  elevation: 5,
                  shadowColor: "gray",
                  backgroundColor: "#fff",
                }}
                onPress={() => {
                  setcolortip30("gray");
                  setcolortip50("gray");
                  setcolortip70(colortip70 == "gray" ? "orange" : "gray");
                  setcolortipother("gray");
                }}
              >
                <Text style={{ color: colortip70, alignItems: "center" }}>
                  ₹70
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  alignItems: "center",
                  borderWidth: 1,
                  borderColor: colortipother,
                  paddingHorizontal: 13,
                  paddingVertical: 4,
                  borderRadius: 5,
                  elevation: 5,
                  shadowColor: "gray",
                  backgroundColor: "#fff",
                }}
                onPress={() => {
                  setcolortip30("gray");
                  setcolortip50("gray");
                  setcolortip70("gray");
                  setcolortipother(colortipother == "gray" ? "orange" : "gray");
                }}
              >
                <Text style={{ color: colortipother, alignItems: "center" }}>
                  Other
                </Text>
              </TouchableOpacity>
            </View>
            {colortipother == "orange" && (
              <View
                style={{
                  marginHorizontal: 20,
                  marginBottom: 15,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  borderBottomWidth: 1,
                  borderBottomColor: "orange",
                }}
              >
                <Text style={{ fontSize: 20 }}>₹</Text>
                <TextInput
                  placeholder="Enter Tip Amount"
                  style={{
                    height: undefined,
                    paddingHorizontal: 10,
                    width: 270,
                  }}
                  keyboardType="number-pad"
                />
              </View>
            )}
          </View>
          <View
            style={{ marginHorizontal: 17, marginBottom: 15, marginTop: 25 }}
          >
            <Text style={{ fontSize: 18, fontWeight: "700" }}>
              Bill Details
            </Text>
          </View>
          <View
            style={{
              marginHorizontal: 15,
              backgroundColor: "#fff",
              borderRadius: 15,
              elevation: 5,
              shadowColor: "gray",
            }}
          >
            <View
              style={{
                marginHorizontal: 10,
                marginTop: 15,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <View style={{ marginLeft: 8, width: 230 }}>
                <Text style={{ fontWeight: "600", color: "gray" }}>
                  Item Total
                </Text>
              </View>

              <View style={{ position: "absolute", right: 5 }}>
                <Text style={{ color: "orange" }}>₹500</Text>
              </View>
            </View>
            <View
              style={{
                marginHorizontal: 10,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                paddingVertical: 10,
              }}
            >
              <View style={{ marginLeft: 8, width: 230 }}>
                <Text style={{ color: "gray" }}>Delivery partner fee</Text>
              </View>

              <View style={{ position: "absolute", right: 5 }}>
                <Text style={{ color: "orange" }}>₹20</Text>
              </View>
            </View>
            
              <View
                style={{
                  marginHorizontal: 10,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  paddingVertical: 5,
                  borderTopWidth:1,
                  borderColor:'gray',
                  borderStyle:'dashed',
                  marginTop:5
                }}
              >
                <View style={{ marginLeft: 8, width: 230 }}>
                  <Text style={{ fontWeight: "600", color: "gray" }}>Delivery partner fee</Text>
                </View>

                {colortip30 =='orange' && <View style={{ position: "absolute", right: 5 }}>
                  <Text style={{ color: "orange" }}>₹10</Text>
                </View>}
                {colortip30 !='orange' && <View style={{ position: "absolute", right: 5 }}>
                  <TouchableOpacity onPress={()=>{
                    setcolortip50("orange")
                }}>
                  <Text style={{ fontWeight: "600", color: "orange" }}>Add tip</Text>
                  </TouchableOpacity>
                </View>}
              </View>
              <View
                style={{
                  marginHorizontal: 10,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginBottom:5
                }}
              >
                <View style={{ marginLeft: 8, width: 230 }}>
                  <TouchableOpacity>
                  <Text style={{ fontWeight: "600", color: "gray" }}>Govt Taxes & Restaurant Charge</Text>
                  </TouchableOpacity>
                </View>
                 <View style={{ position: "absolute", right: 5 }}>
                  <Text style={{ color: "orange" }}>₹10</Text>
                </View>
                
              </View>
              <View
                style={{
                  marginHorizontal: 10,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  paddingVertical: 10,
                  borderTopWidth:1,
                  borderColor:'gray',
                  borderStyle:'dashed',
                  marginTop:5
                }}
              >
                <View style={{ marginLeft: 8, width: 230 }}>
                  <Text style={{ fontWeight: "600", color: "gray" }}>To pay</Text>
                </View>
                <View style={{ position: "absolute", right: 5 }}>
                  <Text style={{ color: "orange" }}>₹510</Text>
                </View>
              </View>
            </View>
          <View
            style={{ marginHorizontal: 17, marginBottom: 15, marginTop: 25 }}
          >
            <Text style={{ fontSize: 18, fontWeight: "700" }}>
              Review your order and address details to avoid cancellations
            </Text>
          </View>
          <View
            style={{
              marginHorizontal: 15,
              backgroundColor: "#fff",
              borderRadius: 15,
              elevation: 5,
              shadowColor: "gray",
              marginBottom: 115,
            }}
          >
            <View style={{ paddingHorizontal: 13, paddingVertical: 17 }}>
              <Text style={{ lineHeight: 20, color: "gray" }}>
                {"Note :"} If you cancel within 60 seconds of placing your
                order, a 100% refund will be issuded. No refund for
                cancellations made after 60 seconds
              </Text>
              <Text style={{ lineHeight: 20, color: "gray", marginTop: 10 }}>
                Avoid cancellation as it leads to food wastage.
              </Text>
              <TouchableOpacity style={{ width: 193 }}>
                <Text
                  style={{
                    lineHeight: 20,
                    color: "orange",
                    marginTop: 10,
                    borderBottomWidth: 1,
                    borderBottomColor: "orange",
                    borderStyle: "dashed",
                    fontWeight: "500",
                  }}
                >
                  READ CANCELLATION POLICY
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default Cart;

const style = StyleSheet.create({});
